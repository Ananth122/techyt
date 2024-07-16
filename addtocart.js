let carticon = document.querySelector(".fa-bag-shopping")

let cart = document.querySelector(".cart-container")

let cartclose = document.querySelector(".cartclose")

carticon.addEventListener("click",
function (params) {
   cart.classList.add("opencart")
    
})

cartclose.addEventListener("click",
function (params) {
   cart.classList.remove("opencart")
})

document.addEventListener("DOMContentLoaded",loadevent)
function loadevent(params) {
 loadcontent()  

}


function loadcontent(){
      
let removeicon = document.querySelector(".fa-trash")
let prouctnos = document.querySelector(".productNos")
let addButton = document.querySelectorAll(".pr-btn")

 removeicon.addEventListener("click", removept)
prouctnos.addEventListener("change",lows )

 addButton.forEach(function (btn) {
   btn.addEventListener("click",getprodutinfo)
   
 })

}

function lows  (params) {
   if (0>=this.value) {
         this.value=1
   }
   
}

function removept (params) {
      
   this.parentNode.remove()
}

function getprodutinfo(params) {

   const selectparent = this.parentNode

   const productname = selectparent.querySelector(".prname").innerText
   const productimage = selectparent.querySelector(".primg").src
   const productprice = selectparent.querySelector(".price").innerText 
   
   console.log(productimage,productname,productprice );
   
   const productDesign = putproductinfo(productimage,productname,productprice)
   const creatediv = document.createElement("div")
   
   creatediv.innerHTML = productDesign

   const cartcontainer = document.querySelector(".cart-product-hold")
   
   cartcontainer.appendChild(creatediv)

   
}

function putproductinfo (prImg,prName,prPrice) {
  return`<div class="containers">
  <img src="${prImg}" alt="">
  <div class="cartprotuctinfo">
    <h1 class="cpname">${prName}</h1>
    <h2 class="cpprice">${prPrice}</h2>  
    <div class="product-count"> 
      <input type="number" name="" class="productNos" id=""  value="1"> 
      <h2 class="totalProductPrice"></h2>
    </div>
  </div>
  <i class="fa-solid fa-trash"></i>
</div>  
`  
}

function updatetotal()
{
  const cartitems=document.querySelectorAll('.cart-product-hold');
  const totalvalue=document.querySelector('.price');

  let total=0; 

  cartitems.forEach(product=>{
    let price=product.querySelector('.price');
    let qty=product.querySelector('product-count').value;
    total+=(price*qty); 
    product.querySelector('.total-productprice').innerText="Rs."+price*qty;

  });

  totalvalue.innerHTML='Rs.'+total;
}




