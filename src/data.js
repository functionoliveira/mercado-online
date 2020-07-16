import hortifruti from './assets/shelf/hortifruti.jpg';
import padaria from './assets/shelf/padaria.png';
import acogue from './assets/shelf/acogue.jpeg';
import bebidasAlcoolicas from './assets/shelf/bebidas-alcoolicas.jpg';
import sucos from './assets/shelf/sucos.jpg';
import refrigerantes from './assets/shelf/refrigerantes.jpg';
import graos from './assets/shelf/graos.jpg';
import laticinios from './assets/shelf/laticinios.jpg';

const categories = [
    { 
        id: 1,
        image: hortifruti,
        name: "Hortifruti",
        color: "#009933"
    },
    { 
        id: 2,
        image: padaria,
        name: "Padaria",
        color: "#ffff99"
    },
    { 
        id: 3,
        image: acogue,
        name: "Açogue",
        color: "#990000"
    },
    { 
        id: 4,
        image: bebidasAlcoolicas,
        name: "Bebidas Alcólicas",
        color: "#0033cc"
    },
    { 
        id: 5,
        image: sucos,
        name: "Sucos",
        color: "#0033cc"
    },
    { 
        id: 6,
        image: refrigerantes,
        name: "Refrigerantes",
        color: "#0033cc"
    },
    { 
        id: 7,
        image: graos,
        name: "Grãos",
        color: "#663300"
    },
    { 
        id: 8,
        image: laticinios,
        name: "Laticínios",
        color: "#ffffcc"
    }
];

const products = [
    { cod: Math.random(0, 10000).toString().padStart(5, '0'), categoryID: 1, image: "", title: "Alface Crespa", price: "1,59", discount: "" },
    { cod: Math.random(0, 10000).toString().padStart(5, '0'), categoryID: 2, image: "", title: "Pão francês", price: "5,89", discount: "" },
    { cod: Math.random(0, 10000).toString().padStart(5, '0'), categoryID: 3, image: "", title: "Alcatra por quilo", price: "21,50", priceWithDiscount: "19,45", discount: "10%" },
    { cod: Math.random(0, 10000).toString().padStart(5, '0'), categoryID: 4, image: "", title: "Skol latão", price: "4,50", discount: "" },
    { cod: Math.random(0, 10000).toString().padStart(5, '0'), categoryID: 5, image: "", title: "Del Vale de Morango", price: "9,99", discount: "" },
    { cod: Math.random(0, 10000).toString().padStart(5, '0'), categoryID: 6, image: "", title: "Coca-cola 2 litros", price: "5,99", discount: "" },
    { cod: Math.random(0, 10000).toString().padStart(5, '0'), categoryID: 7, image: "", title: "Arroz são joão 500gr", price: "4,00", priceWithDiscount: "3,60", discount: "10%" },
    { cod: Math.random(0, 10000).toString().padStart(5, '0'), categoryID: 8, image: "", title: "Leite batavo", price: "5,10", priceWithDiscount: "4,20", discount: "15%" },
];

const categoriesWithProducts = (function() {
    return categories.map(cat => {
        return {
            ...cat,
            products: products.filter(p => p.categoryID === cat.id)
        }
    });
})();

const offers = (function() {
    return products.filter(p => p.discount.length > 0);    
})();

const getCategoryByID = function(categoryID) {
    return categories.find(cat => cat.id === categoryID);
}

export { categories, products, offers, categoriesWithProducts, getCategoryByID };