const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {

  function fetchData(){
          var data = fetch('https://randomuser.me/api/')
            .then( res => res.json() )
            // .then( json => console.log(json) )
            return data;
  }

  fetchData()

  console.log("CONTENT LOADED!");
});
