import Properties from "../../models/Properties";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  //   let properties = await Properties.find();
  if (req.method == "GET") {
    try {
      const properties = await Properties.find();
      res.status(200).json(properties);
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

export default connectDb(handler);
