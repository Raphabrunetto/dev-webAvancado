console.log("corrida");

let car1PosX = 0;
let car2PosX = 0;
let car3PosX = 0;
let car4PosX = 0;
let car5PosX = 0;
let saldo = 100; 

let interval = null; 
let carroApostado = null;

function fazerAposta() {
    const valorAposta = parseFloat(document.getElementById("valor").value);
    carroApostado = parseInt(document.getElementById("aposta").value);
    
    if (valorAposta > saldo) {
        alert("Você não tem saldo suficiente para fazer essa aposta.");
    } else {
        
        if (interval) {
            clearInterval(interval);
        }
        
        interval = setInterval(moveCars, 50);
        
        
        saldo -= valorAposta;
        document.getElementById("saldo").innerText = saldo;
    }
}

function moveCars() {
    car1PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car1").style.transform = "translate(" + car1PosX + "px, 20px)";
    checkFinishLine(1, car1PosX);

    car2PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car2").style.transform = "translate(" + car2PosX + "px, 70px)";
    checkFinishLine(2, car2PosX);

    car3PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car3").style.transform = "translate(" + car3PosX + "px, 120px)";
    checkFinishLine(3, car3PosX);

    car4PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car4").style.transform = "translate(" + car4PosX + "px, 170px)";
    checkFinishLine(4, car4PosX);

    car5PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car5").style.transform = "translate(" + car5PosX + "px, 220px)";
    checkFinishLine(5, car5PosX);
}

function checkFinishLine(carNumber, posX) {
    const carRightEdge = posX + document.getElementById("car" + carNumber).offsetWidth;
    const finishLineRightEdge = 700;

    if (carRightEdge >= finishLineRightEdge) {
        stopCar(carNumber);
    }
}

function stopCar(carNumber) {
    clearInterval(interval);
    const valorAposta = parseFloat(document.getElementById("valor").value);
    
    if (carNumber === carroApostado) {
        saldo += valorAposta * 2;
        alert("Você ganhou! Seu saldo atual é: " + saldo);
    } else {
        if (saldo <= 0) {
            alert("Você perdeu toda a sua aposta! Fim de jogo.");
        } else {
            alert("Você perdeu! Seu saldo atual é: " + saldo);
        }
    }
    document.getElementById("saldo").innerText = saldo;
    
    document.getElementById("car" + carNumber).style.backgroundColor = "green";
}

function stopMovement() {
    clearInterval(interval);
}

function reiniciarCorrida() {
    clearInterval(interval);
    car1PosX = 0;
    car2PosX = 0;
    car3PosX = 0;
    car4PosX = 0;
    car5PosX = 0;
    carroApostado = null;
    
    document.getElementById("car1").style.transform = "translate(0px, 20px)";
    document.getElementById("car1").style.backgroundColor = "blue";
    document.getElementById("car2").style.transform = "translate(0px, 70px)";
    document.getElementById("car2").style.backgroundColor = "red";
    document.getElementById("car3").style.transform = "translate(0px, 120px)";
    document.getElementById("car3").style.backgroundColor = "black";
    document.getElementById("car4").style.transform = "translate(0px, 170px)";
    document.getElementById("car4").style.backgroundColor = "purple";
    document.getElementById("car5").style.transform = "translate(0px, 220px)";
    document.getElementById("car5").style.backgroundColor = "pink";
}
