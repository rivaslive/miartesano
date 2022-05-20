const configuration = {
  breakpoints: [576, 768, 992, 1200, 1600, 1920],
  containerWidths: [540, 750, 960, 1140, 1500, 1500],
};

export const getStyleResponsive = () => {
  let output = {};
  configuration.breakpoints.forEach((breakpoint, index) => {
    const containerWidth = configuration.containerWidths[index];
    output = {
      ...output,
      [`@media (min-width: ${breakpoint}px)`]: {
        maxWidth: `${containerWidth}px`,
      },
    };
  });

  return output;
};
