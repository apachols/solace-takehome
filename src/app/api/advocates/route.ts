import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";
import { Advocate } from "@/types/advocate";

export async function GET() {
  // Use advocate data from JSON
  // const data: Advocate[] = advocateData;

  const data = await db.select().from(advocates);

  return Response.json({ data });
}
