//Alert Me
document.getElementById("alertForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    alert(`Hello ${name}!`);
});

//Change Color
document.getElementById("changeColorBtn").addEventListener("click", function() {
    if(document.body.style.backgroundColor === "lightblue") {
        document.body.style.backgroundColor = "lightgreen";
    }
    else {
        document.body.style.backgroundColor = "lightblue";
    }
});

//Text Tester
document.getElementById("testerForm").addEventListener("submit", function(event) {
    let text = document.getElementById("testerInput").value;
    var validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert("Includes special characters");
    }
});

//Add Text
document.getElementById("addTextBtn").addEventListener("click", function() {
    let heading = document.getElementById("heading");
    heading.innerText += " - Adding Text";
});