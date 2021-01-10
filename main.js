//calll modal addEventListener
const addModal = document.querySelector('.add-modal');
const btnadd = document.querySelector('.btn-add');
//click add user button
btnadd.addEventListener('click', ()=>{
  addModal.classList.add('modal-show');
});
//user click anywhere outside the modal
window.addEventListener('click',e=>{
  if(e.target ===addModal){
    addModal.classList.remove('modal-show');
  }
  //console.log(e.target, addModal);
});
