/** @jsx jsx */
import { jsx, Flex, Text } from "theme-ui";
import { Link } from "gatsby";
import useName from "../hooks/use-name";

const Footer = () => {
  const name = useName();

  return (
    <Flex
      as="footer"
      sx={{
        alignItems: "center",
        justifyContent: "center",
        width: ["100%", null, "calc(100% - 300px)"],
        marginTop: 5,
        marginLeft: [0, null, 300],
        padding: 3,
        fontSize: 3
      }}
    >
      <Text>
        {new Date().getFullYear()} ©{" "}
        <Link to="/" sx={{ color: "inherit", textDecoration: "none" }}>
          {name}
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
