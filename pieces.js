// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
// console.log(pieces)

for (let i = 0; i < pieces.length; i++) {
    const article = pieces[i];

    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h3");
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
    const div = document.createElement("div")
    sectionFiches.appendChild(div)
    div.appendChild(imageElement);
    div.appendChild(nomElement);
    div.appendChild(prixElement);
    div.appendChild(categorieElement);
    div.appendChild(descriptionItem);
    div.appendChild(availableItem);

    sectionFiches.classList.add('flex')
}
