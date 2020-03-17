import React, { useState, useCallback } from "react";
import Layout from "./layout";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { Box } from "theme-ui";
import SEO from "./seo";

export default ({ name, options, photos }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const galleryPhotos = photos.map(photo => ({
    src: photo.url.childImageSharp.fluid.srcWebp,
    width: photo.url.childImageSharp.fluid.presentationWidth,
    height: photo.url.childImageSharp.fluid.presentationHeight,
    sizes: photo.url.childImageSharp.fluid.sizes,
    srcSet: photo.url.childImageSharp.fluid.srcSetWebp,
    alt: photo.alt,
    title: photo.alt
  }));

  return (
    <Layout>
      <SEO title={name} />
      <Box sx={{ p: `${options.margin}px` }}>
        <Gallery
          photos={galleryPhotos}
          direction={options.direction}
          margin={options.margin}
          onClick={openLightbox}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={galleryPhotos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Box>
    </Layout>
  );
};
