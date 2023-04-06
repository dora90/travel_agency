//dom
let modal = document.getElementById("modal-content");
let openModal = document.getElementById("open-modal");
let closeModal= document.querySelector(".close-modal");
let alert = document.querySelector(".btn-payment");

//open the modal
openModal.addEventListener('click', function() {
    modal.style.display = 'block';
})

//close the modal
closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
})
