function homeVisibility() {
    document.getElementById("homeButton").style.display = "block";
    document.getElementById("aboutButton").style.display = "none";
    document.getElementById("contactButton").style.display = "none";
}
function aboutVisibility() {
    document.getElementById("homeButton").style.display = "none";
    document.getElementById("aboutButton").style.display = "block";
    document.getElementById("contactButton").style.display = "none";
}
function contactVisibility() {
    document.getElementById("homeButton").style.display = "none";
    document.getElementById("aboutButton").style.display = "none";
    document.getElementById("contactButton").style.display = "block";
}