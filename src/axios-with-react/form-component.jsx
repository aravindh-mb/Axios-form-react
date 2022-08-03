import React,{Component} from "react";
//axios lib
import axios from 'axios';
//UserListComponent
import UserListComponent from './users-list-component'
import './Form-component.scss'
 class Form extends Component{
constructor(){
    super()
    this.state={
        userName:"",
        password:""
    }
}
userName(userEvent){
console.log(userEvent)
const userName =userEvent.target.value
    console.log(userName)
    this.setState({
        userName:userName
    })
}
password(passwordEvent){
    console.log(passwordEvent)
    const pass =passwordEvent.target.value
    console.log(pass)
    this.setState({
        password:pass
    })
}
onSubmit(e){
    e.preventDefault()
    const valuesObject ={
        usernamePost:this.state.userName,
        passwordPost:this.state.password
    }
    console.log(valuesObject);
    axios.post('http://localhost:3006/data',valuesObject )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
render(){
    return(
        <React.Fragment>
              <nav className="navbar navbar-dark bg-primary responsive ">
                    <span className="navbar-brand mb-0 h1">Formcomponent</span>
             </nav>
           <div className="container">
           <form onSubmit={this.onSubmit.bind(this)}>
                  <br></br>
                    <div className="form-group col-md-6">
                        <label >Username</label>
                        <input onChange={this.userName.bind(this)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.userName} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div><br></br>
                    <div className="form-group col-md-6">
                        <label >Password</label>
                        <input onChange={this.password.bind(this)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div><br></br>
                    <button type="submit" className="btn btn-success">Submit</button>
            </form>
<UserListComponent/>
           </div>
        </React.Fragment>
    )
}
}
export default Form 