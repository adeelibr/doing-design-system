/**
 * @description Helper function to generate palette, this not only creates a single
 * palette but also ensures that every palette will have the same structure.
 * */

/**
 * @description get single color palette
 * */
export const makePalette = ({
  main,
  dark,
  light,
  contrastText = "#FFF",
} = {}) => ({
  main,
  dark,
  light,
  contrastText,
});

/**
 * @description helper method to create a consistent shadow palette
 * @reference https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/shadows.js#L5
 */
export default (...px) => {
  const shadowKeyUmbraOpacity = 0.08;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.5;
  return [
    `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(33,34,34,${shadowKeyUmbraOpacity})`,
    `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
    `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(221,221,221,${shadowAmbientShadowOpacity})`,
  ].join(",");
};
