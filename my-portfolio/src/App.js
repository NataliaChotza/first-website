import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Intro1 from "./components/Intro1";
import Intro2 from "./components/Intro2";
import Header from "./components/Header";
import linkedIn from "./resources/linkedIn-logo.png"
import gitHub from "./resources/github-logo.png"

function App() {
  return (
    <div>
      <Header image=""/>
        <Nav/>
        <Intro1 name="Natalia Chotza"/>
        <Intro2 linkedIn="https://www.linkedin.com/in/natalia-chotza-it/?locale=en_US" 
                gitHub="https://github.com/NataliaChotza"
                linkedInLogo={linkedIn}
                gitHubLogo={gitHub}/>
        <Footer/>
    </div>
   
  );
}

export default App;
