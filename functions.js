function glibddfun() {
    document.getElementById("glibdropdownid").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('button.glibdbtn')) {
        var dropdowns = document.getElementsByClassName("glibddcont");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
