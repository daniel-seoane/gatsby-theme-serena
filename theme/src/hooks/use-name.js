import { useStaticQuery, graphql } from "gatsby";

const useName = () => {
  const data = useStaticQuery(graphql`
    query NameQuery {
      site {
        siteMetadata {
          name
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { name }
    }
  } = data;

  return name;
};

export default useName;
