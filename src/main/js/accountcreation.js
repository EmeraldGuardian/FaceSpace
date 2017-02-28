import React from 'react';

var CreateAccountComponent = React.createClass({

    // Used to initialize state
    getInitialState () {
        return {
            name : "",
            message : ""
        }
    },

    handleNameChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ name : e.target.value , message : "..."});
    },

    handleStatusChange (e) {
        // Prevent following the link.
        e.preventDefault();
        this.setState({ status : e.target.value  , message : "..."});
    },

    handleSubmit(e) {
        // Prevents reinitialization
        e.preventDefault();
        let name = this.state.name;
        fetch('http://localhost:8080/accountCreation/createAccount?'
            + 'userName=' + name, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res =>{
            if(res.ok){
                this.setState({message: 'Yes!'});
            }
            else{
                this.setState({message: 'No...'});
            }
        })
    },

    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" defaultValue={this.state.name} onChange={this.handleNameChange}/>
                    </label>
                    <input type="submit" value="Create Account!" />
                </form>
                Name: {this.state.name}
                <br/>
                Message: {this.state.message}
            </div>
        );
    }
});

export class AccountCreation extends React.Component {

    render() {
        return(
            <CreateAccountComponent/>
        );
    }
}
