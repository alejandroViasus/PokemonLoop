// pages/api/pokemon/team/team.js

import dbConnect from '../../../../lib/dbConnect';
import pokemon from '../../../../models/pokemon';

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case 'GET':
      try {
        const trainer = req.query.id;
        let pokemons;

        //console.log("____",email);

        if (trainer) {
          // If an email is provided, filter the pokemons by email and team
          
          pokemons = await pokemon.find({ trainer, team: true });
        } else {
          // If no email is provided, return all pokemons with team: true
          pokemons = await pokemon.find({ team: true });
        }

        res.status(200).json({ success: true, data: pokemons });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
