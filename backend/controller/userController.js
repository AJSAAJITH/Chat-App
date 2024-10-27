import User from '../model/userModel.js';

export const getUsersForSidebar = async (req, res, next) => {
    try {

        const loggedUserId = req.user._id;

        const filterUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password");

        return res.status(201).json(filterUsers);

    } catch (error) {
        console.log("Error in userController.getUsersForSidebar");
        return res.status(500).json({ message: `Internal server Error: ${error.message}` });
    }
}