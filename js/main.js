window.onload = function () {
    a = document.getElementById('a');
    b = document.getElementById('b');
}

function showA() {
    b.style.filter = 'alpha(opacity=80)';
    b.style.opacity = 0.8;
    b.style.display = 'block';

    a.style.display = 'block';
    a.style.top = "200px";
}
function hideA() {
    b.style.display = "none";
    a.style.display = "none";
}