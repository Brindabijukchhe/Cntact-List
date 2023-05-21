// work flow
// 1. we need to fecth usr from API
// 2. store those userd in global array
// 3. display user in the UI


let userList =[];

const apiEp = "https://randomuser.me/api?";
const countElm = document.getElementById("count");
const displayElm  = document.getElementById("list");
const fetchUsers = async (path = "results=20") => {
// //   Promise
// fetch(apiEp).then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     userList= data.results;
//     console.log(data);
// })
//  .catch((error) => {
   
//     console.log(error);
//  })
// };



// async/await
try{
const response = await fetch(apiEp +path);
const data = await response.json();
userList= data.results
displayUser (userList)
console.log(data.results);
}catch(error){
    console.log(error);
}
};

fetchUsers();

const displayUser = (displayArg) => {
  let str = "";
  displayArg.forEach((usr) => {
    str += `<div class="card" style="width: 18rem;">
    <img src="${usr?.picture?.large}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${usr?.name?.title} ${usr?.name?.first} ${usr?.name?.last}</h5>
      <p class="card-text">
      <ul class='list-unstyled'>
      
      <li> <i class="fa-solid fa-envelope"></i> ${usr?.email}</li>
      </li><i class="fa-sharp fa-solid fa-house"></i>
      ${usr.location.street.number} ${usr.location.street.name},  ${usr?.location.city},
        ${usr?.location.state}, ${usr?.location.postcode}</li>
      </ul>   
      
      </p>
    
       <a href="tel:${usr?.phone}">
       <div class ="d-grid">
       <button class = "btn btn-primary">
       <li> <i class="fa-solid fa-phone"></i> ${usr?.phone} </li></button>
  
    </div>
    </a>
    </div>
  </div>`;
    
  });

  

  displayElm.innerHTML = str;
  countElm.innerText = displayArg.length;
};



document.getElementById("select").addEventListener("change",(e) => {
    const {value} = e.target;
    const path = `results=20&gender=` + value;
    fetchUsers(path);
});
  
document.getElementById("search-input").
addEventListener("keyup", (e) => {
    const {value} = e.target;
//  run filter method
const filteredUser =userList.filter((item) =>{
    console.log(item);
    const fullName = (item.name.first + " " + item.name.last).toLowerCase();
    
 return fullName.includes(value.toLowerCase());
});

 displayUser(filteredUser);
// dsplay functio
});

