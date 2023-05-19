// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
// import {
//   SpaceGrotesk_300Light as spaceGroteskLight,
//   SpaceGrotesk_400Regular as spaceGroteskRegular,
//   SpaceGrotesk_500Medium as spaceGroteskMedium,
//   SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
//   SpaceGrotesk_700Bold as spaceGroteskBold,
// } from "@expo-google-fonts/space-grotesk"

// export const customFontsToLoad = {
//   spaceGroteskLight,
//   spaceGroteskRegular,
//   spaceGroteskMedium,
//   spaceGroteskSemiBold,
//   spaceGroteskBold,
// }

const fonts = {
  spaceGrotesk: {
    // Cross-platform Google font.
    light: "Cochin",
    normal: "Cochin",
    medium: "Cochin",
    semiBold: "Cochin",
    bold: "Cochin",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "Cochin",
    light: "Cochin",
    normal: "Cochin",
    medium: "Cochin",
  },
  courier: {
    // iOS only font.
    normal: "Cochin",
  },
  sansSerif: {
    // Android only font.
    thin: "Cochin",
    light: "Cochin",
    normal: "Cochin",
    medium: "Cochin",
  },
  monospace: {
    // Android only font.
    normal: "Cochin",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.spaceGrotesk,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.helveticaNeue, android: fonts.sansSerif }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.courier, android: fonts.monospace }),
}
