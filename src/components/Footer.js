import { React } from "react";

const Footer = () => {
    return(
        <div className="footer-container">
        <div className="footer-links">
          <ul className="contact">
            <li className="contact-method">
              <a className="contact-link" href="mailto:kesiahp18@gmail.com">EMAIL</a>
            </li>
            <li className="contact-method">
              <a className="contact-link" href="https://github.com/kesiahp18" target="_blank"
                > GITHUB</a>
            </li>
            <li className="contact-method">
              <a className="contact-link" href="https://www.linkedin.com/in/kesiah-patil-8444621b8/" target="_blank"
                > LINKEDIN</a>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Footer;