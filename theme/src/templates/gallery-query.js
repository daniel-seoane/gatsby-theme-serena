import React from "react";
import { graphql } from "gatsby";
import Gallery from "../components/gallery";

const GalleryPage = ({ data, pageContext }) => {
  const { name, options } = pageContext;
  return <Gallery name={name} options={options} photos={data.gallery.photos} />;
};

export default GalleryPage;

export const query = graphql`
  query GalleryQuery($name: String) {
    gallery(name: { eq: $name }) {
      name
      photos {
        alt
        url {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              srcWebp
              presentationHeight
              presentationWidth
              srcSetWebp
              sizes
            }
          }
        }
      }
    }
  }
`;
