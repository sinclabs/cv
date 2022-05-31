import type { NextPage } from "next"

import { App } from "../components/App"
import { CV } from "../components/CV"

import { cvData } from "../data/cvData"

const CvPage: NextPage = () => {
  return (
    <App>
      <CV cv={cvData} />
    </App>
  )
}

export default CvPage
