import Image from "next/image";
import { PrismaClient } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Lander from "@/components/globals/Lander";

const db = new PrismaClient();


export default async function Home() {
  const allUsers = await db.user.findMany({
    where: {
      name: "Femi"
    }
  });
  
  console.log("All Users", allUsers);
  return (
    <div className="flex justify-center h-screen items-center">
        <Lander/>
    </div>
    
  );
}
