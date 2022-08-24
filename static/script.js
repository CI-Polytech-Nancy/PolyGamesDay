function showModal(id) {
    modals[id].style.display = "block";
}

function closeModals() {
    for (const modal of modals) {
        modal.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let modals = document.getElementsByClassName("overlay");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.opacity = "1";
    } else {
        document.getElementById("topBtn").style.opacity = "0";
    }
};

window.onclick = function (event) {
    for (const modal of modals) {
        if (event.target === modal) closeModals();
    }
}
