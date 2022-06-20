import type { CV as CVType, Role } from "../types"

import React, { FC } from "react"
import { Container, Grid, Space } from "@mantine/core"

import { Panel } from "./Panel"
import { Intro } from "./Intro"
import { Title } from "./Title"
import { Competences } from "./Competences"
import { Background } from "./Background"
import { Roles } from "./Roles"
import { SelectedExperience } from "./SelectedExperience"
import { Experience } from "./Experience"

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
    experiences,
    personalProjects,
  } = cv

  const selectedExperienceRoles: Role[] = []

  experiences.forEach(
    (experience) =>
      experience.isSelected &&
      selectedExperienceRoles.push({ name: experience.name })
  )
  const selectedExperiences = experiences.filter(
    (experience) => experience.isSelected
  )

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
            <Roles roles={selectedExperienceRoles.map((role) => role.name)} />
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
        <Panel span={12}>
          <Space h={"md"} />
          <Experience experiences={experiences} />
        </Panel>
      </Grid>
    </Container>
  )
}

export { CV }
