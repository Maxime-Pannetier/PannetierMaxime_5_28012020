//PRIX TOTAL DE DEPART
let totalPrice = 0;

//POUR CHAQUE ARTICLE DU LOCAL STORAGE
for (let nombreArticleLS = 0; nombreArticleLS < localStorage.length; nombreArticleLS++) {
    
    //RECHERCHE ARTICLES DANS LE LOCAL STORAGE
    let localStorageItems = JSON.parse(localStorage.getItem(localStorage.key(nombreArticleLS)));

    //AJOUT ARTICLE DU LOCAL STORAGE SUR LA PAGE PANIER
    addArticleCartPage(localStorageItems.name,
    localStorageItems.color,
    localStorageItems.price,
    localStorageItems.quantity);
    
    // CALCUL PRIX TOTAL DU PANIER
    totalPrice += parseInt(localStorageItems.price) * localStorageItems.quantity;
}

// AFFICHAGE PRIX TOTAL
document.getElementById("totalPriceAmount").textContent = totalPrice + " €";
