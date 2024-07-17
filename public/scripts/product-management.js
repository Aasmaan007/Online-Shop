// listen for clicks on delete and then after sending correct request update DOM with browser side 
// js code 
const deleteProductButtonElements = document.querySelectorAll('.product-item button');
// event object is automatically made available when function is triggered
async function deleteProduct(event) {
  const buttonElement = event.target;
  // target is element which caused the event
  const productId = buttonElement.dataset.productid;
  const csrfToken = buttonElement.dataset.csrf;

  // we add csrf token in url as a query paramter
  const response = await fetch('/admin/products/' + productId + '?_csrf=' + csrfToken, {
    method: 'DELETE'
  });

  if (!response.ok) {
    alert('Something went wrong!');
    return;
  }
// buttonElemnt gives access to delete button and then we use parentElement to acces its parent 
// and so on till we get access to article and then to its parent which is <li> in all products
  buttonElement.parentElement.parentElement.parentElement.parentElement.remove();
}

for (const deleteProductButtonElement of deleteProductButtonElements) {
  deleteProductButtonElement.addEventListener('click', deleteProduct);
}