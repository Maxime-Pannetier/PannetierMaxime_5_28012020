
//VARIABLE DONNEES URL SELON PRODUIT
let urlPage = window.location.href;
let url = new URL(urlPage);
let search_params = new URLSearchParams(url.search);

// REQUETE HTTP 

fetch("http://localhost:3000/api/teddies/" + search_params.get("product_id"))
        .then(response => response.json())
        .then(response => { 
            //affichage page singleproduct
            let teddyPicture = response.imageUrl;
            let teddyName = response.name;
            let teddyPrice = response.price / 100;
            let teddyDescription = response.description;
            let teddyColors = response.colors;
            let teddyId = response._id;
            singleProductPage(teddyPicture, teddyName, teddyPrice, teddyDescription, teddyColors, teddyId);
            
            // infos article choisi
            let colorAvailable = document.getElementsByName("color");
            let quantityWanted = document.getElementById("quantityChoice");
            let priceArticle = document.getElementById("teddyName");
            let nameArticle = document.getElementById("teddyName");
    
            let quantityForm = document.getElementById("quantityChoice");
            quantityForm.addEventListener('change', function (e) {
                 let value = parseInt(quantityForm.value);
                 if(isNaN(value) || value<=0){
                     quantityForm.value=1;
                 }
            });
    
            //clic ajouter au panier
            let buyButtonClick = document.getElementById("buyButton");
            buyButtonClick.addEventListener('click', function (e) {
                e.preventDefault();
                //creation clé article
                let keyArticle = getNameArticle(nameArticle) + getColorSelected(colorAvailable);
                //quantité de départ
                let previousQuantity = 0;
                //nombre article présent dans le local storage
                let articleStorage = localStorage.getItem(keyArticle);
                if(articleStorage){
                    let previousArticle = JSON.parse(articleStorage);
                    previousQuantity = previousArticle.quantity;
                }
                //creation objet de l'article choisi
                let currentInfoArticle = new infoArticle(
                    getNameArticle(nameArticle),
                    getPriceArticle(priceArticle),
                    getQuantity(quantityWanted)+previousQuantity,
                    getColorSelected(colorAvailable),
                    teddyId
                    );
    
                // ajout de l'article choisi dans le local storage
                window.localStorage.setItem(keyArticle, JSON.stringify(currentInfoArticle));
            });




        })
        .catch(error => alert("Erreur : " + error));
