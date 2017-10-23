//copy username
window.setTimeout(function() {
    document.querySelector("input[name='j_username']").value = document.querySelector("input[name='hidden_username']").value;
}, 100);

//enable button
document.querySelector("input[type='submit']").removeAttribute("disabled");
//set button click handler
document.querySelector("input[type='submit']").addEventListener("click", function(ev) {
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
