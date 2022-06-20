import type { WorkExperience, ConsultantExperience } from "../types"

import React, { FC } from "react"
import { Timeline, Text, Title, Space } from "@mantine/core"

const SelectedExperience: FC<{
  experiences: (WorkExperience | ConsultantExperience)[]
}> = ({ experiences }) => {
  const getExperienceDescription = (
    experience: WorkExperience | ConsultantExperience
  ) => (
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

  const getExperiences = (
    experience: WorkExperience | ConsultantExperience,
    index: number
  ) => {
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
