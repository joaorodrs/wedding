import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("gifts").select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PATCH(request: Request) {
  const supabase = await createClient();
  const body = await request.json();

  const { id, amountReserved, reserved } = body;

  if (!id) {
    return NextResponse.json(
      { error: "ID do presente é obrigatório" },
      { status: 400 },
    );
  }

  const { data, error } = await supabase
    .from("gifts")
    .update({ amount_reserved: amountReserved, reserved })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
