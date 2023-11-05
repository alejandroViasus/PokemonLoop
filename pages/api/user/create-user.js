
import dbConnect from '../../../lib/dbConnect';
import user from '../../../models/user';

export default async function handler(req, res) {
    console.log(".............in trainer")
  const { method } = req;

  console.log(req.body,method)

  await dbConnect();

  switch (method) {

    case 'POST':
      try {
        const Newuser = await user.create(req.body);
        console.log("_____________________________________por Body",req.body)
        res.status(201).json({ success: true, data: Newuser });
      } catch (error) {
        console.log("______error",error)
        res.status(400).json({ success: false ,error});
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
