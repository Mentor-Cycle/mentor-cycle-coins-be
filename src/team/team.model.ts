import mongoose from 'mongoose';

export const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  active: { type: Boolean, required: true, default: true },
});
