import { createElement } from "react";

/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import icons from "../../utils/icons";

const Social = () => {
  const data = useStaticQuery(graphql`
    query SocialQuery {
      site {
        siteMetadata {
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);
  return (
    <Flex
      sx={{ flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}
    >
      {data.site.siteMetadata.socialLinks.map(social => (
        <a
          key={social.name}
          href={social.url}
          sx={{
            variant: "variant.links.nav",
            p: 3
          }}
        >
          {createElement(icons[social.name.toLowerCase()], { size: 22 })}
        </a>
      ))}
    </Flex>
  );
};

export default Social;
