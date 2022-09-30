
function Intro2(props){
    const linksStyle={
        padding:10,
    }

    return(
        <div className="external-links" style={linksStyle} >
            <div className="linkedin-secion" style ={linksStyle}>
                <img src={props.linkedInLogo} alt="LinkedIn link" ></img>
                <a href={props.linkedIn}>
                    LinkedIn
                </a>
            </div>
            <br/>
            <div className="github-secion" style={linksStyle}>
                <img src={props.gitHubLogo} alt="GitHub link"></img>
                <a href ={props.gitHub}>
                    GitHub 
                </a>
            </div>
        </div>
    )
}
export default Intro2;