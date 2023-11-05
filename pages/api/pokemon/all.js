// src/api/posts.js


import dbConnect from '../../../lib/dbConnect';
import pokemon from '../../../models/pokemon';

export default async function handler(req, res) {
    console.log(".............in pokemon")
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        // const email = req.query.email;
        const id = req.query.id;
        console.log(".............in pokemon GET",id);
        const pokemons = await pokemon.find({trainer:id});
        res.status(200).json({ success: true, data: pokemons });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const pokemon = await pokemon.create(req.body);
        res.status(201).json({ success: true, data: pokemon });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
