import "./sectionstitle.scss"

interface SectionTitleProps {
    text: string
    styleSection?: string
}

export function SectionTitle({ text, styleSection } : SectionTitleProps){
    if(styleSection){
        return(
            <h3 className={` ${styleSection}`}>{text}</h3>
        )

    }
    return(
        <h3 className="section-title">{text}</h3>
    )
}