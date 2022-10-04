import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Intro2 from "./components/Intro2";
import linkedIn from "./resources/linkedIn-logo.png"
import gitHub from "./resources/github-logo.png"
import myPicture from "./resources/my-photo.JPG";



function App() {
  return (
    <div className="my-portfolio" style={{backgroundColor:"#0C797D"}}>
        <Nav image={myPicture} name="Natalia Chotza"/>
        <Intro2 linkedIn="https://www.linkedin.com/in/natalia-chotza-it/?locale=en_US" 
                gitHub="https://github.com/NataliaChotza"
                linkedInLogo={linkedIn}
                gitHubLogo={gitHub}/>
        <Footer/>
    </div>
   
  );
}

export default App;
