const formElement = document.getElementById("form");
const formContainer = document.getElementById("form-container");
const sumbitButton = document.getElementById("#submit");
const firstname = document.getElementById("fname");
const lastname = document.getElementById("lname");
const email = document.getElementById("email");
const messsage = document.getElementById("message");
console.log(messsage.value);

function errorInput(ele, type, pattern, area) {
  ele.addEventListener(type, (e) => {
    if (e.target.value.match(pattern) === null) {
      e.target.style = "border: 2px solid red";
      if(ele === messsage){
       
        e.target.setCustomValidity(`Please enter a valid ${area} of at least 10 characters`);
      }
       else{
      e.target.setCustomValidity(`Please enter a valid ${area}`);   
       }

    } else {
      e.target.setCustomValidity("");
      e.target.style = "border : 2px solid hsl(169, 82%, 27%);n";
    }
  });
}



errorInput(firstname, "input", /^[A-Z][a-z]+$/i, "First Name");
errorInput(lastname, "input", /^[A-Z][a-z]+$/i, "Last Name");
errorInput(email, "input", /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Email");
errorInput(messsage, "input", /^(?!.*^\s*$)[A-Za-z0-9.,!?'"() \n]{10,500}$/m, "Message");






formElement.addEventListener("submit", (e) => {
  e.preventDefault();

 



  let inquiry = document.querySelector('input[name="enquiry"]:checked');
  const message = document.getElementById("message").value;

  setTimeout(() => {
    bg.style.display = "block";
    bg.classList.add("show") = 
  

    // Hide the element after 3 seconds
    setTimeout(() => {
      bg.style.display = "none";
    }, 3000);
  });
  formElement.reset();
});

// Write a function that takes an input Element
// , and a regex pattern and validates the input on the 'input' event.
