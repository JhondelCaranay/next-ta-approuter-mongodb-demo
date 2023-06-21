import createModel from "@/utils/createModel";
import { Schema, Document, Model } from "mongoose";

// Implementing Mongoose Models with Next.js in TypeScript
// https://blog.adwinang.dev/implementing-mongoose-models-with-nextjs-in-typescript
// https://blog.adwinang.dev/implementing-mongoose-models-with-nextjs-in-typescript
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);

type UserModel = Model<IUser, {}>;
export default createModel<IUser, UserModel>("User", userSchema);
