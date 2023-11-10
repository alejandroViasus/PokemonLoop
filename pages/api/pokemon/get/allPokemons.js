import dbConnect from "../../../../lib/dbConnect";
import pokemon from "../../../../models/pokemon";

export default async function handler(req, res) {
    const id = req.query.id;
  if (id) {
    //console.log(".............get all pokemons by ID");
    await dbConnect();
    const { method } = req;

    switch (method) {
      case "GET":
        try {
          // const email = req.query.email;
          const pokemons = await pokemon.find({ trainer: id });
          //console.log("in pokemon GET", pokemons);
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
}
