// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span").innerHTML
  let quantity = product.querySelector(".quantity input ").value
  
  let valor =  price * quantity
  let subTotal = product.querySelector(".subtotal span")

  subTotal.innerHTML = valor
 return valor
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /* const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct); */
  // end of test

  // ITERATION 2
  let  totalEachPro = document.getElementsByClassName("product")
  let finalPrice= 0
   for ( let i=0; i<totalEachPro.length; i++){
    finalPrice +=  updateSubtotal(totalEachPro[i]) 
    
  }

  // ITERATION 3
  let patata = document.querySelector("#total-value span")
 patata.innerHTML = finalPrice
 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
