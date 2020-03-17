import React from "react";
import { Heading } from "theme-ui";
import useName from "../hooks/use-name";

const Logo = () => {
  const name = useName();

  return <Heading as="h1">{name}</Heading>;
};

export default Logo;
