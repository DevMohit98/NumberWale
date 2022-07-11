let cardArr2 = document.querySelector(".card-vip-row");
let cardArrMob = document.querySelector(".card-sm-row");

let defaultData = (
  count,
  number,
  sum_total,
  not_contains,
  sort,
  low_price,
  high_price,
  number_series,
  search_type,
  category
) => {
  fetch(
    `https://vipnumberapi.bigboychoice.com/api/v1/customer/search_products/${count}?number=${number}&sum_total=${sum_total}&number_not_contains=${not_contains}&sort=${sort}&low_price=${low_price}&high_price=${high_price}&number_series=${number_series}&search_type=${search_type}&category=${category}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failure") {
        cardArr2.innerHTML = `<h1>${data.msg}</h1>`;
        cardArrMob.innerHTML = `<h1>${data.msg}</h1>`;
      } else {
        let dataOfNums = data.data;
        dataOfNums.map((item) => {
          const {
            price,
            sum_total,
            first_sum,
            number_status,
            number,
            product_id,
          } = item;
          const first3 = number.slice(0, 2);
          const reamaning = number.slice(2, 6);
          const last = number.slice(6, 10);
          cardArr2.innerHTML =
            cardArr2.innerHTML +
            `<div class="col-xl-4 col-lg-4 col-md-4 col-18 pull-up">
        <div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
    <div class="d-flex justify-content-between px-2 align-items-center col-div mt-2 mb-1">
        <i class="fa-solid fa-crown"> </i>
        <h4 class="mb-0">₹${price}/-</h4>
      </div>
<div class="d-flex flex-column bg-cont" style="border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;">
 <div class="d-flex flex-column align-items-center col-div-2 mt-2">
  
<h2 class="mb-0 fw-bold">${first3}-<span style="color: #FF5F01;">${reamaning}-${last}</span></h2>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>
<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">${sum_total}</strong> | Sum - <strong class="mx-2">${first_sum}</strong> | <span>${number_status}</span>
</div>
<div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
<div>
<button class="me-1 btn-eye" onclick=window.location.href="./Detail.html?product=${product_id}"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1" onclick="addToWishlist(${product_id})"><i class="fa-solid fa-heart"></i></button> </div>
<div class="ms-3">
<button class="me-1" onclick="cart(${product_id})"><i class="fa-solid fa-cart-shopping"></i></button> 
<button onclick="buyNow(${product_id})">Buy</button> </div>
</div>
</div>
</div>
      `;
          cardArrMob.innerHTML =
            cardArrMob.innerHTML +
            `
       <div class="col-6 col-md-6 col-18 pull-up">
    <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
    <div class="d-flex justify-content-between align-items-center col-div px-2 my-1">
        <i class="fa-solid fa-crown"> </i> 
        <h4 class="mb-0">₹${price}/-</h4>
      </div>
<div class="d-flex flex-column bg-cont">
 
<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="mb-0 fw-bold">${first3}-<span style="color: #FF5F01;">${reamaning}-${last}</span></h1>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>
<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">${sum_total}</strong> | Sum - <strong class="mx-2">${first_sum}</strong> | <span>${number_status}</span>
</div>
<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
<div>
<button class="me-1 btn-eye"onclick=window.location.href="./Detail.html?product=${product_id}"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1" onclick="addToWishlist(${product_id})"><i class="fa-solid fa-heart"></i></button> </div>
<div class="ms-md-5 ms-2">
<button class="me-1" onclick="cart(${product_id})"><i class="fa-solid fa-cart-shopping"></i></button> 
<button onclick="buyNow(${product_id})">Buy</button> </div>
</div>
</div>
</div>
    </div>
      `;
        });
      }
    });
};
let dataOfCategory = (
  count,
  number,
  sum_total,
  not_contains,
  sort,
  low_price,
  high_price,
  number_series,
  search_type,
  category
) => {
  fetch(
    `https://vipnumberapi.bigboychoice.com/api/v1/customer/search_products/${count}?number=${number}&sum_total=${sum_total}&number_not_contains=${not_contains}&sort=${sort}&low_price=${low_price}&high_price=${high_price}&number_series=${number_series}&search_type=${search_type}&category=${category}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.status === "failure") {
        cardArr2.innerHTML = `<h1>${data.msg}</h1>`;
        cardArrMob.innerHTML = `<h1>${data.msg}</h1>`;
      } else {
        let dataOfNums = data.data;
        cardArr2.innerHTML = "";
        cardArrMob.innerHTML = "";
        dataOfNums.map((item) => {
          const {
            price,
            sum_total,
            first_sum,
            number_status,
            number,
            product_id,
          } = item;
          const first3 = number.slice(0, 2);
          const reamaning = number.slice(2, 6);
          const last = number.slice(6, 10);
          cardArr2.innerHTML =
            cardArr2.innerHTML +
            `<div class="col-xl-4 col-lg-4 col-md-4 col-18 pull-up">
        <div style="border-radius:10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
    <div class="d-flex justify-content-between px-2 align-items-center col-div mt-2 mb-1">
        <i class="fa-solid fa-crown"> </i>
        <h4 class="mb-0">₹${price}/-</h4>
      </div>
<div class="d-flex flex-column bg-cont" style="border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;">
 <div class="d-flex flex-column align-items-center col-div-2 mt-2">
  
<h2 class="mb-0 fw-bold">${first3}-<span style="color: #FF5F01;">${reamaning}-${last}</span></h2>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>
<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">${sum_total}</strong> | Sum - <strong class="mx-2">${first_sum}</strong> | <span>${number_status}</span>
</div>
<div class="d-flex justify-content-center align-items-center card-icon-cont py-3">
<div>
<button class="me-1 btn-eye" onclick=window.location.href="./Detail.html?product=${product_id}"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1" onclick="addToWishlist(${product_id})"><i class="fa-solid fa-heart"></i></button> </div>
<div class="ms-3">
<button class="me-1" onclick="cart(${product_id})"><i class="fa-solid fa-cart-shopping"></i></button> 
<button onclick="buyNow(${product_id})">Buy</button> </div>
</div>
</div>
</div>
      `;
          cardArrMob.innerHTML =
            cardArrMob.innerHTML +
            `
        <div class="col-6 col-md-6 col-18 pull-up">
    <div style="border-radius: 10px;background: #FF5F01;border:1.5px solid #e6e6e6;box-shadow:0 0 10px grey;">
    <div class="d-flex justify-content-between align-items-center col-div px-2 my-1">
        <i class="fa-solid fa-crown"> </i> 
        <h4 class="mb-0">₹${price}/-</h4>
      </div>
<div class="d-flex flex-column bg-cont">
 
<div class="d-flex flex-column align-items-center col-div-2 mt-1">
   
<h1 class="mb-0 fw-bold">${first3}-<span style="color: #FF5F01;">${reamaning}-${last}</span></h1>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
</div>
<div class="d-flex justify-content-center col-div-3 py-1">
Total -<strong class="mx-2">${sum_total}</strong> | Sum - <strong class="mx-2">${first_sum}</strong> | <span>${number_status}</span>
</div>
<div class="d-flex justify-content-center align-items-center card-icon-cont py-2 py-md-3">
<div>
<button class="me-1 btn-eye"onclick=window.location.href="./Detail.html?product=${product_id}"><i class="fa-solid fa-eye"></i> 0</button> 
<button class="me-1" onclick="addToWishlist(${product_id})"><i class="fa-solid fa-heart"></i></button> </div>
<div class="ms-md-5 ms-2">
<button class="me-1" onclick="cart(${product_id})"><i class="fa-solid fa-cart-shopping"></i></button> 
<button onclick="buyNow(${product_id})">Buy</button> </div>
</div>
</div>
</div>
    </div>
      `;
        });
      }
    });
};
