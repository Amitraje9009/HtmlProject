

function addProduct(title, image, price, description) {
    let productCard = document.createElement('div');
    productCard.setAttribute('class', 'card');
    productCard.setAttribute('class', 'productcard');

    let cardImg = document.createElement('img');
    cardImg.setAttribute('class', 'card-img-top');
    cardImg.src = image;

    let cardBody = document.createElement('div');
    cardBody.setAttribute('class', 'card-body');

    let cardTitle = document.createElement('h4');
    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerHTML = title;

    let cardPrice = document.createElement('div');
    cardPrice.setAttribute('class', 'card-subtitle');
    cardPrice.innerHTML = `Rs. ${price}`;

    let cardDesc = document.createElement('p');
    cardDesc.setAttribute('class', 'card-test');
    cardDesc.innerHTML = description;

    let buyBtn = document.createElement('button');
    buyBtn.setAttribute('class', 'btn');
    buyBtn.innerHTML = 'Buy Now';

    cardBody.append(cardTitle, cardPrice, cardDesc, buyBtn);
    productCard.append(cardImg, cardBody);

    return productCard;
}

// function to add cards in index.html file
(function () {
    let productsList = document.querySelector('#products-list');
    if (productsList) {

        async function fetchProducts() {
            let res = await fetch("./data.json");
            let data = await res.json();

            let i = 0;
            for (let product of data) {
                let card = addProduct(product.title, product.image, product.price, product.description);
                productsList.append(card);
                i++;
                if (i >= 3) break;
            }
        }

        fetchProducts();
    }
})();

// function to add cards in products.html file
(function () {
    let allProducts = document.querySelector('#products-all');
    if (allProducts) {
        async function fetchAllProducts() {
            let res = await fetch("./data.json");
            let data = await res.json();

            for (let product of data) {
                let card = addProduct(product.title, product.image, product.price, product.description);
                allProducts.append(card);
            }
        }

        fetchAllProducts();
    }
})();