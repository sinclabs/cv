import React, { FC } from "react"
import { Text, Title } from "@mantine/core"

const Experiences: FC<{ roles: string[] }> = ({ roles }) => (
  <>
    <Title order={3}>Experiences</Title>
    <Text>{roles.join(", ")}</Text>
  </>
)

export { Experiences }
