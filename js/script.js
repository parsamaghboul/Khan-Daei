alert("⭕⭕⭕ Important Notice: This website is strictly a demo project and portfolio sample. It is not a real or operational website. All elements displayed on this website, including logos, symbols, certificates, licenses, trust badges, contact information, business details, products, prices, payment gateways, links, and any other information, have been created solely for demonstration and website design purposes. None of the logos, symbols, certificates, licenses, trust badges, or other information displayed on this website are real, valid, officially verified, or legally recognized. They must not be considered as proof of authorization, certification, approval, or affiliation with any organization, company, or business. This website is not an actual store or business, and no real products or services are being offered through it. No real orders, purchases, payments, or transactions can be made through this website. This project has been created solely to demonstrate web design and development skills.");

let topbtn = document.getElementById("topbtn");
topbtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

let button = document.getElementById("dark");
button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

let form = document.getElementById("form");
let input1 = document.getElementById("name");
let input2 = document.getElementById("phone");
let input3 = document.getElementById("guests");
let input4 = document.getElementById("time");
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
    if (input4.value.trim() === "") {
        input4.classList.add("error");
        return;
    }
    else {
        input4.classList.remove("error");
    };
    form.submit();
});
