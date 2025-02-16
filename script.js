// Fonction d'ouverture de la lettre
function ouvrirLettre() {
    let envelope = document.querySelector(".envelope");
    let lettre = document.getElementById("lettre");

    envelope.style.display = "none"; // Cache l’enveloppe
    lettre.classList.remove("cachee");
    lettre.style.display = "block"; // Affiche la lettre
}

// Fonction de fermeture de la lettre
function fermerLettre() {
    let lettre = document.getElementById("lettre");
    lettre.style.display = "none"; // Cache la lettre
    document.querySelector(".envelope").style.display = "block"; // Affiche l'enveloppe
}

// Fonction pour rejouer l'animation
function rejouerAnimation() {
    let lettre = document.getElementById("lettre");
    let envelope = document.querySelector(".envelope");

    lettre.style.display = "none"; // Cache la lettre
    envelope.style.display = "block"; // Affiche l'enveloppe
}
