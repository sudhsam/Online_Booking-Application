// Import the required modules and models
import Hotel from "../models/HotelsModels.js";

// Controller function to create a new hotel
export const createHotel = async (req, res) => {
  try {
    // Extract the hotel details from the request body
    const { name, type, city, address, distance, title, desc, cheapestPrice } =
      req.body;

    // Create a new hotel object
    const hotel = new Hotel({
      name,
      type,
      city,
      address,
      distance,
      title,
      desc,
      cheapestPrice,
    });
    // Save the hotel object to the database
    const createdHotel = await hotel.save();

    // Return the newly created hotel as the response
    return res.status(201).json(createdHotel);
  } catch (error) {
    // Handle any errors that occur during the creation process
    return res.status(500).json({ error: "Failed to create hotel" });
  }
};

// Controller function to update hotel
export const updateHotel = async (req, res) => {
  try {
    // Extract the hotel ID and updated details from the request parameters and body
    const { id } = req.params;
    const { name, type, city, address, distance, title, desc, cheapestPrice } =
      req.body;

    // Find the hotel in the database by its ID
    const hotel = await Hotel.findById(id);

    if (!hotel) {
      return res.status(404).json({ error: "Hotel not found" });
    }

    // Update the hotel details
    hotel.name = name;
    hotel.type = type;
    hotel.city = city;
    hotel.address = address;
    hotel.distance = distance;
    hotel.desc = desc;
    hotel.cheapestPrice = cheapestPrice;

    // Save the updated hotel to the database
    const updatedHotel = await hotel.save();

    // Return the updated hotel as the response
    res.json(updatedHotel);
  } catch (error) {
    // Handle any errors that occur during the update process
    res.status(500).json({ error: "Failed to update hotel" });
  }
};

//   try {
//     const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {
//       $set: req.body,
//     });
//     res.status(200).json(updatedHotel);
//   } catch (err) {
//     res.status(500).json(error);
//   }
// };

// Controller function to delete hotel
export const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);

    res.status(200).json("Hotel has been deleted..");
  } catch (err) {
    res.status(500).json(error);
  }
};

// Controller function to Get hotel details through ID
export const getHotelDetailById = async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (err) {
    res.status(500).json(error);
  }
};

// Controller function to Get All hotel details
export const getAllHotel = async (req, res) => {
  try {
    const hotels = await Hotel.find(req.params.id);
    res.status(200).json(hotels);
  } catch (err) {
    res.status(500).json(error);
  }
};
