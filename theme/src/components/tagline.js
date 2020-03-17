import React from "react";
import { Text } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";

const Tagline = () => {
  const data = useStaticQuery(graphql`
    query TaglineQuery {
      site {
        siteMetadata {
          tagline
        }
      }
    }
  `);
  const {
    site: {
      siteMetadata: { tagline }
    }
  } = data;

  return (
    <Text
      sx={{
        alignSelf: ["flex-end", null, null, "initial"],
        color: "muted",
        mt: [0, null, null, 2],
        fontSize: 3,
        whiteSpace: "nowrap"
      }}
    >
      {tagline}
    </Text>
  );
};

export default Tagline;
