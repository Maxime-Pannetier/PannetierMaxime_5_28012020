//INDEX PAGE
function indexPage(picture, name, price, _id) {

    const mainDiv = document.getElementById("main");


    let newLink = document.createElement("a");
    newLink.setAttribute("id", _id);
    newLink.setAttribute("href", "singleproduct.html" + "?product_id=" + _id);
    mainDiv.appendChild(newLink);

    let newFigure = document.createElement("figure");
    newFigure.classList.add("articles");
    newLink.appendChild(newFigure);

    let newImg = document.createElement("img");
    newImg.setAttribute("src", picture);
    newImg.setAttribute("alt", name);
    newFigure.appendChild(newImg);

    let newFigcaption = document.createElement("figcaption");
    newFigure.appendChild(newFigcaption);

    let nameFigcaption = document.createElement("p");
    nameFigcaption.classList.add("teddyNames");
    nameFigcaption.textContent = name;
    newFigcaption.appendChild(nameFigcaption);

    let priceFigcaption = document.createElement("p");
    priceFigcaption.classList.add("teddyPrices");
    priceFigcaption.textContent = price + " €";
    newFigcaption.appendChild(priceFigcaption);

}

//SINGLE PRODUCT PAGE
function singleProductPage(picture, name, price, description, colors, _id) {

    const mainDiv = document.getElementById("main");

    let newDiv = document.createElement("div");
    newDiv.setAttribute("id", "mainDiv");
    mainDiv.appendChild(newDiv);

    let newImg = document.createElement("img");
    newImg.setAttribute("src", picture);
    newImg.setAttribute("alt", name);
    newDiv.appendChild(newImg);

    let newName = document.createElement("p");
    newName.setAttribute("id", "teddyName");
    newName.textContent = name;
    newDiv.appendChild(newName);

    let newPrice = document.createElement("p");
    newPrice.setAttribute("id", "teddyPrice");
    newPrice.textContent = price + " €";
    newDiv.appendChild(newPrice);

    let newDescription = document.createElement("p");
    newDescription.setAttribute("id", "teddyDescription");
    newDescription.textContent = description;
    newDiv.appendChild(newDescription);

    // FORM COLOR AVAILABLE
    let colorsButtonForm = document.createElement("form");
    colorsButtonForm.setAttribute("name", "colorChoice");
    colorsButtonForm.setAttribute("method", "post");
    

    newDiv.appendChild(colorsButtonForm);

    let colorChoice = document.createElement("p");
    colorChoice.setAttribute("id", "colorChoice");
    colorChoice.textContent = "Couleur(s) disponible(s) : ";
    colorsButtonForm.appendChild(colorChoice);
    let colorAvailable = colors;

    for (let i in colorAvailable) {

        let color = colorAvailable[i];

        let colorChoiceButton = document.createElement("div");
        colorChoice.appendChild(colorChoiceButton);

        let colorInput = document.createElement("input");

        colorInput.setAttribute("type", "radio");
        colorInput.setAttribute("name", "color");
        colorInput.setAttribute("value", color);
        colorInput.setAttribute("id", color);
        colorInput.classList.add("colorsAvailable");
        colorChoiceButton.appendChild(colorInput);

        let colorLabel = document.createElement("label");
        colorLabel.setAttribute("for", color);
        colorLabel.textContent = color;
        colorChoiceButton.appendChild(colorLabel);  
    }

    let colorRadios = document.getElementsByClassName("colorsAvailable");
    colorRadios[0].setAttribute("checked","");

    // QUANTITY BUTTON
    let quantityButtonForm = document.createElement("div");

    newDiv.appendChild(quantityButtonForm);

    let quantityInput = document.createElement("input");
    quantityInput.setAttribute("id", "quantityChoice");
    quantityInput.setAttribute("type", "number");
    quantityInput.setAttribute("value", "1");
    quantityInput.setAttribute("min", "1");
    quantityButtonForm.appendChild(quantityInput);

    let quantityLabel = document.createElement("label");
    quantityLabel.textContent = "quantité";
    quantityButtonForm.appendChild(quantityLabel);

    //BUY BUTTON
    let buyButton = document.createElement("button");
    buyButton.setAttribute("type", "button");
    buyButton.setAttribute("id", "buyButton");
    buyButton.textContent = "Ajouter au panier";
    newDiv.appendChild(buyButton);

}

//CART PAGE
function addArticleCartPage(name, color, price, quantity) {

    const mainDiv = document.getElementById("cartList");

    let articleList = document.createElement("div");
    articleList.classList.add("articleList");
    mainDiv.appendChild(articleList);

    let nameArticle = document.createElement("p");
    nameArticle.classList.add("nameArticle");
    nameArticle.textContent = name;
    articleList.appendChild(nameArticle);

    let colorArticle = document.createElement("p");
    colorArticle.classList.add("colorArticle");
    colorArticle.textContent = color;
    articleList.appendChild(colorArticle);

    let priceArticle = document.createElement("p");
    priceArticle.classList.add("priceArticle");
    priceArticle.textContent = price;
    articleList.appendChild(priceArticle);

    let quantityArticle = document.createElement("p");
    quantityArticle.classList.add("quantityArticle");
    quantityArticle.textContent = quantity;
    articleList.appendChild(quantityArticle);

    let finalPriceArticle = document.createElement("p");
    let priceNumber = parseInt(price);
    finalPriceArticle.classList.add("finalPriceArticle");
    finalPriceArticle.textContent = (priceNumber * quantity) + " €";
    articleList.appendChild(finalPriceArticle);

    
    
}

//COLOR CHOICE
function getColorSelected(colorRadio) {

    let colorChoice = null;

    colorRadio.forEach(function (color) {
        if (color.checked) {
            colorChoice = color.value;
        };
    })
    return colorChoice;
}

//QUANTITY WANTED
function getQuantity() {

    let quantityAsked = document.getElementById("quantityChoice").value;
    {
        if (quantityAsked != null) {
            quantityAsked = document.getElementById("quantityChoice").valueAsNumber;
        };
    }
    return quantityAsked;
}

//INFORMATION ARTICLE
function getPriceArticle() {
    let priceArticle = document.getElementById("teddyPrice").textContent;
    return priceArticle;
}

function getNameArticle() {
    let nameArticle = document.getElementById("teddyName").textContent;
    return nameArticle;
}

class infoArticle {
    constructor(name, price, quantity, color, teddyId) {
        this.name = name;
        this.price = price;
        this.quantity = quantity,
        this.color = color;
        this._id = teddyId
    }
}

// CLEAR THE CART
let clearCartButton = document.getElementById("clearCart");
if (clearCartButton){
    clearCartButton.addEventListener('click', function(){
        window.localStorage.clear();
        window.location.reload();
});
}

// CONFIRM ORDER
// info acheteur du formulaire
function getBuyerInfo(){
    let buyerInfo = {
        "lastName":document.getElementById("lastName").value,
        "firstName":document.getElementById("firstName").value,
        "address":document.getElementById("address").value,
        "city":document.getElementById("city").value,
        "email":document.getElementById("email").value,
        };
    return buyerInfo;
}

// MESSAGE CONFIRM ORDER
function confirmOrderMessage(prenom, orderid, totalPrice){
    let confirmOrderMessage =`<p class="confirmText"> merci ${prenom} pour ta commande, ton numéro est le ${orderid}, le prix total est de ${totalPrice}€" </p>`;
    document.getElementById("main").innerHTML=confirmOrderMessage;
    document.getElementById("buttonCart").innerHTML="";
    localStorage.clear();
}

// clic "confirmer commande"

let orderForm = document.getElementById("form");
if (orderForm){
    orderForm.addEventListener('submit', function(e){
    e.preventDefault();

        // article objet dans le local storage
        let productsCart =[];
        
        //recherche des articles dans le LS puis ajout dans la variable productsCart
        for (let nombreArticleLS = 0; nombreArticleLS < localStorage.length; nombreArticleLS++){
                let localStorageItems = JSON.parse(localStorage.getItem(localStorage.key(nombreArticleLS)));
                productsCart.push(localStorageItems._id);
            }
        
        if(productsCart.length==0){
            alert("votre panier est vide");
            return
        }
        
        //post infos acheteur + liste article pour retour de l'order ID
        const option = {
            method:"POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            // creation objet avec contact + products
            body:JSON.stringify({contact:getBuyerInfo(),
                                products:productsCart})
        }

        // requete fetch pour obtention orderID
        fetch("http://localhost:3000/api/teddies/order",option)
        .then(response => response.json())
        .then(response => {confirmOrderMessage(response.contact.lastName, response.orderId, totalPrice)})
        .catch(error => alert("Erreur : " + error));
    });
}

