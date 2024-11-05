import Conversation from '../model/conversationModel.js';
import Message from '../model/messageModel.js'
import { getReceiverSocketId, io } from '../socket/socket.js';

// sendMessage - http://localhost:5000/api/message/send/:id
export const sendMessage = async (req, res, next) => {
    try {

        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // check exsist conversation 
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        // no conversation yet
        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
                messages: [],
            });
        }

        // create new Message
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        })

        // Check if the new message was created and add its ID to the conversation
        if (newMessage) {
            if (!conversation.messages) {
                conversation.messages = []; // Ensure the message array is initialized
            }
            conversation.messages.push(newMessage._id);
        }

        // await conersation.save();
        // await newMessage.save();

        // this will run in parallel
        await Promise.all([newMessage.save(), conversation.save()]);

        // SOCKET IO FUNCTIONALITY WILL GO HERE
        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){
            // io.to(<socket_id>).emit() used to send events to specific client
            io.to(receiverSocketId).emit("newMessage", newMessage)
        }


        return res.status(201).json(newMessage);


    } catch (error) {
        console.log("Error in sendMessage");
        return res.status(500).json({ error: `Internal server error with ${error.message}` });
    }
}

export const getMessages = async (req, res, next) => {
    try {

        const { id: userToChat } = req.params;
        const senderId = req.user._id;

        // chack any conversation is availble
        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChat] },
        }).populate("messages");

        // no any conversation 
        if(!conversation)return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(201).json(messages);

    } catch (error) {
        console.log("Error in getMessage");
        return res.status(500).json({ error: `Internal server error with ${error.message}` });
    }
}

