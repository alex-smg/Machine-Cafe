Cle_admin = false;

var type_boisson = {
    Cafe_Expresso: '0.70',
    Cafe_Long: '0,70',
    Chocolat_chaud: '0.70',
    The_Vert: '0,60',
    Cappuccino: '0,70',
    Lait: '0.50'
};
var stock = {
    Cafe: 20,
    Chocolat: 10,
    The: 10,
    Lait: 10,
    Cappuccino: 10,
    Sucre: 50,
    Gobelet: 50,
    Touillette: 50
};

var water = true;
var cafe = stock.Cafe;
var Chocolat = stock.Chocolat;
var The = stock.The;
var Lait = stock.Lait;
var Cappuccino = stock.Cappuccino;
var Sucre = stock.Sucre;
var Gobelet = stock.Gobelet;
var Touillette = stock.Touillette;


function expresso(Cafe) {
    if (water === false) {
        alert("Il n'y a plus d'eau !")
    }
    if (cafe === 0) {
        alert("Il n'y a plus de café !")
    } else {
        stock.Cafe = stock.Cafe - 1;
        stock.Gobelet = stock.Gobelet - 1;
        stock.Touillette = stock.Touillette - 1;
        document.getElementById('bar-inside').animate([
            // keyframes
            { width: '0px' },
            { width: '250px' }
        ], {
            // timing options
            duration: 3000,
            iterations: 1
        });
        setTimeout(function(){document.getElementById('expresso').style.display = "block";}, 3000);
        player = document.getElementById('player_audio');
        player2 = document.getElementById('player_audio_2');
        player.play();
        setTimeout(function(){document.getElementById('player_audio').pause();}, 3000);
        setTimeout(function(){document.getElementById('player_audio').load()();}, 3100);
        setTimeout(function(){document.getElementById('player_audio_2').play();}, 3000);
        setTimeout(function(){document.getElementById('player_audio_2').load()();}, 3600);
        setTimeout(function(){document.getElementById('player_audio_2').pause();}, 3500);
        document.getElementById('chocolat').style.display = "none";
        document.getElementById('the').style.display = "none";
        document.getElementById('lait').style.display = "none";
        document.getElementById('long').style.display = "none";
        document.getElementById('cappuccino').style.display = "none";
    }
    console.log(stock.Cafe);
    console.log(stock.Gobelet);

}

function chocolat() {
    if (water === false) {
        alert("Il n'y a plus d'eau !")
    }
    if (cafe === 0) {
        alert("Il n'y a plus de chocolat !")
    } else {

        stock.Chocolat = stock.Chocolat - 1;
        stock.Gobelet = stock.Gobelet - 1;
        stock.Touillette = stock.Touillette - 1;
        document.getElementById('bar-inside').animate([
            // keyframes
            { width: '0px' },
            { width: '250px' }
        ], {
            // timing options
            duration: 3000,
            iterations: 1
        });

        document.getElementById('expresso').style.display = "none";
        player = document.getElementById('player_audio');
        player2 = document.getElementById('player_audio_2');
        player.play();
        setTimeout(function(){document.getElementById('player_audio').pause();}, 3000);
        setTimeout(function(){document.getElementById('player_audio').load()();}, 3100);
        setTimeout(function(){document.getElementById('player_audio_2').play();}, 3000);
        setTimeout(function(){document.getElementById('player_audio_2').load()();}, 3600);
        setTimeout(function(){document.getElementById('player_audio_2').pause();}, 3500);
        setTimeout(function(){document.getElementById('player_audio').stop();}, 3000)
        setTimeout(function(){document.getElementById('chocolat').style.display = "block";}, 3000);
        document.getElementById('the').style.display = "none";
        document.getElementById('lait').style.display = "none";
        document.getElementById('long').style.display = "none";
        document.getElementById('cappuccino').style.display = "none";

    }
    console.log(stock.Chocolat);
    console.log(stock.Gobelet);

}

function the() {
    if (water === false) {
        alert("Il n'y a plus d'eau !")
    }
    if (cafe === 0) {
        alert("Il n'y a plus de thé !")
    } else {

        stock.the = stock.the - 1;
        stock.Gobelet = stock.Gobelet - 1;
        stock.Touillette = stock.Touillette - 1;
        document.getElementById('bar-inside').animate([
            // keyframes
            { width: '0px' },
            { width: '250px' }
        ], {
            // timing options
            duration: 3000,
            iterations: 1
        });
        document.getElementById('expresso').style.display = "none";
        player = document.getElementById('player_audio');
        player2 = document.getElementById('player_audio_2');
        player.play();
        setTimeout(function(){document.getElementById('player_audio').pause();}, 3000);
        setTimeout(function(){document.getElementById('player_audio').load()();}, 3100);
        setTimeout(function(){document.getElementById('player_audio_2').play();}, 3000);
        setTimeout(function(){document.getElementById('player_audio_2').load()();}, 3600);
        setTimeout(function(){document.getElementById('player_audio_2').pause();}, 3500);
        setTimeout(function(){document.getElementById('player_audio').stop();}, 3000)
        document.getElementById('chocolat').style.display = "none";
        setTimeout(function(){document.getElementById('the').style.display = "block";}, 3000);
        document.getElementById('lait').style.display = "none";
        document.getElementById('long').style.display = "none";
        document.getElementById('cappuccino').style.display = "none";
    }
    console.log(stock.Cafe);
    console.log(stock.Gobelet);

}
function lait() {
    if (water === false) {
        alert("Il n'y a plus d'eau !")
    }
    if (cafe === 0) {
        alert("Il n'y a plus de lait !")
    } else {

        stock.Lait = stock.Lait - 1;
        stock.Gobelet = stock.Gobelet - 1;
        stock.Touillette = stock.Touillette - 1;
        document.getElementById('bar-inside').animate([
            // keyframes
            { width: '0px' },
            { width: '250px' }
        ], {
            // timing options
            duration: 3000,
            iterations: 1
        });
        document.getElementById('expresso').style.display = "none";
        player = document.getElementById('player_audio');
        player2 = document.getElementById('player_audio_2');
        player.play();
        setTimeout(function(){document.getElementById('player_audio').pause();}, 3000);
        setTimeout(function(){document.getElementById('player_audio').load()();}, 3100);
        setTimeout(function(){document.getElementById('player_audio_2').play();}, 3000);
        setTimeout(function(){document.getElementById('player_audio_2').load()();}, 3600);
        setTimeout(function(){document.getElementById('player_audio_2').pause();}, 3500);
        setTimeout(function(){document.getElementById('player_audio').stop();}, 3000)
        document.getElementById('chocolat').style.display = "none";
        document.getElementById('the').style.display = "none";
        setTimeout(function(){document.getElementById('lait').style.display = "block";}, 3000);
        document.getElementById('long').style.display = "none";
        document.getElementById('cappuccino').style.display = "none";
    }
    console.log(stock.lait);
    console.log(stock.Gobelet);

}
function long() {
    if (water === false) {
        alert("Il n'y a plus d'eau !")
    }
    if (cafe === 0) {
        alert("Il n'y a plus de café long !")
    } else {

        stock.Cafe = stock.Cafe - 1;
        stock.Gobelet = stock.Gobelet - 1;
        stock.Touillette = stock.Touillette - 1;
        document.getElementById('bar-inside').animate([
            // keyframes
            { width: '0px' },
            { width: '250px' }
        ], {
            // timing options
            duration: 3000,
            iterations: 1
        });
        document.getElementById('expresso').style.display = "none";
        player = document.getElementById('player_audio');
        player2 = document.getElementById('player_audio_2');
        player.play();
        setTimeout(function(){document.getElementById('player_audio').pause();}, 3000);
        setTimeout(function(){document.getElementById('player_audio').load()();}, 3100);
        setTimeout(function(){document.getElementById('player_audio_2').play();}, 3000);
        setTimeout(function(){document.getElementById('player_audio_2').load()();}, 3600);
        setTimeout(function(){document.getElementById('player_audio_2').pause();}, 3500);
        setTimeout(function(){document.getElementById('player_audio').stop();}, 3000)
        document.getElementById('chocolat').style.display = "none";
        document.getElementById('the').style.display = "none";
        document.getElementById('lait').style.display = "none";
        setTimeout(function(){document.getElementById('long').style.display = "block";}, 3000);
        document.getElementById('cappuccino').style.display = "none";
    }
    console.log(stock.Cafe);
    console.log(stock.Gobelet);

}
function cappuccino() {
    if (water === false) {
        alert("Il n'y a plus d'eau !")
    }
    if (Cappuccino === 0) {
        alert("Il n'y a plus de café long !")
    } else {

        stock.Cappuccino = stock.Cappuccino - 1;
        stock.Gobelet = stock.Gobelet - 1;
        stock.Touillette = stock.Touillette - 1;
        document.getElementById('bar-inside').animate([
            // keyframes
            { width: '0px' },
            { width: '250px' }
        ], {
            // timing options
            duration: 3000,
            iterations: 1
        });
        document.getElementById('expresso').style.display = "none";
        player = document.getElementById('player_audio');
        player2 = document.getElementById('player_audio_2');
        player.play();
        setTimeout(function(){document.getElementById('player_audio').pause();}, 3000);
        setTimeout(function(){document.getElementById('player_audio').load()();}, 3100);
        setTimeout(function(){document.getElementById('player_audio_2').play();}, 3000);
        setTimeout(function(){document.getElementById('player_audio_2').load()();}, 3600);
        setTimeout(function(){document.getElementById('player_audio_2').pause();}, 3500);
        setTimeout(function(){document.getElementById('player_audio').stop();}, 3000)
        document.getElementById('chocolat').style.display = "none";
        document.getElementById('the').style.display = "none";
        document.getElementById('lait').style.display = "none";
        document.getElementById('long').style.display = "none";
        setTimeout(function(){document.getElementById('cappuccino').style.display = "block";}, 3000);
    }
    console.log(stock.Cappuccino);
    console.log(stock.Gobelet);

}

