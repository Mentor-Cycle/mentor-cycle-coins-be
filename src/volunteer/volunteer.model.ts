import * as mongoose from 'mongoose';

export const VolunteerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: false },
    team: { type: String, required: false },
    photo: { type: String, required: false },
    mentorCoins: { type: Number, required: false },
    active: { type: Boolean, required: false },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    versionKey: false,
  },
);
