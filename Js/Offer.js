//  Offer card Desktop //
let cardOffer = document.querySelectorAll(".card-offer-row");
const card5 = [...cardOffer];
let Arr = [];
var requestOptions = {
  method: "GET",
  redirect: "follow",
};
fetch(
  "https://vipnumberapi.bigboychoice.com/api/v1/customer/fetch_offers/1",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    Arr = result.data;
    card5.map((item) => {
      let dov = document.createElement("div");
      if (!result.data) {
        document.querySelector(".card-offer-row").innerHTML =
          '<h1 class="text-center">No Data Found!</h1>';
      } else {
        Arr.forEach((val) => {
          const first3 = val.number.slice(0, 2);
          const reamaning = val.number.slice(2, 6);
          const last = val.number.slice(6, 10);
          let dov = document.createElement("div");
          dov.classList.add(
            "col-xl-3",
            "col-lg-3",
            "col-md-3",
            "col-18",
            "pull-up"
          );
          dov.innerHTML = `<div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
    <div class="badge-bg-cont">
   <p class="mb-0 blink_me">20% <br />Off</p>
  </div>
         <div class="d-flex justify-content-between align-items-center col-div px-2">
             <i class="fa-solid fa-crown"> </i>
             <h4 class="mb-0">₹${val.price}/-</h4>
           </div>
     <div class="d-flex flex-column bg-cont">
     <div class="d-flex flex-column align-items-center col-div-2 mt-2">
       
    <h1 class="mb-0 fw-bold">${first3}-<span style="color: #FF5F01;">${reamaning}-${last}</span></h1>
    <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
       
     </div>
    
    <div class="d-flex justify-content-center col-div-3 py-1">
    Total -<strong class="mx-2">${val.sum_total}</strong> | Sum - <strong class="mx-2">${val.first_sum}</strong> | <span>${val.number_status}</span>
    </div>
    
    <div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
    <div>
    <button class="me-2 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
    <button><i class="fa-solid fa-heart"></i></button> </div>
    <div class="ms-3">
    <button class="me-2"><i class="fa-solid fa-cart-shopping"></i></button> 
    <button>Buy</button> </div>
    
    </div>
    </div>
    </div>
    `;
          item.appendChild(dov);
        });
      }
    });
  })
  .catch((error) => console.log("error", error));

// offer card Mobile

let cardSmOffer = document.querySelectorAll(".card-offer-sm-row");
const card6 = [...cardSmOffer];
fetch(
  "https://vipnumberapi.bigboychoice.com/api/v1/customer/fetch_offers/1",
  requestOptions
)
  .then((response) => response.json())
  .then((result) => {
    if (!result.data) {
      document.querySelector(".card-offer-sm-row").innerHTML =
        '<h1 class="text-center">No Data Found!</h1>';
    } else {
      card6.map((item) => {
        result.data.forEach((val) => {
          const first3 = val.number.slice(0, 2);
          const reamaning = val.number.slice(2, 6);
          const last = val.number.slice(6, 10);
          let dov = document.createElement("div");
          dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
          dov.innerHTML = `  <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;position:relative">
    
    <div class="d-flex justify-content-between align-items-center col-div my-1 px-2">
        <i class="fa-solid fa-crown"> </i> 
        <div class="ribbon "><span>20% off</span></div>
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
<button class="me-1 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1"><i class="fa-solid fa-heart"></i></button> </div>
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
    }
  });
