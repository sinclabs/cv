import React, { FC } from "react"
import { Text, Title } from "@mantine/core"

const Background: FC<{ background: string[] }> = ({ background }) => (
  <>
    <Title order={3}>Background</Title>
    <Text>{background.join(", ")}</Text>
  </>
)

export { Background }
