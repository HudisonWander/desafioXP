let heroi = "Cliodna"
let xp = 8935

let nivel;
if (xp < 1000) {
    nivel = "Ferro"
}
else if (xp >=1000 && xp <=2000) {
    nivel = "Prata"
}
else if (xp >= 2001 && xp <= 3000) {
    nivel = "Ouro"
} 
else if (xp >= 3001 && xp <=4000) {
    nivel = "Platina"
}
else if (xp >= 4001 && xp <= 5000) {
    nivel = "Esmeralda"
}
else if (xp >= 5001 && xp <= 6000) {
    nivel = "Diamante"
}
else if (xp >= 6001 && xp <= 7000) {
    nivel = "Mestre"
}
else {
    nivel = "Desafiante"
}

console.log ("O Invocador " + heroi, "está no elo: " + nivel, "!")