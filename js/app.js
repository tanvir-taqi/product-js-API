


const loadProducts = async ()=>{
    const url = `https://fakestoreapi.com/products`;
    const res = await fetch (url)
    const data =await res.json()
    displayProducts(data);
}

const displayProducts = (data)=>{

    const productContainer = document.getElementById("product-container")
    productContainer.innerHTML = ''
    data.forEach(product => {
        const column = document.createElement("div")
        column.classList.add('col')
        column.innerHTML = `<div class="card h-100" onclick="loadDescription(${product.id})" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <img src="${product.image}" class="card-img-top product-image">
        <div class="card-body">
            <h3 class="card-title">${product.title}</h3>
            <small>${product.category}</small>

            <h5 class="card-title">${product.price}$</h5>
            <small>rating: ${product.rating.rate}/5</small>

        </div>
    </div>`

    productContainer.appendChild(column)
        
    });

}





const loadDescription = async(id)=>{
  
    const url = `https://fakestoreapi.com/products/${id}`
    const res = await fetch(url);
    const data = await res.json();
    displayDescription(data)
}



const displayDescription = (data)=>{
    console.log(data);
    const descriptionContainer = document.getElementById('description-container')
    descriptionContainer.innerHTML = `
    <div>
        <img src="${data.image}" class="modal-image" alt="">
        <h3>${data.title}</h3>
        <h6>Available: ${data.rating.count}</h6>

        <p>${data.description}</p>
    </div>`
    
}


const categories =  document.getElementsByClassName("category-search")
for(const category of categories){
     
    category.addEventListener('click', (e)=>{
        const categoryValue=  e.target.value.toLowerCase()
        loadByCategory(categoryValue)
    })
}

const loadByCategory = async(category)=>{
    const url = `https://fakestoreapi.com/products/category/${category}`
    const res = await fetch(url)
    const data = await res.json()
    displayProducts(data);
}




loadProducts()