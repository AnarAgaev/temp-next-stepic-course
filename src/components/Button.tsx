import React, { JSX } from "react";

interface ButtonProps {
  children: React.ReactNode;
  clickHandler?: React.MouseEventHandler<HTMLButtonElement>;
}

export function Button({ clickHandler, children }: ButtonProps): JSX.Element {
  return <button onClick={clickHandler}>{children}</button>;
}
