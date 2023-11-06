// import dbConnect from '../../../lib/dbConnect';
import dbConnect from "../../../../lib/dbConnect"
import user from '../../../../models/user';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'PUT':
        const id = req.query.id;
        const updateUder=  req.body
        
        console.log(":......................................:");
        console.log("id:",id,);
        console.log("User:",updateUder);
      try {
        const updatedUser = await user.findByIdAndUpdate(
            id,
            updateUder, 
          { new: true } 
        );

        if (!updatedUser) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, data: updatedUser });
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: 'Method not allowed' });
      break;
  }
}