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