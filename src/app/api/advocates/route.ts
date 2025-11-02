import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";
import { Advocate } from "@/types/advocate";

export async function GET() {
  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);

  const data: Advocate[] = advocateData;

  return Response.json({ data });
}
