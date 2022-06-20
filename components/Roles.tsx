import React, { FC } from "react"
import { Text, Title } from "@mantine/core"

const Roles: FC<{ roles: string[] }> = ({ roles }) => (
  <>
    <Title order={3}>Selected Roles</Title>
    <Text>{roles.join(", ")}</Text>
  </>
)

export { Roles }
