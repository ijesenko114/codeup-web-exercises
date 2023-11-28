(()=> {
fetch('./data/inventory.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        const insertProducts = document.getElementById('insertProducts');
        data.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('col-md-4', 'mb-4');
            const imgSrc = `./img/${product.title.toLowerCase()}.jpg`;
            card.innerHTML = `
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">Quantity: ${product.quantity}</p>
                                <p class="card-text">Price: $${product.price}</p>
                                <p class="card-text">Categories: ${product.categories.join(', ')}</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <img src="${imgSrc}" class="img-fluid" alt="${product.title}">
                        </div>
                    </div>
                </div>
            `;
            insertProducts.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

})();
