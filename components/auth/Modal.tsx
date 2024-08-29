"use client";

import { cn } from "@/lib/utils";
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  ReactElement,
  ReactNode,
} from "react";
import { Logo } from "../Logo";
import { Button } from "../ui/button";
import Link from "next/link";
import { Url } from "url";

type ModalProps = {
  title?: string;
  subtitle?: string;
  footer?: ReactElement;
  actionLabel?: string;
  altText?: string;
  tertiaryText?: string;
  tertiaryAction?: () => void;
  children: ReactNode;
  disabled?: boolean;
  secondaryPathLabel?: string;
  secondaryPath: Url;
};

const Modal = ({
  title,
  subtitle,
  footer,
  actionLabel,
  altText,
  tertiaryText,
  tertiaryAction,
  disabled,
  secondaryPathLabel,
  secondaryPath,
  children,
}: ModalProps) => {
  return (
    <div
      className={cn(
        "flex flex-col p-10 justify-center border-2 border-primary items-center rounded-md"
      )}
    >
      {/* HEADER */}
      <div className="flex flex-col space-y-16">
        <Logo size="2xl" variant={"bold"} />
        <div className="flex flex-col text-center space-y-3">
          <p className="font-semibold text-lg">{title}</p>
          <p className="font-light text-base text-neutral-500">{subtitle}</p>
        </div>
      </div>

      {/* BODY */}
      <div className="w-full space-y-4 my-5">{children}</div>
      {/* FOOTER */}
      <div className="w-full">
        <Button
          disabled={disabled}
          className={cn(
            "bg-primary w-full text-white p-3 rounded-md",
            disabled ? "opacity-50" : ""
          )}
        >
          {actionLabel}
        </Button>
        <div className="flex w-full items-center text-sm justify-between">
          <span className="flex space-x-1">
            <p>{altText}</p>
            <Link href={secondaryPath}>{secondaryPathLabel}</Link>
          </span>

          <Button className="p-0" variant={"link"} onClick={tertiaryAction}>
            {tertiaryText}
          </Button>
        </div>

        {/* SOCIAL LOGINS */}
        <div className="flex">

        </div>
      </div>
    </div>
  );
};

export default Modal;
