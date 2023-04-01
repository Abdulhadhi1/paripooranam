import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import BootstrapTable from 'react-bootstrap-table-next';

function Screen1() {
  const [productList, productData] = useState([]);
  // const table =[
  //   {
  //       userdata : 'id', text: 'id'
  //   },
  //   {
  //     userdata : 'name', text: 'Name'
  //   },
  //   {
  //     userdata : 'email', text: 'id'
  //   },
  //   {
  //     userdata : 'address.street', text: 'id'
  //   },
  //   {
  //     userdata : 'address.city', text: 'id'
  //   },
  //   {
  //     userdata : 'address.zipcode', text: 'id'
  //   }
  
  // ]

 

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(result => productData(result))
    .catch(error => console.log(error));
  }, [])

  return (
    <div>

<div class="input-group">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <button type="button" class="btn btn-outline-primary">search</button>
</div>







    
      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Street</th>
      <th scope="col">Zipcode</th>
    </tr>
  </thead>{
    productList && productList.length> 0 ?
    productList.map(user => 
  
  <tbody>
    <tr>

      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.address.city}</td>
      <td>{user.address.street}</td>
      <td>{user.address.zipcode}</td>

    </tr> 
  
   
   
  </tbody> 
    )
    :'Loading'
}
</table>


<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>










    </div>
  )
}

export default Screen1