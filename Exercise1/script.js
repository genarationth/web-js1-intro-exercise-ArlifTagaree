function ChangeName() {
    let text;
    let person = prompt("What is your name?", "Arlif");
    text = "Hello " + person + "! How are you today?";
    document.getElementById("inputName").innerHTML = text;
    
}

