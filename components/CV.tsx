import React, { FC } from "react"
import { Container, Grid } from "@mantine/core"

import { Intro } from "./Intro"
import { Title } from "./Title"
import { Competences } from "./Competences"
import { Background } from "./Background"
import { Experiences } from "./Experiences"
import { SelectedExperience } from "./SelectedExperience"

const CV: FC = () => (
  <Container>
    <Grid>
      <Grid.Col span={12}>
        <Title />
      </Grid.Col>
      <Grid.Col span={12}>
        <Intro />
      </Grid.Col>
      <Grid.Col span={4}>
        <Grid.Col span={12}>
          <Experiences />
        </Grid.Col>
        <Grid.Col span={12}>
          <Background />
        </Grid.Col>
        <Grid.Col span={12}>
          <Competences />
        </Grid.Col>
      </Grid.Col>
      <Grid.Col span={8}>
        <SelectedExperience />
      </Grid.Col>
    </Grid>
  </Container>
)

export { CV }
