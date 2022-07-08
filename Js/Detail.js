//scripts to fetch data from backend Desktop

let detailArr = document.querySelector(".detail-row");
let detailData;
const id = window.location.search;
let url = `http://167.71.237.36/api/v1/customer/fetch_single_product${id}`;
const FetchProductData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  detailData = data.data;
  let num = detailData.number.toString();
  const first3 = num.slice(0, 2);
  const reamaning = num.slice(2, 6);
  const last = num.slice(6, 10);
  detailArr.innerHTML = `
  <div class="col-xl-4 col-lg-4">
              <div class="number-card">
                <div
                  class="d-flex justify-content-around align-items-center"
                  style="
                    background-color: #f44b01;
                    border-top-left-radius: 10px;
                    border-top-right-radius: 10px;
                    width: 100%;
                  "
                >
                  <i class="fa-solid fa-crown"></i>
                  <h2 class="price">${detailData.price}/-</h2>
                </div>
                <h2 class="number">${first3}-<span>${reamaning}-${last}</span></h2>
                <a href="#" class="Similar-link"
                  >Similar Number <i class="fa-solid fa-right-long fa-1x"></i
                ></a>
                <div class="other-details">
                  <h2>Total <b>-${detailData.sum_total}</b></h2>
                  <h2 class="mx-3">Sum <b>-${detailData.first_sum}</b></h2>
                  <h2>${detailData.number_status}</h2>
                </div>
                <div
                  class="d-flex justify-content-center align-items-center mt-3 mb-2"
                >
                  <div class="btn btn-primary">
                    <i class="fa-solid fa-heart"></i> 0
                  </div>
                  <div class="btn btn-primary mx-3">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <div class="btn btn-primary">Buy</div>
                </div>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4">
              <h2 class="detial-title">Number Details</h2>
              <div class="number-details">
                <h3 style="font-size: 1.2rem; font-weight: bold">
                  Number :<span style="font-weight: lighter; margin-left: 4px"
                    >${detailData.number}</span
                  >
                </h3>
                <h3 style="font-size: 1.2rem; font-weight: bold">
                  Number status :<span
                    style="font-weight: lighter; margin-left: 4px"
                    >${detailData.number_status}</span
                  >
                </h3>
                <h3 style="font-size: 1.2rem; font-weight: bold">
                  Number Type:<span
                    style="font-weight: lighter; margin-left: 4px"
                    >Prepaid</span
                  >
                </h3>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4">
              <h2
                style="
                  font-weight: bold;
                  text-transform: capitalize;
                  font-size: 1.4rem;
                  font-family: 'Poppins';
                "
              >
                Share Number with Friends
              </h2>
              <div
                class="d-flex justify-content-start align-items-center flex-row"
              >
                <div
                  class="btn btn-primary mx-2"
                  style="background-color: #f44b01; border-color: #f44b01"
                >
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div
                  class="btn btn-primary mx-2"
                  style="background-color: #f44b01; border-color: #f44b01"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div
                  class="btn btn-primary mx-2"
                  style="background-color: #f44b01; border-color: #f44b01"
                >
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div
                  class="btn btn-primary mx-2"
                  style="background-color: #f44b01; border-color: #f44b01"
                >
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>`;
};
FetchProductData();

//scripts to fetch data from backend end Desktop
// script to fetch data from backend mobile-->

let detailArrSm = document.querySelector(".detail-mobile");
let detailDataSm;
const idSm = window.location.search;
let urlSm = `http://167.71.237.36/api/v1/customer/fetch_single_product${idSm}`;
const FetchProductDataSm = async () => {
  const response = await fetch(url);
  const data = await response.json();
  detailData = data.data;
  let num = detailData.number.toString();
  const first3 = num.slice(0, 2);
  const reamaning = num.slice(2, 6);
  const last = num.slice(6, 10);
  detailArrSm.innerHTML = ` <div class="number-card m-2">
          <div
            class="d-flex justify-content-around align-items-center"
            style="
              background-color: #f44b01;
              border-top-left-radius: 10px;
              border-top-right-radius: 10px;
              width: 100%;
            "
          >
            <i class="fa-solid fa-crown"></i>
            <h2 class="price">${detailData.price}/-</h2>
          </div>
          <h2 class="number">${first3}-<span>${reamaning}-${last}</span></h2>
          <a href="#" class="Similar-link"
            >Similar Number <i class="fa-solid fa-right-long fa-1x"></i
          ></a>
          <div class="other-details">
            <h2>Total <b>-${detailData.sum_total}</b></h2>
            <h2 class="mx-3">Sum <b>-${detailData.first_sum}</b></h2>
            <h2>${detailData.number_status}</h2>
          </div>
          <div
            class="d-flex justify-content-center align-items-center mt-3 mb-3"
          >
            <div class="btn btn-primary">
              <i class="fa-solid fa-heart"></i> 0
            </div>
            <div class="btn btn-primary mx-3">
              <i class="fa-solid fa-cart-shopping"></i>
            </div>
            <div class="btn btn-primary">Buy</div>
          </div>
        </div>
        <div class="d-flex flex-column m-2 pt-3">
          <h2 class="detial-title">Number Details</h2>
          <div class="number-details">
            <h3 style="font-size: 1rem; font-weight: bold">
              Number :<span style="font-weight: lighter; margin-left: 4px"
                >${detailData.number}</span
              >
            </h3>
            <h3 style="font-size: 1rem; font-weight: bold">
              Number status :<span
                style="font-weight: lighter; margin-left: 4px"
                >${detailData.number_status}</span
              >
            </h3>
            <h3 style="font-size: 1rem; font-weight: bold">
              Number Type:<span style="font-weight: lighter; margin-left: 4px"
                >Prepaid</span
              >
            </h3>
          </div>
        </div>
        <div class="d-flex flex-column m-2 pt-3">
          <h2
            style="
              font-weight: bold;
              text-transform: capitalize;
              font-size: 1.4rem;
            "
          >
            Share Number with Friends
          </h2>
          <div class="d-flex justify-content-start align-items-center flex-row">
            <div
              class="btn btn-primary mx-2"
              style="background-color: #f44b01; border-color: #f44b01"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </div>
            <div
              class="btn btn-primary mx-2"
              style="background-color: #f44b01; border-color: #f44b01"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div
              class="btn btn-primary mx-2"
              style="background-color: #f44b01; border-color: #f44b01"
            >
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div
              class="btn btn-primary mx-2"
              style="background-color: #f44b01; border-color: #f44b01"
            >
              <i class="fa-brands fa-instagram"></i>
            </div>
          </div>
        </div>
 `;
};
FetchProductDataSm();
// script to fetch data from backend end mobile

// script to fetch similar type of number
let simUrl = `http://167.71.237.36/api/v1/customer/fetch_similar_numbers/1${id}`;
var CarouselData;
const FetchCarouselData = async () => {
  const response = await fetch(simUrl);
  const data = await response.json();
  CarouselData = data.data;
  CarouselData.length = 12;
  console.log(CarouselData);
};
FetchCarouselData();
