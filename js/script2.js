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