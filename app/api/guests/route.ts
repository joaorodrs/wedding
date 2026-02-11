import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("guests").select();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function PATCH(request: Request) {
  const supabase = await createClient();
  const body = await request.json();

  const { id, confirmed, companions } = body;

  if (!id) {
    return NextResponse.json(
      { error: "ID do convidado é obrigatório" },
      { status: 400 },
    );
  }

  const { data, error } = await supabase
    .from("guests")
    .update({ confirmed, confirmed_companion: companions })
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
