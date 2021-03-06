import * as mongoose from "mongoose";
import User from "./user.interface";

const addressSchema = new mongoose.Schema({
  city: String,
  country: String,
  street: String,
});

const userSchema = new mongoose.Schema(
  {
    // address: addressSchema,
    userEmail: String,
    userName: String,
    userLastName: String,
    userPassword: {
      type: String,
      get: (): undefined => undefined,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

userSchema.virtual("userFullName").get(function () {
  return `${this.userName} ${this.userLastName}`;
});

userSchema.virtual("posts", {
  ref: "Post",
  localField: "_id",
  foreignField: "author",
});

const userModel = mongoose.model<User & mongoose.Document>("User", userSchema);

export default userModel;
