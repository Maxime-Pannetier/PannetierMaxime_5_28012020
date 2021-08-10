// REQUETE HTTP 
let request = new XMLHttpRequest();
request.onreadystatechange = function () {

    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        //recupération objet API
        let response = JSON.parse(this.responseText);

        //Affichage page Index
        for (let i in response) {
            let teddyPicture = response[i].imageUrl;
            let teddyName = response[i].name;
            let teddyPrice = response[i].price / 100;
            let teddyId = response[i]._id;
            indexPage(teddyPicture, teddyName, teddyPrice, teddyId);
        }
    };

}
request.open("GET", "http://localhost:3000/api/teddies");
request.send();









