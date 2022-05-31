import React, { FC } from "react"
import { Text, Title } from "@mantine/core"

const Competences: FC<{ competences: string[] }> = ({ competences }) => (
  <>
    <Title order={3}>Competences</Title>
    <Text>{competences.join(", ")}</Text>
  </>
)

export { Competences }
