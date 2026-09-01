alert("⚠️ Important Notice: Welcome to the “Khan Daee Restaurant” website. Please note that this website is solely a web design and development portfolio project and does not belong to a real restaurant.");
alert("All information, images, trust badges, and other elements displayed on this website are for demonstration purposes only and are not real. Please take this notice into consideration before relying on or using any information provided on this website. Any use of the information or content on this website is at the user's own discretion and responsibility.");

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
