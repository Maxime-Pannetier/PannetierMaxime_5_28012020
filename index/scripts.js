// REQUETE HTTP 
fetch("http://localhost:3000/api/teddies/")
        .then(response => response.json())
        .then(response => {

                for (let i in response) {
                    let teddyPicture = response[i].imageUrl;
                    let teddyName = response[i].name;
                    let teddyPrice = response[i].price / 100;
                    let teddyId = response[i]._id;
                    indexPage(teddyPicture, teddyName, teddyPrice, teddyId);
                }
        })
        .catch(error => alert("Erreur : " + error));








