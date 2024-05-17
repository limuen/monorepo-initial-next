"use client";
import React from "react";
import { createToDoDirectly } from "./actions";
import { Button } from "@repo/ui/button";

type ButtonProps = {
  children: React.ReactNode;
};

const Button1: React.FC<ButtonProps> = ({ children }) => {
  const handleClick = async () => {
    console.log("点击");
    try {
      const data = await createToDoDirectly("运动");
      alert(JSON.stringify(data));
    } catch (error) {
      console.error("Error creating ToDo:", error);
      alert("Error creating ToDo");
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          handleClick();
        }}
      >
        {children}
      </Button>
    </>
  );
};

export default Button1;
