import dbConnect from "../../../../lib/dbConnect";
import pokemon from "../../../../models/pokemon";

export default async function handler(req, res) {
  const { method } = req;
  await dbConnect();

  switch (method) {
    case "PUT":
      const id = req.query.id;
      const updatePokemon = req.body;
      console.log(":......................................:");
      console.log("id:", id);
      console.log("Pokemon --- UPDATE:", updatePokemon.team);

      try {
        const Pokemon = await pokemon.findByIdAndUpdate(
          id,
          updatePokemon,
          { new: true }
        );
        if (!Pokemon) {
          return res
            .status(404)
            .json({ success: false, message: "Pokemon not found" });
        }
        
        res.status(200).json({ success: true, data:Pokemon});
      } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
