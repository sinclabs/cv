import React, { FC } from "react"
import { Grid, ColProps } from "@mantine/core"

export const Panel: FC<ColProps> = (props) => (
  <Grid.Col
    {...props}
    sx={(theme) => {
      return {
        // backgroundColor: theme.colors.gray[2],
        // borderRadius: "10px",
        // padding: "12px",
      }
    }}
  >
    {props.children}
  </Grid.Col>
)
