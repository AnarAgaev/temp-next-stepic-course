import React, { JSX } from "react";

interface Props {
  name: string;
}

export const WelcomeMessage = ({ name }: Props): JSX.Element => {
  return <div>Привет, {name}!</div>;
};
