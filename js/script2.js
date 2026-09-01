alert("⭕⭕⭕ Important Notice: This website is strictly a demo project and portfolio sample. It is not a real or operational website. All elements displayed on this website, including logos, symbols, certificates, licenses, trust badges, contact information, business details, products, prices, payment gateways, links, and any other information, have been created solely for demonstration and website design purposes. None of the logos, symbols, certificates, licenses, trust badges, or other information displayed on this website are real, valid, officially verified, or legally recognized. They must not be considered as proof of authorization, certification, approval, or affiliation with any organization, company, or business. This website is not an actual store or business, and no real products or services are being offered through it. No real orders, purchases, payments, or transactions can be made through this website. This project has been created solely to demonstrate web design and development skills.");

let menubtn = document.getElementById("menubtn");
let nav1 = document.getElementById("lg1");
let nav2 = document.getElementById("lg2");
let nav3 = document.getElementById("lg3");
let nav4 = document.getElementById("lg4");
let nav5 = document.getElementById("lg5");
menubtn.addEventListener("click", function () {
    nav1.classList.toggle("active");
    nav2.classList.toggle("active");
    nav3.classList.toggle("active");
    nav4.classList.toggle("active");
    nav5.classList.toggle("active");
});

let form = document.getElementById("form");
let input1 = document.getElementById("Cnum");
let input2 = document.getElementById("Cpin");
let input3 = document.getElementById("pm");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (input1.value.trim() === "") {
        input1.classList.add("error");
        return;
    }
    else {
        input1.classList.remove("error");
    };
    if (input2.value.trim() === "") {
        input2.classList.add("error");
        return;
    }
    else {
        input2.classList.remove("error");
    };
    if (input3.value.trim() === "") {
        input3.classList.add("error");
        return;
    }
    else {
        input3.classList.remove("error");
    };
    alert("Your payment and booking have been successfully processed. Please remain available; our experts will contact you within the next hour to finalize the booking.");
    alert("Please note that by finalizing your reservation, you accept the rules of Khan Daei Restaurant. If you do not agree with these rules, please inform our staff and cancel your reservation.");
});
