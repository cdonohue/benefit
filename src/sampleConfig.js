import createUtilitiesFromMap from "./config/createUtilitiesFromMap"
import createVariantsFromMap from "./config/createVariantsFromMap"

export default function(config) {
  return {
    ...config,
    theme: {
      ...config.theme,
      emoji: {
        smile: "😄",
        grimacing: "😬",
        scream: "😱",
      },
      fontSize: {
        sm: "14px",
        md: "18px",
        lg: "24px",
      },
    },
    utilities: [
      ...config.utilities,
      (theme) =>
        createUtilitiesFromMap(
          theme.emoji,
          (value) => ({
            "&::before": {
              content: `"${value}"`,
            },
            "&::after": {
              content: `"${value}"`,
            },
          }),
          "emoji"
        ),
    ],
    variants: [
      (utilities, theme) =>
        createVariantsFromMap(
          utilities,
          theme.screens,
          (variantValue, declarations) => ({
            [`@media(min-width: ${variantValue})`]: declarations,
          })
        ),
    ],
    apply: {
      test: [
        "emoji-smile",
        "bg-black",
        "p-8",
        "rounded",
        "text-white",
        "font-sans",
        "ls-tight",
      ],
    },
  }
}
