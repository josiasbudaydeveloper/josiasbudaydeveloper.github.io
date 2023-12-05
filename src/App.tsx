import {
  DesktopNavigation,
  MobileNavigation,
  Aside,
  About, 
  Technologies, 
  OtherSkills, 
  LiveProjects, 
  HireMe, 
  Footer
} from './components';

function App() { return (
<>
  <DesktopNavigation />

  <Aside />

  <MobileNavigation />

  <main style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
    <div style={{maxWidth: "992px"}}>
      <About />

      <Technologies />

      <OtherSkills />

      <LiveProjects />

      <HireMe />

      <Footer />
    </div>
  </main>
</>
)}

export default App
