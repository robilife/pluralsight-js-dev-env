/*import "./index.css";
import numeral from "numeral";

const courseValue = numeral(100).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awsome course!`); // eslint-disable-line no-console*/

import {getUsers, deleteUser} from './api/userApi';

//populate table of users via API call
getUsers().then(result => {

  let usersBody= "";

  result.forEach(user => {
    usersBody += `<tr>
    <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
    <td>${user.id}</td>
    <td>${user.firstname}</td>
    <td>${user.lastname}</td>
    <td>${user.email}</td>
    </tr>`
  });

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function(even){
      const element = even.target;
      even.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };

  });
});