import { SectionTitle } from "../sections-title/SectionsTitle"
import "./information.scss"

export function Information(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span>🇺🇸 EN - Itermediate</span>
          <span>🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Computer Network Technologist - University Federal off Ceará</span>
        </div>
      </div>
    )
}