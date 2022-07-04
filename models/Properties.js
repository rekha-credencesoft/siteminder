const mongoose = require("mongoose");

const PropertiesSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  totalNoRooms: { type: Number, required: true },
  noOfBooked: { type: Number, default: 0 },
  noOfAvailable: { type: Number, default: 0 },
  noOfOnHold: { type: Number, default: 0 },
  date: { type: Number, required: true },
  roomName: { type: String },
  propertyName: { type: String, required: true },
  fromDate: { type: Number },
  toDate: { type: Number },
  roomId: { type: Number },
  propertyId: { type: Number, required: true },
  updateCount: { type: Number, default: 0 },
  updateType: { type: String },
  ratePlanCode: { type: String },
  status: { type: String },
  restriction: { type: String },
  channelManagerUpdateType: { type: String },
  roomRatePlans: [],
  imageList: [],
  description: { type: String },
  roomDetails: [],
  ratePlanName: { type: String },
});

mongoose.models = {};
export default mongoose.model("Properties", PropertiesSchema);
