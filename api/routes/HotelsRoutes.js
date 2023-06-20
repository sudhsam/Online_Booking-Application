import express from "express";
// import hotel models
import Hotel from "../models/HotelsModels.js";
const router = express.Router();

//importing Controller
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotelDetailById,
  getAllHotel,
} from "../controllers/HotelsControllers.js";

//create
router.post("/", createHotel);

//update
router.put("/:id", updateHotel);
// delete
router.delete("/:id", deleteHotel);
//get
router.get("/:id", getHotelDetailById);
// get all
router.get("/", getAllHotel);

export default router;
