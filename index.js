const productsSection = document.querySelector(".products-section");

// const ExploreNowButton = document.getElementById("Explore Now");
// const productCards= document.querySelectorAll(".product-card")
// productCards.forEach((productCard=>{
//     productCard.addEventListener('click',(e)=>{

//     });
// }))
let likedProducts= []
function likeIt(productId){
if(!likedProducts.includes(productId)){
document.getElementById(`like${productId}`).style.color ="red"
likedProducts.push(productId)
}else{
    document.getElementById(`like${productId}`).style.color ="black"
    likedProducts.splice(likedProducts.indexOf(productId),1)
}
