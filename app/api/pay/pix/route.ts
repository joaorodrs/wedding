import { NextRequest, NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, price, description } = body;

    const apiKey = process.env.ABACATE_PAY_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(
      "https://api.abacatepay.com/v1/pixQrCode/create",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: price * 100, // Abacate Pay expects price in cents
          description: `${name} - ${description} - ${email}`,
          expiresIn: 60 * 15,
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Abacate Pay Error:", data);
      return NextResponse.json(
        { error: "Failed to create billing", details: data },
        { status: response.status },
      );
    }

    return NextResponse.json({
      billingId: data.data.id,
      pixCode: data.data.brCode,
      pixQrCode: data.data.brCodeBase64,
      status: data.data.status,
      amount: data.data.amount,
      error: data.error,
    });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const nextUrl = request.nextUrl;
    const id = nextUrl.searchParams.get("id");

    const apiKey = process.env.ABACATE_PAY_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "API Key not configured" },
        { status: 500 },
      );
    }

    const response = await fetch(
      `https://api.abacatepay.com/v1/pixQrCode/check?id=${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("Abacate Pay Error:", data);
      return NextResponse.json(
        { error: "Failed to check billing status", details: data },
        { status: response.status },
      );
    }

    return NextResponse.json({
      status: data.data.status,
      expiresAt: data.data.expiresAt,
      error: data.error,
    });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
