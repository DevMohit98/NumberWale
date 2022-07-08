let wishArr = [1, 2];
let cardWish1 = document.querySelectorAll(".card-wish-row");
const cardWish = [...cardWish1];
cardWish.map((item) => {
  wishArr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `  <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
      
      <div class="d-flex justify-content-between align-items-center col-div my-1 px-2">
          <i class="fa-solid fa-crown"> </i> 
         
          <h4 class="mb-0">₹3500/-</h4>
        </div>
  <div class="d-flex flex-column bg-cont">
   
  
  
  <div class="d-flex flex-column align-items-center col-div-2 mt-1">
     
  <h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
  <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
  </div>
  
  <div class="d-flex justify-content-center col-div-3 py-1">
  Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
  </div>
  
  <div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
  
  <button class="me-1" ><i class="fa-solid fa-heart wish-heart" style="color:red" ></i></button> 
  
  <button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
 
  
  </div>
  </div>
  </div>
      `;
    item.appendChild(dov);
  });
});

let cardWish1Sm = document.querySelectorAll(".card-wish-sm-row");
const cardWishSm = [...cardWish1Sm];
cardWishSm.map((item) => {
  wishArr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `  <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
      <div class="d-flex justify-content-between align-items-center col-div px-2 my-1">
          <i class="fa-solid fa-crown"> </i> 
          <h4 class="mb-0">₹3500/-</h4>
        </div>
  <div class="d-flex flex-column bg-cont">
   
  
  
  <div class="d-flex flex-column align-items-center col-div-2 mt-1">
     
  <h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
  <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
  </div>
  
  <div class="d-flex justify-content-center col-div-3 py-1">
  Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
  </div>
  
  <div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
  <div>
  <button class="me-1 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
  <button class="me-1"><i class="fa-solid fa-heart"></i> 0</button> </div>
  <div class="ms-md-5 ms-2">
  <button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
  <button>Buy</button> </div>
  
  </div>
  </div>
  </div>
      `;
    item.appendChild(dov);
  });
});
