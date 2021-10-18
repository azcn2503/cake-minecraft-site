export const transition = (properties = ["opacity", "transform"], duration = 200) => `
  transition-property: ${properties.join(", ")};
  transition-duration: ${duration}ms;
`;
