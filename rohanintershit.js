let onOpenBtn = document.getElementById("onOpenBtn");
let section2 = document.getElementById("section2");
let sectionHome = document.getElementById("sectionHome");
let para = document.getElementById("para");
let para1 = document.getElementById("para1");
let gotIT = document.getElementById("gotIT");
let para2 = document.getElementById("para2");
let contInput = document.getElementById("contInput");
let inputEle = document.getElementById("inputEle");
let para3 = document.getElementById("para3");
let para4 = document.getElementById("para4");
let inputCont = document.getElementById("inputCont");
let para5 = document.getElementById("para5");
let inputEle2 = document.getElementById("inputEle2");
let errorMsg2 = document.getElementById("errorMsg2");
let errorMsg = document.getElementById("errorMsg");

function sectionwelcom() {
    para.textContent = "Hello, Welcome to student info system!";
    para.style.backgroundColor = "white";
    para.style.color = "black";
    para.style.padding = "10px";
    para.style.borderBottomLeftRadius = "40px";
    para.style.borderBottomRightRadius = "40px";
    para.style.borderTopRightRadius = "40px";

    gotIT.onclick = function() {
        para1.textContent = " Got it!";
        para2.textContent = "Enter your Name";
        para2.style.backgroundColor = "white";
        para2.style.color = "black";
        para2.style.padding = "10px";
        para2.style.borderBottomLeftRadius = "40px";
        para2.style.borderBottomRightRadius = "40px";
        para2.style.borderTopRightRadius = "40px";
        para1.style.color = "black";
        para1.style.padding = "5px";
        para1.style.backgroundColor = "white";
        contInput.classList.add("display", "d-block");
        inputCont.classList.add("display", "d-block");
    }

    inputEle.addEventListener("keydown", function(Event) {
        if (Event.key === "Enter") {
            para3.textContent = inputEle.value;
            para3.style.color = "black";
            para3.style.padding = "5px";
            para3.style.backgroundColor = "white";

            para4.textContent = "Enter your Age";

            para4.style.backgroundColor = "white";
            para4.style.color = "black";
            para4.style.padding = "10px";
            para4.style.borderBottomLeftRadius = "40px";
            para4.style.borderBottomRightRadius = "40px";
            para4.style.borderTopRightRadius = "40px";
            if (inputEle.value === "") {
                errorMsg.textContent = "Please enter the vaild Details";
                errorMsg.style.color = "Red";
            } else {
                errorMsg.textContent = ""
            }
        }


    })

    inputEle2.addEventListener("keydown", function(Event) {
        if (Event.key === "Enter") {
            para5.textContent = inputEle2.value;
            para5.style.backgroundColor = "white"
            para5.style.padding = "5px"
            para5.style.color = "black";
            para3.style.padding = "5px";
            if (inputEle2.value === "") {
                errorMsg2.textContent = "Please enter the vaild Details";
                errorMsg2.style.color = "Red";
            } else {
                errorMsg2.textContent = ""
            }
        }
    })
}


onOpenBtn.onclick = function() {
    sectionHome.classList.add("display", "d-none");
    section2.classList.add("display", "d-block");

    sectionwelcom()
}