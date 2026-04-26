"use client";

import { Button, WelcomeMessage } from "@/components";
import Link from "next/link";

const onButtonClick = () => {
  alert("onButtonClick");
};

export default function Home() {
  return (
    <>
      <WelcomeMessage name="Max" />
      <Button clickHandler={onButtonClick}>Some button text</Button>
    </>
  );
}
