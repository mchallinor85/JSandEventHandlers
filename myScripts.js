
const target      = document.getElementById("myButton");
const buttonText  = document.getElementById("myButtonText");
const removeText  = ()=>{buttonText.innerHTML = "";}

target.addEventListener("click", 
() => buttonText.innerHTML = Date()
)


target.addEventListener("mouseover", ()=> target.setAttribute("style", "color:blue;"));
target.addEventListener("mouseout",  ()=> target.setAttribute("style", "color:black;"));
target.addEventListener("mouseout",  ()=> setTimeout(removeText, 3000));