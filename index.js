const input = document.querySelector(".inp");
const error = document.querySelector(".error");

input.addEventListener("input", myInput);

function myInput() {
    if (input.value.length < 6) {
        
        input.classList.add("active");
        error.classList.add("para");
        

    }else{
        error.classList.remove("para");
        input.classList.remove("active");
    }
}