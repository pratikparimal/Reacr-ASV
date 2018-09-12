import React from 'react';

class Controlled extends React.Component{

    /* constructor(props){
        super(props);
        this.state={
            name:'',
            programming:false
        } 
        
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleProgrammingChange=this.handleProgrammingChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleNameChange(e){
        this.setState({
            name:e.target.value
        })
    }

    handleProgrammingChange(e){
        this.setState({
            programming:e.target.checked
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return(
            <div>
                <h2>Controlled Form Component in React</h2>
                <form onClick={this.handleSubmit}>
                    Name : <input type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleNameChange}/>
                    <br></br>
                    Know Programming : <input type="checkbox" value={this.state.programming} onChange={this.handleProgrammingChange}/>
                    <br></br>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    } */
 


    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            programming:false
        } 
    
        this.handleTextChange=this.handleTextChange.bind(this);
        this.handleProgrammingChange=this.handleProgrammingChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleTextChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleProgrammingChange(e){
        this.setState({
            programming:e.target.checked
        })
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
    }

    render(){
    return(
        <div>
            <h2>Controlled Form Component in React</h2>
            <form onClick={this.handleSubmit}>
                Name : <input type="text" name="name" placeholder="Enter name" value={this.state.name} onChange={this.handleTextChange}/>
                <br></br>
                E-Mail : <input type="text" name="email" placeholder="Enter email id" value={this.state.email} onChange={this.handleTextChange}/>
                <br></br>
                Know Programming : <input type="checkbox" name="programming" value={this.state.programming} onChange={this.handleProgrammingChange}/>
                <br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
    }

    
}
export default Controlled;