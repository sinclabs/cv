import type { Experience } from "../types"

import React, { FC } from "react"
import { Timeline, Text, Title, Space } from "@mantine/core"

const SelectedExperience: FC<{
  experiences: Experience[]
}> = ({ experiences }) => {
  const getExperienceDescription = (experience: Experience) => (
    <>
      <Text color="dimmed" size="sm">
        {`${experience.startDate.toLocaleString()} - ${experience.endDate.toLocaleString()}`}
      </Text>
      {experience.summary && (
        <Text
          size="md"
          sx={{
            lineHeight: 1.25,
          }}
        >
          {experience.summary}
        </Text>
      )}
    </>
  )

  const getExperiences = (experience: Experience, index: number) => {
    const experienceDescription = getExperienceDescription(experience)

    return (
      <Timeline.Item
        title={`${experience.name} - ${experience.company.name}`}
        key={index}
      >
        {experienceDescription}
      </Timeline.Item>
    )
  }
  return (
    <>
      <Title order={3}>Selected Experience</Title>
      <Space h="sm" />
      <Timeline>
        {experiences.map((experience, index) =>
          getExperiences(experience, index)
        )}
      </Timeline>
    </>
  )
}

export { SelectedExperience }
