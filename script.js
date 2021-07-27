console.log("is it loading??")

function message(){
    alert("Liked")
}
function login(element){
    console.log("hello", element);
    element.innerHTML = "logout";
}
function disappear(element){
    element.remove();
}