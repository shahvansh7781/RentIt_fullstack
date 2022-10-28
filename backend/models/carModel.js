const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Car Title cannot be empty!"],
  },
  description: {
    type: String,
    required: [true, "Car Description cannot be empty!"],
  },
  rent: {
    type: Number,
    maxLength: [5, "Rent cannot exceed 5 characters"],
    required: [true, "Car Rent cannot be empty!"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  noPlate: {
    type: String,
    required: [true, "Number Plate cannot be empty!"],
  },
  company: {
    type: String,
    required: [true, "Car Category cannot be empty!"],
    enum: ["Tata", "Hyundai", "Maruti Suzuki", "Toyota", "Mahindra"],
  },
  model: {
    type: String,
    required: [true, "Car Model cannot be empty!"],
  },
  stock: {
    type: Number,
    default: 1,
    maxLength: [4, "Stock can't exceed 4"],
  },
  features: {
    colour: {
      type: String,
      required: [true, "Colour can't be empty!"],
    },
    seats: {
      type: Number,
      required: [true, "No. of Seats cannot be empty!"],
    },
    gear: {
      type: String,
      required: [true, "Gear type can't be empty!"],
      enum: ["Auto", "Manual"],
    },
    fuelType: {
      type: String,
      required: [true, "Fuel type can't be empty!"],
      enum: ["Petrol", "Gas", "Diesel"],
    },
    airConditioner: {
      type: String,
      required: [true, "Air Conditioner field can't be empty!"],
      enum: ["Yes", "No"],
    },
    gps: {
      type: String,
      required: [true, "GPS field can't be empty!"],
      enum: ["Yes", "No"],
    },
    usb: {
      type: String,
      required: [true, "USB field can't be empty!"],
      enum: ["Yes", "No"],
    },
    radio: {
      type: String,
      required: [true, "FM Radio field can't be empty!"],
      enum: ["Yes", "No"],
    },
    parkingSensor: {
      type: String,
      required: [true, "Sensor field can't be empty!"],
      enum: ["Yes", "No"],
    },
  },
  rating: {
    type: Number,
    default: 0,
  },
  noOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      feedback: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Car", carSchema);
