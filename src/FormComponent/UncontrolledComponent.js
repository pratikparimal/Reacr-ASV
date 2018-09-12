import React from 'react';

class Uncontrolled extends React.Component{

    constructor(){
        super();
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(e);
        console.log(this.name.value);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Name : <input type="text" ref={(inputdata) => this.name = inputdata} />
                           <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Uncontrolled;