/*
<script>
  function calculateAge(birthDate) {
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

  window.onload = (() => {
    const birthDate = new Date('1999-10-14');
    let years = calculateAge(birthDate);
    document.getElementById('years').innerText = years;
  });
</script>
*/
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
      Hi, my name's Josias Buday Dias. I'm {currentYears} years old and I'm from Brazil. I'm 
      graduated in Technological (it's similar to an associate degree) course in Analysis and Systems Development at 
      Universidade Estácio de Sá. <br /><br /> 

      Currenly, I'm preparing for study and start the Next.js 14's Official Tutorial, a beautiful 
      and responsive SPA (Single Page Application) Dashboard, 
      totally based on the Next.js's App Router feature and all the main features of a 
      complete application: <br /><br />
        - Authentication, <br />
        - Serverless <br />
        - PostGreSQL on Vercel <br />
        - Pagination <br />
      <br /><br />
      I think I'm currently between B1 to B2 English Speaking Level.
      <br /><br />
      
    </p>
  </section>
)}