// document.getElementById('toggleButton').addEventListener('click', function () {
//     const bodyElement = document.querySelector('body');
//     bodyElement.classList.toggle('asideBar');
// });

let toggleButtons = document.querySelectorAll('.toggleButton');
let bodyElement = document.body;
toggleButtons.forEach(toggleButton=>{
    toggleButton.addEventListener('click', ()=>{
        bodyElement.classList.toggle('asideBar')
    } )
})



let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}