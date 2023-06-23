import Post from "@/models/Post";
import dbConnect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await dbConnect();
    const posts = await Post.find();
    return new NextResponse(JSON.stringify(posts), { status: 200 });

    // return new NextResponse(
    //   JSON.stringify([
    //     {
    //       _id: "1",
    //       title: "title",
    //       desc: "desc",
    //       img: "https://picsum.photos/400/250",
    //     },
    //   ]),
    //   { status: 200 }
    // );
  } catch (err) {
    console.log(err);
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const POST = async (request: Request) => {
  const body = await request.json();

  const newPost = new Post(body);

  try {
    await dbConnect();

    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
