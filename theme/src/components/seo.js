import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ description, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            image
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang: `en`
      }}
      title={title}
      titleTemplate={
        title === site.siteMetadata.title
          ? `%s`
          : `%s | ${site.siteMetadata.title}`
      }
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        // OpenGraph tags
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        site.siteMetadata.image
          ? {
              property: `og:image`,
              content: site.siteMetadata.image
            }
          : null,
        {
          property: `og:type`,
          content: `website`
        },
        // Twitter card tags
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        site.siteMetadata.image
          ? {
              property: `twitter:image`,
              content: site.siteMetadata.image
            }
          : null,
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].filter(Boolean)}
    />
  );
}

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired
};

export default SEO;
