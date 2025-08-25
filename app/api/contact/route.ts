
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;


    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({
      success: true,
      message: "Thanks for contacting us! We’ll get back to you soon.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
