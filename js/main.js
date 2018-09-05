Cle_admin = false;

var type_boisson= {
    Cafe_Expresso: '0.70',
    Cafe_Long: '0,70',
    Chocolat_chaud: '0.70',
    The_Vert: '0,60',
    Cappuccino: '0,70',
    Lait: '0.50',
        stock:{
        Cafe: 10,
        Chocolat: 10,
        The: 10,
        Lait: 10,
        Cappuccino: 10,
        Sucre: 50,
        Gobelet: 50,
        Touillette: 50
    }

};

// Sur l'interface maintenance, l'action des différents bouttons permette le control des stocks
// Par défaut ils devront afficher le nb de gobelets et de touillettes
// Interface utilisateur, au clic nous appliquons une réduction du nombre de stock, ne doit fonctioné que si raccordé à l'eau
// Création d'un délai pour chauffer l'eau au moment du trigger

function Cle_Admin(){
    if(Cle_Admin === false){
        Cle_Admin = !Cle_Admin
    }else{
        Cle_Admin = false
    }
}

if (raccorde_eau = false){
    console.log("Non raccordé à l'eau, contacter un techicien");
}else{

    if (Cle_Admin = true) {
    // Crée une classe pour les btns
    var btn=getElementById("Button_1", "Button_2");
        btn.addEventListener("click", displayStockCafe);

    function displayStockCafe(){
        console.log(type_boisson.stock.Cafe);
}

    var btn=getElementById("Button_3");
        btn.addEventListener("click", displayStockChocolatchaud );

    function displayStockChocolatchaud(){
        console.log(type_boisson.stock.Chocolat);
}

    var btn=getElementById("Button_4");
        btn.addEventListener("click", displayStockTheVert );

    function displayStockTheVert(){
        console.log(type_boisson.stock.The);
}

    var btn=getElementById("Button_5");
        btn.addEventListener("click", displayStockCappuccino );

    function displayStockCappuccino(){
        console.log(type_boisson.stock.Cappuccino);
}

    var btn=getElementById("Button_6");
        btn.addEventListener("click", displayStockLait );

    function displayStockLait(){
        console.log(type_boisson.stock.Lait);
}

    var btn=getElementById("Button_7", "Button_8");
        btn.addEventListener("click", displayStockSucre);

    function displayStockSucre(){
        console.log(type_boisson.stock.Sucre);
}
//Cle_admin = true
} else {
    
}
}





// Partie 2 Js



var Choix = {
    // Initialise le Choix
    initChoix: function (nom, qte) {
        this.nom = nom;
        this.qte = qte;
    },
    // fonction selectionné
    selectionner: function () {
        if (this.sante > 0) {
            this.qte = this.qte - 1;
        } else {
            console.log("il n'y a plus de " + this.nom + ". Nous vous invitons à choisir un autre parfum.");
        }
    }
};


// Envoie une phrase d'intro du parfum choisi
Choix.etat = function () {
    var description = "Vous avez choisi " + this.nom + ". et vous allez vous régaler !";
    return description;
};

// function $
function $(selector) {
    return document.querySelector(selector);
}


var Espresso = Object.create(Choix);
Espresso.initChoix("Espresso", 10);

var ChocolatChaud = Object.create(Choix);
ChocolatChaud.initChoix("Chocolat Chaud", 10);

var TheVert = Object.create(Choix);
TheVert.initChoix("Thé Vert", 10);

var Cappuccino = Object.create(Choix);
Cappuccino.initChoix("Cappuccino", 10);

var Lait = Object.create(Choix);
Lait.initChoix("Lait", 10);

var Gobelet = Object.create(Choix);
Gobelet.initChoix("Gobelet", 100);

function useGobelet() {
    Gobelet.qte = Gobelet.qte - 1;
}

$('.button1').onclick = function() {
    var Cafe = Object.create(Choix);
    Cafe.initChoix("Café", 10);
    Cafe.etat();
    Cafe.selectionner();
    useGobelet();
}

// ...
