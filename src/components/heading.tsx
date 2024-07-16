import { Spacer } from "@nextui-org/react";

export type HeadingProps = {
  title: string;
  subtitle: string;
};

export default function Heading(props: HeadingProps) {
  return (
    <>
      <h1 className="text-4xl font-bold">{props.title}</h1>
      <Spacer y={4} />
      <p className="text-foreground/80">{props.subtitle}</p>
      <Spacer y={12} />
    </>
  );
}
