import { cn } from "~/utils";
import React from "react";

export type ContainerProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  return React.createElement(
    props.as || "div",
    {
      className: cn("mx-auto w-full max-w-6xl", props.className),
    },
    props.children
  );
}