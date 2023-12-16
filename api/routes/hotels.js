import express from "express";
import { countByCity, createHotel, deleteHotel, getHotel, getHotels, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

//Create 
router.post("/", createHotel);

//update
router.put("/:id", updateHotel);

//delete
router.delete("/:id", deleteHotel);

//get
router.get("/find/:id", getHotel);

//getall
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getHotels);


export default router