// @flow
import mongoose from 'mongoose';

export type UserData = {
  firstName: string,
  lastName: string
};

const UserSchema = new mongoose.Schema({
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
});

export default mongoose.model('User', UserSchema);