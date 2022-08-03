import React,{Component} from "react"
import dataTable from './data-table'
import axios from 'axios';
class UserListComponent extends Component{
    constructor(props){
        super(props)
        this.state ={userCollection:[]}
    }
    componentDidMount(){
      fetch('http://localhost:3005/data')
      .then(res =>{this.setState({userCollection:res.json()})})
      .then((res)=> console.log(res))
      .catch((error)=> console.log(error))
    }
    dataTablef(){
        return this.state.userCollection.map((data,index)=>{
                 return <dataTable obj={data}></dataTable>
        })
    }
    render(){
        return(
            <React.Fragment>
                <div className="container">
                <table className="table table-dark table-striped">
                    <thead className="thead-dark">
                        <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.dataTablef.bind(this)}
                        
                    </tbody>
                    </table>
                </div>
            </React.Fragment>
        )
    }
}
export default UserListComponent