import express from 'express';
import { getMessages, sendMessage } from '../controller/messageController.js';
import protectRoute from '../middleware/protectRoute.js';

const router = express.Router();

router.route('/:id').get(protectRoute,getMessages);
router.route('/send/:id').post(protectRoute,sendMessage);


// router.route('/').get((req, res)=>{
// res.send('Message Page');
// })

export default router;