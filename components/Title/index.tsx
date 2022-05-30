import React, { FC } from "react"
import { Text, Title as TitleText, Space } from "@mantine/core"

import styles from "./Title.module.css"

const Title: FC = () => (
  <>
    <Space h={30} />
    <TitleText
      order={3}
      sx={{
        marginBottom: "-10px",
      }}
    >
      Senior Consultant
    </TitleText>
    <TitleText order={1}>Subramanian Alagappan</TitleText>
  </>
)

export { Title }
