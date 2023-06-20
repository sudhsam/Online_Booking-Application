import express from "express";
import dotenv from "dotenv";
//import  router
// import authRoute from "./routes/authRoutes.js";
// import usersRoute from "./routes/usersRoutes.js";
import HotelRoute from "./routes/HotelsRoutes.js";
// import roomRoute from "./routes/roomsRoutes.js";

//import database connection
import Connection from "./config/db.js";

const app = express();
//config
dotenv.config();
//defining port
const PORT = process.env.PORT || 8000;

//database call
Connection();

//middleware
app.use(express.json());
// app.use("/api/auth", authRoute);
app.use("/api/hotels", HotelRoute);
// app.use("/api/room", roomRoute);
// app.use("/api/users", usersRoute);
//port listening
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
