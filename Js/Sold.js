// CArd SOLD-------------------------//
const Arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let cardSold = document.querySelectorAll(".card-sold-row");
const card3 = [...cardSold];
card3.map((item) => {
  Arr2.forEach((val) => {
    let dov = document.createElement("div");

    dov.classList.add("col-xl-3", "col-lg-3", "col-md-3", "col-18", "pull-up");
    dov.innerHTML = `
<div style="border-radius:10px;background: #FF5F01;border:1px solid #e6e6e6;box-shadow:0 0 10px grey;position: relative;">
<figure>
  <img src="./Assets/soldout.png" />
</figure>
<div class="d-flex justify-content-between align-items-center col-div px-2">
    <i class="fa-solid fa-crown"> </i>
    <h4 class="mb-0">₹3500/-</h4>
  </div>
<div class="d-flex flex-column bg-cont" style="background:#fff">



<div class="d-flex flex-column align-items-center col-div-2 mt-2">

<h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
<a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>

</div>

<div class="d-flex justify-content-center col-div-3 py-1 mb-2" style="border-bottom-left-radius:10px ;border-bottom-right-radius:10px ;">
Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
</div>


</div>
</div>
`;
    item.appendChild(dov);
  });
});

let cardSmSold = document.querySelectorAll(".card-sold-sm-row");
const card4 = [...cardSmSold];

card4.map((item) => {
  Arr2.forEach((val) => {
    let dov = document.createElement("div");

    dov.classList.add("col-6", "col-md-6", "col-18", "pull-up");
    dov.innerHTML = `
 <div style="border-radius:10px;background: #FF5F01;border:1px solid #e6e6e6;box-shadow:0 0 10px grey;position: relative;">
 <figure>
   <img src="./Assets/soldout.png" />
 </figure>
 <div class="d-flex justify-content-between align-items-center col-div px-2">
     <i class="fa-solid fa-crown"> </i>
     <h4 class="mb-0">₹3500/-</h4>
   </div>
 <div class="d-flex flex-column bg-cont" style="background:#fff">
 
 
 
 <div class="d-flex flex-column align-items-center col-div-2 mt-2">
 
 <h1 class="mb-0 fw-bold">82-<span style="color: #FF5F01;">9095-9095</span></h1>
 <a href="#"><small>SIMILAR NUMBERS<i class="fa-solid fa-arrow-right-long ms-1"></i></small></a>
 
 </div>
 
 <div class="d-flex justify-content-center col-div-3 py-1 mb-2" style="border-bottom-left-radius:10px ;border-bottom-right-radius:10px ;">
 Total -<strong class="mx-2">37</strong> | Sum - <strong class="mx-2">8</strong> | <span>R2P</span>
 </div>
 
 
 </div>
 </div>
 `;
    item.appendChild(dov);
  });
});
//--
