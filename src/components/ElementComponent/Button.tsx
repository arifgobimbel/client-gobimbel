import React from "react";
import { Button } from "@material-tailwind/react";

interface ButtonProps {
  label: string;
  className?: string;
}

const Buttons = ({ label, className }: ButtonProps) => {
  return <Button className={className}>{label}</Button>;
};

export default Buttons;
