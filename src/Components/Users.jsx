import React, { Component } from 'react';
import axios from 'axios';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            h1:""
        }
        console.log(">>>>>>>>>>>");
        console.log(props);

        this.updateHeading = this.updateHeading.bind();
        // this.intervelId = setInterval(()=>{
        //     console.log("Welcome to AchieversIT");
        // },1000);
        // this.intervelId = this.intervelId.bind();
    }

    // static getDerivedStateFromProps(props,state){
    //     return {
    //         h1: props.headingText
    //     }
    // }
   shouldComponentUpdate(){
        if(this.state.h1==="AchiversIT Users List")
            return true;
        else
            return false;
    }
    componentDidMount() {
        // consume an api
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => res.json())
        //     .then(data => {
        //         this.setState({ users: data });
        //         console.log(this.state.users);
        //     })
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            //console.log(res.data);
            this.setState({users:res.data})
           
        })
        .catch((error)=>{
            console.log(error);
            this.setState({users:[]})
        })
    }
    updateHeading = () =>{
        this.setState({h1:"AchiversIT Users List"});
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log(">>>>> snapshopt value of state property 'h1' ");
        console.log(prevState.h1);
    }
    componentDidUpdate(){
        console.log("Component did update>>>>")
        console.log(this.state.h1);
    }
    componentWillUnmount(){
        //we should write all the side effects this componets
    }
    render() {
        return (
            <>
               
                <h1>{this.state.h1} <button onClick={()=>this.updateHeading()}>Update Heading</button></h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>phone</th>
                            <th>website</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.users.length > 0 &&
                            this.state.users.map((user,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.website}</td>
                                        <td>{user.address.street} &nbsp; {user.address.city}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            this.state.users.length===0 &&
                    
                                <tr>
                                    <td colSpan="6" className='text-danger' align='center'>There is no records</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </>
        )
    }
}

export default Users;
