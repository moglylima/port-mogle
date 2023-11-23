import Image from 'next/image'

export function Header() {
  return (
    <div className="header">
          <div>
            <h1>Hi, I´m Mogleson! 👋</h1>
            <h2>Web Developer</h2>
          </div>
          <Image
            src="/me.jpg"
            alt="My photo, Mogleson"
            width={325}
            height={310}
            priority
          />
        </div>
  )
}