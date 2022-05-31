import type { CV as CVType, Role } from "../types"

import React, { FC } from "react"
import { Container, Grid } from "@mantine/core"

import { Panel } from "./Panel"
import { Intro } from "./Intro"
import { Title } from "./Title"
import { Competences } from "./Competences"
import { Background } from "./Background"
import { Experiences } from "./Experiences"
import { SelectedExperience } from "./SelectedExperience"

type CVProps = {
  cv: CVType
}

const CV: FC<CVProps> = ({ cv }) => {
  const {
    firstName,
    lastname,
    title,
    intro,
    background,
    competences,
    languages,
    workExperiences,
    consultantExperiences,
    personalProjects,
  } = cv

  const selectedExperienceRoles: Role[] = []

  ;[...workExperiences, ...consultantExperiences].forEach((experience) =>
    selectedExperienceRoles.concat(
      experience.roles.filter((role) => role.isSelected)
    )
  )
  const selectedExperiences = [
    ...workExperiences,
    ...consultantExperiences,
  ].filter((experience) => experience.isSelected)

  return (
    <Container>
      <Grid>
        <Grid.Col span={12}>
          <Title firstname={firstName} lastname={lastname} title={title} />
        </Grid.Col>
        <Panel span={12}>
          <Intro intro={intro} />
        </Panel>
        <Panel span={4}>
          <Grid.Col span={12}>
            <Experiences
              roles={selectedExperienceRoles.map((role) => role.name)}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Background background={background} />
          </Grid.Col>
          <Grid.Col span={12}>
            <Competences competences={competences} />
          </Grid.Col>
        </Panel>
        <Panel span={8}>
          <SelectedExperience experiences={selectedExperiences} />
        </Panel>
      </Grid>
    </Container>
  )
}

export { CV }
