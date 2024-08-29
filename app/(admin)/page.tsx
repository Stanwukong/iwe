import Image from "next/image";
import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();


export default async function AdminPage() {
  const allUsers = await db.user.findMany({
    where: {
      name: "Femi"
    }
  });
  
  console.log("All Users", allUsers);
  return (
    <p>This is an authenticated route.</p>
  );
}
