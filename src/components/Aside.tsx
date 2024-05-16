import Contacts from "./Contacts";
import Logos from '../assets/technology-logos';

export default function Aside() { return (
  <aside>
    <header><h1>Josias Buday Dias</h1></header>
    <hr />
    <img
      id="profile-picture"
      src="https://avatars.githubusercontent.com/u/105136787?s=400&u=6af6f17c26fcbef8bf960cdc7257d67dc3c8b4e1&v=4"
    />
    <p>
      A <span className="emphasize">Full-Stack JS/TS</span> Developer with 
      <span className="emphasize"> Next/Express</span>
    </p>
    <Contacts />

    {/* <section style={{
      display: "flex",
      alignItems: "center",
      paddingLeft: "20px",
      color: "white"
    }}>
      Built with Vite.js
      <img style={{
        paddingLeft: "5px",
        width: "40px"
      }}
        src={Logos.Vite} 
      />
    </section> */}
  </ aside>
)}