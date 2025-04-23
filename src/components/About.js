import React from "react";
import UserClassGit from "./UserClassGit";

class About extends React.Component{
constructor(props){
    super(props)
}

render(){
    return(
        <div className="about-page">
        <UserClassGit/>
        </div>

    )
}

}

export default About;