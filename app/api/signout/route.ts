import { NextResponse } from "next/server";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export async function POST() {
  try {
    await signOut(auth);
    return NextResponse.json({ message: "Signed out successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}
