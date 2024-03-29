import type { FC } from "react"

import Head from "next/head"
import { useState } from "react"
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core"
import { useColorScheme } from "@mantine/hooks"

export type AppProps = {
  pageTitle?: string
  children: React.ReactNode
}

const App: FC<AppProps> = ({
  pageTitle = "Subbu Alagappan - CV",
  children,
}) => {
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"))

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

export { App }
