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

//get all users
db.collection('users').get().then(querySnapshot =>{
  querySnapshot.forEach(doc => {
    console.log(doc.data());
  })
})
