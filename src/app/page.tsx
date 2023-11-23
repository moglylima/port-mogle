import { Experience } from './components/experience/Experience'
import { Header } from './components/header/Header'
import { EmailIcon } from './components/icons/email-icon'
import { Information } from './components/information/Information'
import { SocialButtons } from './components/social-buttons/SocialButtons'

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="">
      <Header />
      <Experience />
      <Information />
      <SocialButtons />
      <a className="btn-primary" href="mailto:moglesonlima@gmail.com">
            contact me
            <EmailIcon/>
          </a>
    </main>
  )
}
