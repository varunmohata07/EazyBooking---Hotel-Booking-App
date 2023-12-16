import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";

const router = express.Router();

//Create 
router.post("/:hotelid", createRoom);

//update
router.put("/:id", updateRoom);

//delete
router.delete("/:id/:hotelid", deleteRoom);

//get
router.get("/:id", getRoom);

//getall
router.get("/", getRooms);

export default router