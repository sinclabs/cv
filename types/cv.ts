export type Company = {
  name: string
  intro?: string
}

export type Role = {
  name: string
  isSelected?: boolean
  summary?: string
}

export type ProjectDescription = {
  name: string
  startDate: string | Date
  endDate: string | Date
  summary?: string
  description?: string
  isSelected?: boolean
  keywords?: string[]
}

export type Experience = ProjectDescription & {
  roles: Role[]
}

export type ConsultantExperience = Experience & {
  client: Company
}

export type WorkExperience = Experience & {
  company: Company
}

export type CV = {
  firstName: string
  lastname: string
  title: string
  intro: string
  languages: string[]
  competences: string[]
  background: string[]
  consultantExperiences: ConsultantExperience[]
  workExperiences: WorkExperience[]
  personalProjects?: ProjectDescription[]
}
