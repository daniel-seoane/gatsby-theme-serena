import React from "react";
/** @jsx jsx */
import { jsx, Box, Flex, MenuButton, Close } from "theme-ui";
import { useResponsiveValue } from "@theme-ui/match-media";
import Logo from "./logo";
import Tagline from "./tagline";
import Nav from "./nav";
import Social from "./social";
import { Link } from "gatsby";
import useToggle from "../hooks/use-toggle";

const Header = () => {
  const screen = useResponsiveValue(["mobile", "tablet", "laptop", "desktop"]);
  const { isOpen, onToggle } = useToggle(false);

  return (
    <Flex
      as="header"
      sx={{
        flexDirection: "column",
        alignItems: "center",
        justifyContent: ["center", null, null, "initial"],
        bg: "primary",
        position: "fixed",
        zIndex: 1100,
        top: 0,
        left: 0,
        overflow: "auto",
        width: ["100%", null, null, 300],
        height: ["auto", null, null, "100%"],
        paddingX: [3, null, null, 4],
        paddingY: [2, null, null, 4],
        minHeight: 64
      }}
    >
      <Flex
        sx={{
          flexDirection: ["row", null, null, "column"],
          alignItems: "center",
          width: "100%"
        }}
      >
        <Link
          to="/"
          sx={{
            variant: "variant.links.nav",
            marginRight: [2, 3, null, 0]
          }}
        >
          <Logo />
        </Link>
        <Tagline />
        <Box sx={{ flexGrow: "1" }} />
        {screen !== "desktop" ? (
          isOpen ? (
            <Close
              sx={{
                cursor: "pointer",
                color: "secondary"
              }}
              onClick={onToggle}
            />
          ) : (
            <MenuButton
              aria-label="Toggle Menu"
              sx={{
                cursor: "pointer",
                color: "secondary"
              }}
              onClick={onToggle}
            />
          )
        ) : null}
      </Flex>
      {screen === "desktop" || (screen !== "desktop" && isOpen) ? (
        <>
          <Nav />
          <Social />
        </>
      ) : null}
    </Flex>
  );
};

export default Header;
