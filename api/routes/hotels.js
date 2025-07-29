import express from "express";
import Hotel from "../models/Hotel.js";
// import { createError } from "../utils/error.js";
import { createHotel } from "../controllers/hotel.js";
import { updatedHotel } from "../controllers/hotel.js";
import { deleteHotel } from "../controllers/hotel.js";
import { getHotel } from "../controllers/hotel.js";
import { getHotels } from "../controllers/hotel.js";

const router = express.Router();

// CREATE
router.post("/", createHotel);


// UPDATE
router.put("/:id", updatedHotel);


// DELETE
router.delete("/:id", deleteHotel);


// GET
router.get("/:id", getHotel);



// GET ALL
router.get("/", getHotels);




// 



export default router;