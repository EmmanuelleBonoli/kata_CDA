/*
 * Pour faciliter la gestion de ces produits, nous allons créer deux fonctions utiles :
 * une pour trier les produits par note et une pour filtrer les produits par catégorie.
 * */

const products = [
  {
    id: 1,
    name: "Smartphone XY",
    category: "Électronique",
    price: 799.99,
    rating: 4.6,
  },
  {
    id: 2,
    name: "Basketball Pro Ball",
    category: "Sport",
    price: 29.99,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Casque Audio Sans Fil",
    category: "Électronique",
    price: 199.99,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Série de Romans Fantasy",
    category: "Livres",
    price: 59.99,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Montre Connectée",
    category: "Électronique",
    price: 249.99,
    rating: 4.4,
  },
];

function filterCategory(categorySelected) {
  return products.filter(
    (product) =>
      product.category.toLowerCase() === categorySelected.toLowerCase()
  );
}

function sortProducts(sortBy) {
  if (sortBy === ">") {
    return products.sort((a, b) => a.rating - b.rating);
  } else {
    return products.sort((a, b) => b.rating - a.rating);
  }
}

console.log(filterCategory("électronique"));
console.log(sortProducts("<"));
