import mongoose from "mongoose";
import { Object } from "mongoose/lib/schema/index";

const ImageSchema = new mongoose.Schema(
  {
    images: 
      {
        location: { type: String, required: true },
      },
    
  },
  {
    timestamps: true,
  }
);

export const ImageModel = mongoose.model("images", ImageSchema);