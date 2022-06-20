import React, { FC } from "react"
import { Box, Space, Text, Title } from "@mantine/core"
import { Experience as ExperienceType } from "../types"

const Experience: FC<{
  experiences: ExperienceType[]
}> = ({ experiences }) => (
  <Box>
    <Title order={3}>Experience</Title>
    {experiences.map((experience, index) => (
      <Box key={index}>
        <Title
          order={4}
        >{`${experience.name} - ${experience.company.name}`}</Title>
        <Text
          color="dimmed"
          size="sm"
        >{`${experience.startDate} - ${experience.endDate}`}</Text>
        <Text
          size="md"
          sx={{
            lineHeight: 1.25,
          }}
        >
          {experience.description ?? experience.summary}
        </Text>
        <Space h={"md"} />
      </Box>
    ))}
  </Box>
)

export { Experience }
