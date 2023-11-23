import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";

import "./socialbuttons.scss"


export function SocialButtons(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/mogly.lima/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/moglesonlima/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/moglesonlima">
                <GitHubIcon/>
            </a>
            
        </div>
    )
}