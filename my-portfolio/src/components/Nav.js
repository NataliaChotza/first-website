function Nav(props){

    const navStyle={
        backgroundColor:"#40BBBF",
        borderRadius:"5px ",
        widht:"50%", 
        height:"50px",
        alignItems:"center"
    }
    const textStyle={
        padding:10,
        fontSize:"15px",
        textAlign:"right",
        listStyleType:"none",
        textDecoration:"none",
        color:"#FCDC00",

    }
    const sidebarStyle={
        width:"20%",
        height:"500px",
        backgroundColor:"#40BBBF",
        color:"#FCDC00",      
        borderRadius:"5px",
        padding:"10px",
        alignItems:"center"
        
    }
    const imageStyle={
        height:"200px",
        widht:"300px",
        borderRadius:"50%",
    }
    return(
        <div style={{ display:"flex",justifyContent:"space-between", padding:"10px"}}>
            <div className="sidebar" style={sidebarStyle}>
                <p className="img" style={{paddingLeft:"50px"}} >
                    <img src={props.image} alt="my" style={imageStyle}></img>
                </p>
                <div style={{alignItems:"center"}}>
                        <p >
                            Name: {props.name}<br/><br/>
                            Age: 23<br/>
                            Residence: Greece<br/>
                            City: Corfu<br/>
                        </p>
                </div>
                
            </div>
            
            <div className="main-nav" style={navStyle}>  
                <ul className="main-nav-list"  style={{display:"flex"}}>
                    
                    <a href="http://localhost:3000/" style={textStyle} >
                        About me
                    </a>
                    <a href="http://localhost:3000/" style={textStyle}>
                        Education
                    </a>
                    <a href="http://localhost:3000/" style={textStyle}>
                        Skills
                    </a>
                    <a href="http://localhost:3000/" style={textStyle}>
                        Projects
                    </a>
                    <a href="http://localhost:3000/" style={textStyle}>
                        Contact
                    </a>
                    <a href="http://localhost:3000/" style={textStyle}>
                        External links
                    </a>
                </ul>
            </div>
        </div>
            )
}
export default Nav;