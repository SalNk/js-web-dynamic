// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
console.log(pieces)


const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;
const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie && "(aucune catégorie)";

const descriptionItem = document.createElement("p");
descriptionItem.innerText = article.description && "(Pas de description pour le moment.)"

const availableItem = document.createElement("p");
availableItem.innerText = article.disponibilite === "oui" ? "En stock" : "Rupture de stock"


const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionItem);        
sectionFiches.appendChild(availableItem);      

    