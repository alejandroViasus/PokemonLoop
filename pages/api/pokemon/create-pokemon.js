
import dbConnect from '../../../lib/dbConnect';

import pokemon from '../../../models/pokemon';

export default async function handler(req, res) {
    console.log(".............create pokemon")
  const { method } = req;

  console.log(req.body,method)

  await dbConnect();

  switch (method) {

    case 'POST':
      try {
        const NewPokemon = await pokemon.create(req.body);
        console.log("_____________________________________por Body",req.body)
        res.status(201).json({ success: true, data: NewPokemon });
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
