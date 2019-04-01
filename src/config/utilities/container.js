export default function generate(theme) {
  return {
    container: {
      width: "100%",
      ...Object.keys(theme.screens).reduce(
        (mediaQueries, containerSize) => ({
          ...mediaQueries,
          [`@media (min-width: ${theme.screens[containerSize]})`]: {
            "max-width": theme.screens[containerSize],
          },
        }),
        {}
      ),
    },
  }
}
