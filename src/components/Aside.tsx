{/* Needs to fix the ion-icons */}
export default function Aside() { return (
  <aside>
    <header><h1>Josias Buday Dias</h1></header>
    <hr />
    <img src="https://avatars.githubusercontent.com/u/105136787?s=400&u=6af6f17c26fcbef8bf960cdc7257d67dc3c8b4e1&v=4" />
    <h2>
      A <span className="emphasize">Full-Stack JS</span> Developer
    </h2>
    <section id="contacts">
      These are my contacts:
      <ul>
        <a href="https://github.com/josiasbudaydeveloper" target="_blank">
          <li>
            <ion-icon name="logo-github" />
            <span className="contact-text"> GitHub</span>
          </li>
        </a>

        <a href="https://www.linkedin.com/in/josias-buday-dias-b5a3a2253/" target="_blank">
          <li>
            <ion-icon name="logo-linkedin" />
            <span className="contact-text"> LinkedIn</span>
          </li>
        </a>

        <a href="mailto:josiasbudaydeveloper@gmail.com" title="josiasbudaydeveloper@gmail.com" target="_blank">
          <li>
            <ion-icon name="mail" />
            <span className="contact-text"> Email</span>
          </li>
        </a>

        <a href="https://wa.me/5514996908677" target="_blank">
          <li>
            <ion-icon name="logo-whatsapp" />
            <span className="contact-text"> Whatsapp</span>
          </li>
        </a>

        <a href="https://t.me/Josias_Buday" target="_blank">
          <li>
            {<ion-icon name="send-outline" />}
            <span className="contact-text"> Telegram</span>
          </li>
        </a>
      </ul>
    </section>
  </ aside>
)}