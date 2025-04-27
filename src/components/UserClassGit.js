import { Component } from "react";

class UserClassGit extends Component{

    constructor(props){
        super(props);
        this.state = {
           userInfo :{
            name: 'XYZ',
            location: 'lorem ipsum',
            bio : 'Software Developer'
           },
        };
    }

    async componentDidMount(){
         // * API call
        const data = await fetch('https://api.github.com/users/shivanimendhule6');
        const json = await data.json();
        this.setState ({
            userInfo : json,
        });

    }

    render(){
        const { name, location, avatar_url, bio , login } = this.state.userInfo;
        return(
            <div className="p-20 text-center mx-auto w-[50%] shadow-xl/10 rounded-sm">
                <img className="mx-auto w-60 mb-10 rounded-full" src={avatar_url} alt={name} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Designation : {bio}</h3>
                <h3>Contact : {login}@gmail.com</h3>
            </div>
        ) 
    }
}

export default UserClassGit;