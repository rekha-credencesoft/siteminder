import Properties from "../../models/Properties";
import connectDb from "../../middleware/mongoose";

const handler = async (req, res) => {
  if (req.method == "POST") {
    // console.log(req.body);
    for (let i = 0; i < req.body.length; i++) {
      let newProperties = new Properties({
        price: req.body[i].price,
        totalNoRooms: req.body[i].totalNoRooms,
        noOfBooked: req.body[i].noOfBooked,
        noOfAvailable: req.body[i].noOfAvailable,
        noOfOnHold: req.body[i].noOfOnHold,
        date: req.body[i].date,
        roomName: req.body[i].roomName,
        propertyName: req.body[i].propertyName,
        fromDate: req.body[i].fromDate,
        toDate: req.body[i].toDate,
        roomId: req.body[i].roomId,
        propertyId: req.body[i].propertyId,
        updateCount: req.body[i].updateCount,
        updateType: req.body[i].updateType,
        ratePlanCode: req.body[i].ratePlanCode,
        status: req.body[i].status,
        restriction: req.body[i].restriction,
        channelManagerUpdateType: req.body[i].channelManagerUpdateType,
        roomRatePlans: req.body[i].roomRatePlans,
        imageList: req.body[i].imageList,
        description: req.body[i].description,
        roomDetails: req.body[i].roomDetails,
        ratePlanName: req.body[i].ratePlanName,
      });
      await newProperties.save();
    }
    res.status(200).json({ success: "SUCCESS" });
  } else {
    res.status(400).json(400).json({ error: "BAD REQUEST" });
  }
};

export default connectDb(handler);
