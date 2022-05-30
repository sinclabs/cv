import React, { FC } from "react"
import { Timeline, Text, Title, Space } from "@mantine/core"

const SelectedExperience: FC = () => (
  <>
    <Title order={3}>Selected Experience</Title>
    <Space h="sm" />
    <Timeline>
      <Timeline.Item title="Fullstack developer - Klarna AB">
        <Text color="dimmed" size="sm">
          Sep 2021 - May 2022
        </Text>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Backend developer - Svensk Travsport">
        <Text color="dimmed" size="sm">
          Apr 2021 - Aug 2022
        </Text>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
      </Timeline.Item>
    </Timeline>
  </>
)

export { SelectedExperience }
