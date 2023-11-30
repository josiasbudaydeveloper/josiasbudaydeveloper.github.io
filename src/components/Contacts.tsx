import { contactsList } from "../constants"

export default function Contacts() {
  return (
    <section id="contacts">
      These are my contacts:
      <ul>
        { contactsList.map((contact) => (
          <li>
            <a id={contact.id} href={contact.href} target="_blank" title={contact.title}>
              <ion-icon name={contact.logo} />
              <span className="contact-text"> {contact.content}</span>
            </a>
          </li>
        )) }
      </ul>
    </section>
  )
}