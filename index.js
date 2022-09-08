const productsSection = document.querySelector(".products-section");
const buyButton = document.querySelector(".buyButton");

let likedProducts= []
function likeIt(productId){
if(!likedProducts.includes(productId)){
document.getElementById(`like${productId}`).style.color ="red"
likedProducts.push(productId)
}else{
    document.getElementById(`like${productId}`).style.color ="black"
    likedProducts.splice(likedProducts.indexOf(productId),1)

}
}
function mouseenter(id){
    console.log("mouse has entered  product " + id)

}
function mouseleave(id){
    console.log("mouse has left product" + id)
}
async function displayProducts() {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    json = await response.json();
    return json;
  };

  fetchProducts().then((products) => {
    products.forEach((product) => {
      productsSection.innerHTML += `
    <div class="product-card" onmouseenter="mouseenter(${product.id})" onmouseleave="mouseleave(${product.id})">
      <h5>${product.title}</h5>
      <img
        class="product-image"
        src=${product.image}
      />
      <h4>$${product.price}</h4>
      <i class="fa fa-heart" id='like${product.id}' onclick="likeIt(${product.id})" " ></i>
      <button type="buyButton">Add to cart</button>
    </div>
`;
    });
    buyButton.addEventListener("click", alertUser)

  function alertUser(){
    alert ("Thank You")
}
  });

}

displayProducts();
