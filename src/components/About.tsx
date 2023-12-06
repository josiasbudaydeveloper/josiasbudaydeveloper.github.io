import { useEffect, useState } from "react";

export default function About() {
  const BIRTHDATE: Date = new Date('1999-10-14');

  const [currentYears, setCurrentYears] = useState(0);

  function calculateAge(birthDate: Date) : number {
    const now = new Date();
    let yearDiff = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    const dayDiff = now.getDate() - birthDate.getDate();

    // Adjust age when birth date is later in the year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      yearDiff--;
    }

    return yearDiff;
  }


  useEffect(() => {
    setCurrentYears(calculateAge(BIRTHDATE));
  }, []);
  
  return (
  <section id="about" className="paddingX paddingY">
    <header><h1 className="emphasize main-header">About me</h1></header>
    <p className="paragraph">
      Hi, my name's Josias Buday Dias. I'm {currentYears} years old and I'm from Brazil. 
      I have a degree in Systems Analysis and Development from Universidade Estácio de Sá, a 
      technological higher education course that is similar to an associate's degree <br /><br /> 

      Currenly, I'm studying and doing the Next.js 14's Official Tutorial, a beautiful 
      and responsive SPA (Single Page Application) Dashboard, 
      totally based on the Next.js's App Router feature and all the main features of a 
      complete application: <br /><br />
        - Authentication <br />
        - Serverless <br />
        - PostGreSQL on Vercel <br />
        - Pagination <br />
      <br /><br />
      I consider myself at the B1 English Speaking Level, but I'm always improving my English skills, through: <br /><br />
        - Asking ChatGPT (mainly with Bing AI) <br />
        - Reading Documentation and Articles in English <br />
        - Watching video tutorials in English on YouTube. <br />
      <br /><br />
      
    </p>
  </section>
)}