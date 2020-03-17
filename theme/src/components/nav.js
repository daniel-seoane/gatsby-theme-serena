/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import sanitizeSlug from "../../utils/sanitize-slug";

const Nav = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            url
            type
          }
        }
      }
      allGallery(filter: { slug: { ne: "/" } }) {
        edges {
          node {
            name
            slug
          }
        }
      }
    }
  `);

  const links = data.site.siteMetadata.menuLinks;
  const galleries = data.allGallery.edges;

  return (
    <Flex
      as="nav"
      sx={{ flexDirection: "column", alignItems: "center", my: 3 }}
    >
      {galleries.map(({ node }) => (
        <Link
          key={sanitizeSlug(node.slug)}
          to={sanitizeSlug(node.slug)}
          sx={{
            variant: "variant.links.nav",
            width: "100%",
            textAlign: "center",
            padding: 3,
            fontSize: 3
          }}
        >
          {node.name}
        </Link>
      ))}
      {links.map(link =>
        link.type === "internal" ? (
          <Link
            key={sanitizeSlug(link.url)}
            to={sanitizeSlug(link.url)}
            sx={{
              variant: "variant.links.nav",
              width: "100%",
              textAlign: "center",
              padding: 3,
              fontSize: 3
            }}
          >
            {link.name}
          </Link>
        ) : (
          //type = anchor
          <a
            key={link.url}
            sx={{ variant: "variant.links.nav" }}
            href={link.url}
          >
            {link.name}
          </a>
        )
      )}
    </Flex>
  );
};

export default Nav;
