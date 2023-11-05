import dbConnect from '../../../../lib/dbConnect';

import user from '../../../../models/user';

export default async function handler(req, res) {
    console.log(".............in trainer")
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const id = req.query.id;
        console.log(".............in trainer by ID",id);
        const users = await user.find({_id:id});
        //const users = await user.find({});

        if(users.length===0){
          res.status(200).json({ success: true,register:false, data: users[0] });
        }else{
          res.status(200).json({ success: true, register:true, data: users[0]  });
        }
    
      } catch (error) {
        res.status(400).json({ success: false,a:"" ,error});
      }
      break;
    case 'POST':
      try {
        const trainer = await trainer.create(req.body);
        res.status(201).json({ success: true, data: trainer });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
