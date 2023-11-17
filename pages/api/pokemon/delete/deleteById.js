import dbConnect from "../../../../lib/dbConnect";
import pokemon from "../../../../models/pokemon";

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();

  switch (method) {
      case "DELETE":
      try {
        const id = req.body.id;
        const deletePokemon = await pokemon.findByIdAndDelete(id);

        if (!deletePokemon) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
