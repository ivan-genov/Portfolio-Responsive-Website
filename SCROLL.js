var sanddd = document.getElementById("sanddd");
var container = document.getElementsByClassName("container");

function enableScroll() {
    document.body.style.overflow = "auto";
    sanddd.style.display = "none";
    for (var i = 0; i < container.length; i++) {
        container[i].classList.toggle("change");
    }
}
