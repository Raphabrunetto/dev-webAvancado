console.log("corrida");

let car1PosX = 0;
let car2PosX = 0;
let car3PosX = 0;
let car4PosX = 0;
let car5PosX = 0;
let saldo = 100; // Saldo inicial do jogador

let interval = null; // Inicialmente, não há intervalo em execução

function fazerAposta() {
    const valorAposta = parseFloat(document.getElementById("valor").value);
    if (valorAposta > saldo) {
        alert("Você não tem saldo suficiente para fazer essa aposta.");
    } else {
        // Se houver uma corrida em andamento, pare-a primeiro
        if (interval) {
            clearInterval(interval);
        }
        // Comece a corrida apenas após a aposta
        interval = setInterval(moveCars, 50);
        
        // Atualize o saldo exibido na página
        saldo -= valorAposta;
        document.getElementById("saldo").innerText = saldo;
    }
}

function moveCars() {
    car1PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car1").style.transform = "translate(" + car1PosX + "px, 20px)";
    checkFinishLine(document.getElementById("car1"), car1PosX);

    car2PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car2").style.transform = "translate(" + car2PosX + "px, 70px)";
    checkFinishLine(document.getElementById("car2"), car2PosX);

    car3PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car3").style.transform = "translate(" + car3PosX + "px, 120px)";
    checkFinishLine(document.getElementById("car3"), car3PosX);

    car4PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car4").style.transform = "translate(" + car4PosX + "px, 170px)";
    checkFinishLine(document.getElementById("car4"), car4PosX);

    car5PosX += Math.ceil(Math.random() * 5);
    document.getElementById("car5").style.transform = "translate(" + car5PosX + "px, 220px)";
    checkFinishLine(document.getElementById("car5"), car5PosX);
}

function checkFinishLine(car, posX) {
    const carRightEdge = posX + car.offsetWidth;
    const finishLineRightEdge = 700;

    if (carRightEdge >= finishLineRightEdge) {
        stopCar(car);
    }
}

function stopCar(car) {
    clearInterval(interval);
    const valorAposta = parseFloat(document.getElementById("valor").value);
    saldo += valorAposta * 2;
    document.getElementById("saldo").innerText = saldo;
    if (saldo <= 0) {
        alert("Você perdeu toda a sua aposta! Fim de jogo.");
    } else {
        alert("Você ganhou! Seu saldo atual é: " + saldo);
    }
    car.style.backgroundColor = "green";
}

function stopMovement() {
    clearInterval(interval);
}