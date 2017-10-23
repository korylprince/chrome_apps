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
    //copy credentials from pre-filled fields if non-empty
    var username = document.querySelector("input[name='hidden_username']").value;
    var password = document.querySelector("input[name='hidden_password']").value;
    if (username) {
        document.querySelector("input[name='j_username']").value = username;
    }
    if (password) {
        document.querySelector("input[name='j_password']").value = password;
    }
    //enable password field
    document.querySelector("input[name='j_password']").removeAttribute("disabled");
    //submit form
    document.querySelector("#login_form").submit();
});
