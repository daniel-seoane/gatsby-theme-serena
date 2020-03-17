import { merge } from "theme-ui";

import { base } from "@theme-ui/presets";

import space from "./space"
import breakpoints from "./breakpoints";
import fonts from "./fonts";
import fontSizes from "./font-sizes";
import fontWeights from "./font-weights";
import lineHeights from "./line-heights";
import colors from "./colors";
import forms from "./forms";
import layout from "./layout";
import variant from "./variant";
import styles from "./styles";

export default merge(base, {
  space,
  breakpoints,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  colors,
  forms,
  layout,
  variant,
  styles
});
