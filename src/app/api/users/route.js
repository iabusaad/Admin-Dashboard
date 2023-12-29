import { User } from "@/models/userSchema";
import  ConnectToDb from "@/utils/db";
import { NextResponse } from "next/server";



export const fetchUser = async (request) => {
  try {
    ConnectToDb();
    const users = await User.find();
    return NextResponse.json(users)
  } catch (err) {
    console.log(err);
    return NextResponse.json({
      message: "fail to conncet user",
      status: 201,
  });
  }
};
