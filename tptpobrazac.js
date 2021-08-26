//form validator
const nameDOM = document.getElementById("name");
const emailDOM = document.getElementById("email");
const mobileDOM = document.getElementById("mobile");
const messageDOM = document.getElementById("message");
document.getElementById("submit-btn").onclick = function(e){
    e.preventDefault();
    validateInputs();
}
function validateInputs(){
    if (nameDOM.value == "" || emailDOM.value == "" || mobileDOM.value == "" || messageDOM.value == "") {
        alert("Morate popuniti sva mjesta");
        return;
      }
      if(!/^[a-zA-Z]+$/.test(nameDOM.value)){
        alert("Unijeli ste pogresano ime");
        return;
    }
    if(!/^[0-9]+$/.test(mobileDOM.value)){
    alert("Unijeli ste pogresan broj");
    return;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(emailDOM.value.toLowerCase())){
        alert("Unijeli ste pogresan email");
        return;
    }  
}