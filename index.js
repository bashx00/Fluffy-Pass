const crypto = require('crypto'); // Importation du module crypto pour générer des nombres aléatoires sécurisés

function generatePassword(length) {
    // Définition des ensembles de caractères possibles
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    // Concaténation de tous les ensembles de caractères
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = ''; // Initialisation du mot de passe généré

    // Assure que le mot de passe inclut au moins un caractère de chaque ensemble de caractères
    password += uppercaseChars[crypto.randomInt(0, uppercaseChars.length)];
    password += lowercaseChars[crypto.randomInt(0, lowercaseChars.length)];
    password += numberChars[crypto.randomInt(0, numberChars.length)];
    password += specialChars[crypto.randomInt(0, specialChars.length)];

    // Remplit le reste de la longueur du mot de passe avec des caractères aléatoires
    for (let i = password.length; i < length; i++) {
        password += allChars[crypto.randomInt(0, allChars.length)];
    }

    // Mélange le mot de passe pour éviter les modèles prévisibles
    password = password.split('').sort(() => crypto.randomInt(0, 2) - 1).join('');

    return password; // Retourne le mot de passe généré
}

// Exemple d'utilisation
const passwordLength = 26; // Longueur du mot de passe souhaitée
const newPassword = generatePassword(passwordLength); // Génère un nouveau mot de passe
console.log("Generated password:", newPassword); // Affiche le mot de passe généré
