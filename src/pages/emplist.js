import React from 'react';
import emlist from '../data/emplist.json';

class Emplist extends React.Component {
    render() {

        return (
            <div>
            <table>
            <tbody>
            <tr>
            <th>
            ID
            </th>
             <th>
           Name
            </th>
               <th>
         Age
            </th>
               <th>
           Email
            </th>
            <th>
            Gender
            </th>
               <th>
            phoneNo
            </th>

            </tr>

            {emlist.user.map(userdetail=>
            	
            	 <tr key={userdetail.id} >
            	 <td>{userdetail.id}</td>
            	 <td>{userdetail.name}</td>
            	  <td>{userdetail.age}</td>
            	  <td>{userdetail.email}</td>
            	   <td>{userdetail.gender}</td>
            	    <td>{userdetail.phoneNo}</td>
            	 </tr>

            	)}
            </tbody>
            </table>
      
            </div>
        );
    }
}

export default Emplist; 