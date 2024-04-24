//mainpaig wala wxplore button
{function scrollByClickonbutton(){
    const button = document.getElementById(`sec1btn`);
    if(button){
        button.addEventListener(`click`, () => {
            window.scrollTo({
                top:1500,
                behavior:`smooth`,
            });
        });
    }
}
scrollByClickonbutton();
}
//navbar wala contact button 
{function scrollByClickoncontact(){
    const button = document.getElementById(`contactbtn`);
    if(button){
        button.addEventListener(`click`, () => {
            window.scrollTo({
                top:4500,
                behavior:`smooth`
            });
        });
    }
}
scrollByClickoncontact();
}


//navbar wala about button 
{function scrollByClickonabout(){
    const button = document.getElementById(`aboutbtn`);
    if(button){
        button.addEventListener(`click`, () => {
            window.scrollTo({
                top:4100,
                behavior:`smooth`
            });
        });
    }
}
scrollByClickonabout();
}



//search bar or btn functionality
document.getElementById("srhbtn")!.addEventListener("click", () => {
    const searchTerm: string = (document.getElementById("srhbar") as HTMLInputElement).value.toLowerCase();
    const products: HTMLCollectionOf<Element> = document.getElementById("products")!.getElementsByClassName("product");

    for (let i = 0; i < products.length; i++) {
        const productName: string = (products[i] as HTMLElement).textContent!.toLowerCase();
        if (productName.includes(searchTerm)) {
            (products[i] as HTMLElement).style.display = "block"; // Show the product
        } else {
            (products[i] as HTMLElement).style.display = "none"; // Hide the product
        }
    }
});

