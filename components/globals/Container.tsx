import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return <div className={cn("bg-primary flex p-6 shadow-lg")}>{children}</div>;
};

export default Container;
