let heroi = {
    nome: "Rafaella",
    xp: 3505
};

// Não há necessidade de um loop se houver apenas um herói
let nomeHeroi = heroi.nome;
let xpHeroi = heroi.xp;
let nivel = "";

if (xpHeroi >= 1000 && xpHeroi <= 2000) {
    nivel = "ferro";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
    nivel = "ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "imortal";
} else {
    nivel = "radiante";
}

console.log("O herói de nome " + nomeHeroi + " está no nível " + nivel);
