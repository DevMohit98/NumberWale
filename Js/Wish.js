let cardWish1 = document.querySelectorAll(".card-wish-row");
const cardWish = [...cardWish1];
let token = localStorage.getItem("user");
if (token) {
  var myHeaders = new Headers();
  myHeaders.append("token", `${token}`);

  var requestOptions1 = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://vipnumberapi.bigboychoice.com/api/v1/customer/customer_info",
    requestOptions1
  )
    .then((response) => response.json())
    .then((result) => {
      fetch(
        "https://vipnumberapi.bigboychoice.com/api/v1/customer/fetch_whishlist/1?customer_id=" +
          result.data.customer_id,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          cardWish.map((item) => {
            result.data.forEach((val) => {
              const first3 = val.number.slice(0, 2);
              const reamaning = val.number.slice(2, 6);
              const last = val.number.slice(6, 10);
              let dov = document.createElement("div");
              dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
              dov.innerHTML = `<div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
      
      <div class="d-flex justify-content-between align-items-center col-div my-1 px-2">
          <i class="fa-solid fa-crown"> </i> 
         
          <h4 class="mb-0">₹${val.price}/-</h4>
        </div>
  <div class="d-flex flex-column bg-cont">
   
  
  
  <div class="d-flex flex-column align-items-center col-div-2 mt-1">
     
  <h1 class="mb-0 fw-bold">${first3}-<span style="color: #FF5F01;">${reamaning}-${last}</span></h1>
  <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
  </div>
  
  <div class="d-flex justify-content-center col-div-3 py-1">
  Total -<strong class="mx-2">${val.sum_total}</strong> | Sum - <strong class="mx-2">${val.first_sum}</strong> | <span>${val.number_status}</span>
  </div>
  
  <div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
  
  <button class="me-1" onclick="addToWishlist(${val.product_id},'remove')"><i class="fa-solid fa-heart wish-heart" style="color:red" ></i></button> 
  
  <button class="me-1" onclick="cart(${val.product_id})"><i class="fa-solid fa-cart-shopping"></i></button> 
 
  
  </div>
  </div>
  </div>
              `;
              item.appendChild(dov);
            });
          });
        });
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };

      // Wish list card Mobile
      let cardWish1Sm = document.querySelectorAll(".card-wish-sm-row");
      const cardWishSm = [...cardWish1Sm];
      fetch(
        "https://vipnumberapi.bigboychoice.com/api/v1/customer/fetch_whishlist/1?customer_id=" +
          result.data.customer_id,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          cardWishSm.map((item) => {
            result.data.forEach((val) => {
              const first3 = val.number.slice(0, 2);
              const reamaning = val.number.slice(2, 6);
              const last = val.number.slice(6, 10);
              let dov = document.createElement("div");
              dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
              dov.innerHTML = `
              <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
      <div class="d-flex justify-content-between align-items-center col-div px-2 my-1">
          <i class="fa-solid fa-crown"> </i> 
          <h4 class="mb-0">₹${val.price}/-</h4>
        </div>
  <div class="d-flex flex-column bg-cont">
   
  
  
  <div class="d-flex flex-column align-items-center col-div-2 mt-1">
     
  <h1 class="mb-0 fw-bold">${first3}-<span style="color: #FF5F01;">${reamaning}-${last}</span></h1>
  <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
  </div>
  
  <div class="d-flex justify-content-center col-div-3 py-1">
  Total -<strong class="mx-2">${val.sum_total}</strong> | Sum - <strong class="mx-2">${val.first_sum}</strong> | <span>${val.number_status}</span>
  </div>
  
  <div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
  <div>
  <button class="me-1" onclick="addToWishlist(${val.product_id},'remove')"><i class="fa-solid fa-heart" style="color:red"></i></button> </div>
  <div class="ms-md-5 ms-2">
  <button class="me-1" onclick="cart(${val.product_id})"><i class="fa-solid fa-cart-shopping"></i></button> 
  
  </div>
  </div>
  </div>
                `;
              item.appendChild(dov);
            });
          });
        });
    })
    .catch((error) => console.log("error", error));
}
