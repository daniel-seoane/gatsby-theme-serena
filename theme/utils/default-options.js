module.exports = themeOptions => {
  const galleriesPath = themeOptions.contentPath || `content/galleries`;
  const pagesPath = themeOptions.contentPath || `content/pages`;
  const assetPath = themeOptions.assetPath || `content/assets`;
  const disableContact = false;
  const margin = themeOptions.margin || 6;
  const direction = themeOptions.direction || "column";

  return {
    galleriesPath,
    pagesPath,
    assetPath,
    disableContact,
    margin,
    direction
  };
};
