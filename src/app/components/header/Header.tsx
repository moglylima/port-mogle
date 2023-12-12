import Image from 'next/image'
import './header.scss'

export function Header() {
  return (
    <div className="header">
          <div>
            <h1>Hi, I'm Mogleson! 👋</h1>
            <h2>Web Developer</h2>
            <p>
            I'm happy to see you here. I hope you enjoy the content and that I can help you in some way.            </p>
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