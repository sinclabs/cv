import React, { FC } from "react"
import { Text, Title as TitleText, Space } from "@mantine/core"

import styles from "./Title.module.css"

type TitleProps = {
  firstname: string
  lastname: string
  title: string
}

const Title: FC<TitleProps> = ({ firstname, lastname, title }) => (
  <>
    <Space h={30} />
    <TitleText
      order={3}
      sx={{
        marginBottom: "-10px",
      }}
    >
      {title}
    </TitleText>
    <TitleText order={1}>{`${firstname} ${lastname}`}</TitleText>
  </>
)

export { Title }
