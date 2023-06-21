import createModel from "@/utils/createModel";
import { Schema, Document, Model } from "mongoose";

// Implementing Mongoose Models with Next.js in TypeScript
// https://blog.adwinang.dev/implementing-mongoose-models-with-nextjs-in-typescript
// https://blog.adwinang.dev/implementing-mongoose-models-with-nextjs-in-typescript

interface IPost extends Document {
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export default mongoose.models.Post || mongoose.model<IPost>("Post", postSchema);
type PostModel = Model<IPost, {}>;

export default createModel<IPost, PostModel>("Post", postSchema);
