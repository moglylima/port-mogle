import Image from "next/image"
import { SectionTitle } from "../sections-title/SectionsTitle"
import "./experience.scss"

import { Skill } from "../skills/Skills"

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>Web developer with over a year of experience in developing web applications working on projects for companies such as Dell Technologies.</p>
      <div className="experience-time">
        <SectionTitle styleSection="section-title-2" text="Languagens" />
        <Skill image="/react.png" measure={1} years="1 years" />
        <Skill image="/ts.png" measure={1} years="1 years" />
        <Skill image="/js.png" measure={2} years="2 years" />
        <Skill image="/java.png" measure={2} years="2 year" />
      </div>
      <div className="experience-time">
        <SectionTitle styleSection="section-title-2" text="Experience Fra" />
        <Skill image="/react.png" measure={1} years="1 years" />
        <Skill image="/ts.png" measure={1} years="1 years" />
        <Skill image="/js.png" measure={2} years="2 years" />
        <Skill image="/java.png" measure={2} years="2 year" />
      </div>
    </div>
  )
}