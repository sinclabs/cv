import React, { FC } from "react"
import { Text } from "@mantine/core"

const Intro: FC<{ intro: string }> = ({ intro }) => (
  <Text
    sx={{
      lineHeight: "1.25",
    }}
  >
    {intro}
  </Text>
)

export { Intro }
