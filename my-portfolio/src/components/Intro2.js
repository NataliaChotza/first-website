
function Intro2(props){
    const linksStyle={
        padding:10,
    }

    return(
        <div className="external-links" style={linksStyle} >
            <div className="linkedin-secion" style ={linksStyle}>
                <img src={props.linkedInLogo} alt="LinkedIn link" style={{width:"60px",height:"30px"}}></img>
                <a href={props.linkedIn}>
                    LinkedIn
                </a>
            </div>
            <br/>
            <div className="github-secion" style={linksStyle}>
                <img src={props.gitHubLogo} alt="GitHub link" style={{width:"50px",height:"50px"}}></img>
                <a href ={props.gitHub}>
                    GitHub 
                </a>
            </div>
        </div>
    )
}
export default Intro2;