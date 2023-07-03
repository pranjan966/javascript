document.getElementById("my-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // var name = document.getElementById("name").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    // console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);

    document.getElementById('my-form').style.background = "#ccc";
    document.getElementById('exampleInputEmail1').value = "enter user name";

})
// You can perform further actions with the form data here

// function function1() {
//     event.preventDefault(); // Prevent form submission
//     // var name = document.getElementById("name").value;
//     var email = document.getElementById("exampleInputEmail1").value;
//     var password = document.getElementById("exampleInputPassword1").value;
//     console.log("Name: " + name);
//     console.log("Email: " + email);
//     console.log("Password: " + password);
//     // You can perform further actions with the form data here
// }

// const btn = document.querySelector("#btn1");
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.getElementById('my-form').style.background = "#ccc";
// });

// btn.style.background = 'red'
// document.querySelector("my-form").style.background = '#ccc'
document.getElementsByClassName("form-label").addEventListener("mouseover", (e) => {

    document.getElementsByClassName.style.background = "red";
})