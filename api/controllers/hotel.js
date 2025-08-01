
import Hotel from "../models/Hotel.js";

// create
export const createHotel = async(req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        // res.status(500).json(error);
        next(err);
    }
}


// update
export const updatedHotel = async(req, res, next) => {
   try {
          const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true});
          res.status(200).json(updatedHotel);
          
      } catch (err) {
        // res.status(500).json(error);
        next(err);
    }
}


// delete
export const deleteHotel = async(req, res, next) => {
    try {
           await Hotel.findByIdAndDelete(req.params.id);
           res.status(200).json("Hotel has been deleted.");
           
       } catch (err) {
        // res.status(500).json(error);
        next(err);
    }
}



// get
export const getHotel = async(req, res, next) => {
      try {
            const hotel = await Hotel.findById(req.params.id);
            res.status(200).json(hotel);
        } catch (err) {
        // res.status(500).json(error);
        next(err);
    }
}




// get all

export const getHotels = async(req, res, next) => {
    try {
            const hotels = await Hotel.find();
            res.status(200).json(hotels);
        } catch (err) {
        // res.status(500).json(error);
        next(err);
    }
}

