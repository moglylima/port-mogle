import Image from 'next/image'
import './header.scss'

export function Header() {
  return (
    <div className="header">
          <div>
            <h1>Hi, I´m Mogleson! 👋</h1>
            <h2>Web Developer</h2>
            <p>
            Fico feliz em vê-lo (a) por aqui. Espero que aproveite o conteúdo e que eu possa te ajudar de alguma forma.
            </p>
          </div>
          <Image
            src="/me2.png"
            alt="My photo, Mogleson"
            width={325}
            height={310}
            priority
          />
        </div>
  )
}