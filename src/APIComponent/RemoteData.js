import React from 'react';
import axios from 'axios';
import DisplayUser from './DisplayUser';

class RemoteData extends React.Component{

    constructor(){
        super();
        this.state = {
            users:[]
        }
        this.displayData=this.displayData.bind(this);
    }

    componentWillMount() {
        this.callRemoteData();
    }
    
    callRemoteData(){
        axios.get("https://jsonplaceholder.typicode.com/users")
              .then((response)=>{
                  console.log(response.data)
                  this.setState({
                      users:response.data
                  })
                  console.log(this.state.users)
              })
    }

    displayData(){
        return(this.state.users.map((oneUser)=>{
            return(
                <DisplayUser key={oneUser.id} id={oneUser.id} name={oneUser.name} email={oneUser.email}>
                </DisplayUser>
            )
        }))
    }

    render() {
        return (
            <div>
                Call the child component to display JSON data.
                <table>
                    {this.displayData()}
                </table>
            </div>
        );
    }
}

export default RemoteData;