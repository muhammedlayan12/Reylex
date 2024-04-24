//mainpaig wala wxplore button
{
    function scrollByClickonbutton() {
        var button = document.getElementById("sec1btn");
        if (button) {
            button.addEventListener("click", function () {
                window.scrollTo({
                    top: 1500,
                    behavior: "smooth",
                });
            });
        }
    }
    scrollByClickonbutton();
}
//navbar wala contact button 
{
    function scrollByClickoncontact() {
        var button = document.getElementById("contactbtn");
        if (button) {
            button.addEventListener("click", function () {
                window.scrollTo({
                    top: 4500,
                    behavior: "smooth"
                });
            });
        }
    }
    scrollByClickoncontact();
}
//navbar wala about button 
{
    function scrollByClickonabout() {
        var button = document.getElementById("aboutbtn");
        if (button) {
            button.addEventListener("click", function () {
                window.scrollTo({
                    top: 4100,
                    behavior: "smooth"
                });
            });
        }
    }
    scrollByClickonabout();
}
//search bar or btn functionality
document.getElementById("srhbtn").addEventListener("click", function () {
    var searchTerm = document.getElementById("srhbar").value.toLowerCase();
    var products = document.getElementById("products").getElementsByClassName("product");
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            products[i].style.display = "block"; // Show the product
        }
        else {
            products[i].style.display = "none"; // Hide the product
        }
    }
});
