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
    const isConsultantExperience = (
      experience: WorkExperience | ConsultantExperience
    ): experience is ConsultantExperience => {
      return !!(experience as ConsultantExperience).client
    }

    const isWorkExperience = (
      experience: WorkExperience | ConsultantExperience
    ): experience is WorkExperience => {
      return !!(experience as WorkExperience).company
    }

    const experienceDescription = getExperienceDescription(experience)

    if (isConsultantExperience(experience)) {
      return (
        <Timeline.Item title={`${experience.name} - ${experience.client.name}`}>
          {experienceDescription}
        </Timeline.Item>
      )
    } else if (isWorkExperience(experience)) {
      return (
        <Timeline.Item
          title={`${experience.name} - ${experience.company.name}`}
          key={index}
        >
          {experienceDescription}
        </Timeline.Item>
      )
    }
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
