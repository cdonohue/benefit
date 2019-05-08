export default function generate(theme = {}) {
  const { screens = {} } = theme

  return {
    container: {
      width: "100%",
      ...Object.keys(screens).reduce(
        (mediaQueries, containerSize) => ({
          ...mediaQueries,
          [`@media (min-width: ${screens[containerSize]})`]: {
            "max-width": screens[containerSize],
          },
        }),
        {}
      ),
    },
  }
}
