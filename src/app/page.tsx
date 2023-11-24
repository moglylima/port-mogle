import { Experience } from './components/experience/Experience'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { EmailIcon } from './components/icons/email-icon'
import { Information } from './components/information/Information'
import { SocialButtons } from './components/social-buttons/SocialButtons'
import "./styles/home.scss"

export default function Home() {
  return (<>
    <main className="container">
      <Header />
      <Experience />
      <Information />

      <div className="buttons">
        <SocialButtons />
        <a className="btn-primary" href="mailto:moglesonlima@gmail.com">
          Contact me
          <EmailIcon />
        </a>

      </div>
      
    </main>
    <Footer /> 
  
  </>
    
  )
}
