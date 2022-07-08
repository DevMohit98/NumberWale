import config from "../conf/index.js";
let cardArr = document.querySelectorAll(".card-row"); // dream number desktop
let cardArr2 = document.querySelectorAll(".card-Vip-row"); // vip number desktop
let cardSmArr = document.querySelectorAll(".card-sm-row"); // dream number mobile
let cardVipsm = document.querySelectorAll(".card-Vipsm-row"); // vip number mobile
const card = [...cardArr]; // dream number desktop
const cardSm = [...cardSmArr]; // dream number mobile
const cardVip = [...cardArr2]; // vip number desktop
const VipSmCard = [...cardVipsm];
let HomeCardData;
// Home card Desktop
const FetchHome = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_products/1"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  card.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.classList.add(
        "col-xl-3",
        "col-lg-3",
        "col-md-3",
        "col-18",
        "pull-up"
      );
      dov.innerHTML = `<div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
         <div class="d-flex justify-content-between align-items-center col-div px-2 ">
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
    <button class="me-2 btn-eye" onclick=window.location.href="./Detail.html?product=${val.product_id}"><i class="fa-solid fa-eye"></i> 0</button> 
    <button><i class="fa-solid fa-heart"></i> 0</button> </div>
    <div class="ms-3">
    <button class="me-2"><i class="fa-solid fa-cart-shopping"></i></button> 
    <button>Buy</button> </div>
    
    </div>
    </div>
    </div>
    `;
      item.appendChild(dov);
    });
  });
};
FetchHome();

// Home Card Desktop 2
const FetchHome2 = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_products/2"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  cardVip.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.classList.add(
        "col-xl-3",
        "col-lg-3",
        "col-md-3",
        "col-18",
        "pull-up"
      );
      dov.innerHTML = `<div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
         <div class="d-flex justify-content-between align-items-center col-div px-2 ">
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
    <button class="me-2 btn-eye" onclick=window.location.href="./Detail.html?product=${val.product_id}"><i class="fa-solid fa-eye"></i> 0</button> 
    <button><i class="fa-solid fa-heart"></i> 0</button> </div>
    <div class="ms-3">
    <button class="me-2"><i class="fa-solid fa-cart-shopping"></i></button> 
    <button>Buy</button> </div>
    
    </div>
    </div>
    </div>
    `;
      item.appendChild(dov);
    });
  });
};
FetchHome2();

// Home card Mobile
const FetchHomeMobile = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_products/1"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  cardSm.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
      dov.innerHTML = `  <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
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
<button class="me-1 btn-eye"onclick=window.location.href="./Detail.html?product=${val.product_id}"><i class="fa-solid fa-eye"></i> 0</button> 
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
};
FetchHomeMobile();

// Home card Mobile 2
const FetchHomeMobile2 = async () => {
  const response = await fetch(
    config.backendEndpoint + "/fetch_all_products/2"
  );
  const data = await response.json();
  HomeCardData = data.data;
  HomeCardData.length = 12;
  VipSmCard.map((item) => {
    HomeCardData.forEach((val) => {
      let dov = document.createElement("div");
      let num = val.number.toString();
      const first3 = num.slice(0, 2);
      const reamaning = num.slice(2, 6);
      const last = num.slice(6, 10);
      dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
      dov.innerHTML = `  <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
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
<button class="me-1 btn-eye"onclick=window.location.href="./Detail.html?product=${val.product_id}"><i class="fa-solid fa-eye"></i> 0</button> 
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
};
FetchHomeMobile2();

//------------------------------------------------------------------------------------------------------//
const eng = document.getElementById("eng-btn");
const hin = document.getElementById("hin-btn");
const eng1 = document.querySelector(".eng-text");
const hin1 = document.querySelector(".hin-text");
const headToggle = document.querySelector(".step-toggle-heading");

const toggleEng = () => {
  if (eng.classList.length < 1) {
    eng.classList.add("active");
    eng1.style.display = "block";
    hin1.style.display = "none";
    hin.classList.remove("active");
    headToggle.innerText = "EASY STEPS TO BUY YOUR VIP NUMBER ?";
  }
};

const toggleHin = () => {
  if (hin.classList.length < 1) {
    hin.classList.add("active");
    hin1.style.display = "block";
    eng.classList.remove("active");
    hin.style.border;
    eng1.style.display = "none";
    headToggle.innerText = "अपना वीआईपी नंबर खरीदने के लिए आसान कदम?";
  }
};
//--------------------------------------------------//

// recent card
let recentArr = [1, 2];
let recentCard = document.querySelectorAll(".recent-row");
const recent = [...recentCard];
recent.map((item) => {
  recentArr.forEach((val) => {
    let dov = document.createElement("div");
    dov.classList.add("col-3", "col-md-3", "col-3", "pull-up");
    dov.innerHTML = `
    <div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
    
    <div class="d-flex justify-content-between px-2 align-items-center col-div mt-2 mb-1">
        <i class="fa-solid fa-crown"> </i>
        <h4 class="mb-0">₹3500/-</h4>

      </div>
<div class="d-flex flex-column bg-cont" style="border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;">
 


<div class="d-flex flex-column align-items-center col-div-2 mt-2">
  
<h2 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h2>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>
 
<div class="d-flex justify-content-center col-div-3 py-1">
 
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>

</div>

<div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
<div>
<button class="me-1 btn-eye"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1"><i class="fa-solid fa-heart"></i> 0</button> </div>
<div class="ms-3">
<button class="me-1"><i class="fa-solid fa-cart-shopping"></i></button> 
<button>Buy</button> </div>

</div>
</div>
</div>
      `;
    item.appendChild(dov);
  });
});

// recent card mobile

let recentCardSm = document.querySelectorAll(".recent-row-sm");
const recentSm = [...recentCardSm];
recentSm.map((item) => {
  recentArr.forEach((val) => {
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
