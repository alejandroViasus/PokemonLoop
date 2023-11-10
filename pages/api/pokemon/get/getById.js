import dbConnect from "../../../../lib/dbConnect";
import pokemon from "../../../../models/pokemon";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const id = req.query.id;
        //console.log(".............in pokemon by ID", id);
        const pokemons = await pokemon.findById(id);
        //const users = await user.find({});

        res.status(200).json({ success: true, data: pokemons });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false, a: "", error });
      }
      break;
  }
}
