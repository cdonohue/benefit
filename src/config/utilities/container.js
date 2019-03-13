export default function generate(theme) {
  return {
    container: {
      ...Object.keys(theme.screens).reduce((mediaQueries, containerSize) => {
        return {
          ...mediaQueries,
          [`@media (min-width: ${theme.screens[containerSize]})`]: {
            "max-width": theme.screens[containerSize],
          },
        }
      }, {}),
    },
  }
}
