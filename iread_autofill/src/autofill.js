//copy username
window.setTimeout(function() {
    document.querySelector("input[name='j_username']").value = document.querySelector("input[name='hidden_username']").value;
}, 100);

//enable button
document.querySelector("input[type='submit']").removeAttribute("disabled");

//add button
var but = document.createElement("input");
but.id = "signInButton";
but.type = "button";
but.setAttribute("style", "background: url(./images/signIn_up.png) no-repeat; cursor: pointer; border: none; width: 127px; height: 44px;");
document.querySelector("input[type='submit']").parentNode.append(but);

//remove old button
document.querySelector("input[type='submit']").parentNode.removeChild(document.querySelector("input[type='submit']"));

//set button click handler
document.querySelector("#signInButton").addEventListener("click", function(ev) {
    //prevent form submission
    ev.preventDefault();
    var hidden_password = document.querySelector("input[name='hidden_password']").value;
    var visible_password = document.querySelector("input[name='j_password']").value;
    //if hidden password is non-empty and visible password is empty
    if (hidden_password && !visible_password) {
        //enable password field
        document.querySelector("input[name='j_password']").removeAttribute("disabled");
        //copy hidden password to visible one 
        document.querySelector("input[name='j_password']").value = hidden_password;
    }
    //submit form
    document.querySelector("#login_form").submit();
});
