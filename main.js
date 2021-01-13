const modalwrapper = document.querySelector('.modal-wrapper');
//calll modal addEventListener
const addModal = document.querySelector('.add-modal');
const btnadd = document.querySelector('.btn-add');
const tableusers = document.querySelector('.table-users');
const addModalform = document.querySelector('.add-modal .form');

//create element and render users
const renderUser = doc =>{
  const tr =`
  <tr data-id='${doc.id}'>
    <td>${doc.data().FirstName}</td>
    <td>${doc.data().LastName}</td>
    <td>${doc.data().phone}</td>
    <td>${doc.data().Email}</td>
  <td>
  <button class="btn btn-edit">edit</button>
  <button class="btn btn-delite">delite</button>
  </td>
</tr>
  `;
  tableusers.insertAdjacentHTML('beforeend', tr);

//click delite user
const delitebutton = document.querySelector(`[data-id='${doc.id}'] .btn-delite`);
delitebutton.addEventListener('click', ()=>{
  console.log(doc.data().FirstName);
});

}
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
    renderUser(doc);
  })
});
//click Submitin add Modal
addModalform.addEventListener('submit', e=>{
e.preventDefault();
db.collection('users').add({
  FirstName: addModalform.firstname.value,
  LastName: addModalform.lastname.value,
  phone: addModalform.phone.value,
  Email: addModalform.email.value,
});
  modalwrapper.classList.remove('modal-show');
})
