import React from 'react'
function dataTable(props){
 return(
    <tr>
        <td>1</td>
        <td>{props.obj.Title}</td>
        <td>{props.obj.Year}</td>
    </tr>
 )
}
export default dataTable