import { onNavigate } from '../main.js';
import { savePost, getPost, onGetPost, deletePost, getEdit, updatePost } from '../firebase/authFunctions.js';

export const Login = () => {
  const LoginMain = document.createElement('main');
  LoginMain.classList.add('loginMain');
  LoginMain.innerHTML = /*html*/
   `<header id="backgroundHeader">
        <img class="isotype" src="./img/iconUser.svg">
          <div>
            <input type="text" id="nickNameHeader" class="infoRegisterHeader">
          </div>
        <button id="loginOutBtn"><img class="loginOutIcon" src="./img/iconoLoginOut.svg"></button>
  </header>

  <!--Container text post, función publicar -->
  <br>
  <section id="postContainer">
    <form id="postForm">
      <div id="postUser" class="postUserStyle">
        <textarea placeholder="Desahógate..." type="text" id="txtUserPost" class="userInfoPost"></textarea>
      </div>
        <div>
          <button id="buttonPost">Publicar</button>
       </div>
    </form>
    <div id="newContainerPost"></div>
  </section>`;
  
  /*Container cerrar sesión*/
  LoginMain.querySelector('#loginOutBtn').addEventListener('click', () => { exit().then(onNavigate('/'));
  });
  
  const postForm = document.getElementById("postForm");
  let editStatus = false;
  let id = '';
  /*Container de post*/
  //LoginMain.querySelector('#buttonPost').addEventListener('click', async (e) => {
  window.addEventListener('DOMContentLoaded', async (e) => {
    //const querySnapshot = await getPost();  
    //querySnapshot.forEach(doc => {
    //  console.log(doc.data())
    onGetPost((querySnapshot) => {
      newContainerPost.innerHTML = "";
      querySnapshot.forEach((doc) => {
      const task = doc.data();
      newContainerPost.innerHTML += /*html*/
      `<br>
      <section class="newContainerPost">
        <div id="postContainerFriend1">
          <div id="postFriend1" class="postFriendStyle">
            <img class="cloudTxtIcon" src="./img/cloudTxtIcon.svg">
          </div>
            <div>
              <p id="txtFriend" class="txtFriendStyle">${task.contentUserPost}</p>
          </div>
              <div id="likesAndComments" class="likesAndCommentsStyle">
                <button class="btnLikeAndCommentTrash" data-id="${doc.id}"><img class="buttonLikesStyle" src="./img/likesIcon.svg"></button>
                  <p id="likesCounter" class="likesCounterStyle"><span>1,030 Likes</span></p>
                    <button class="btn-Edit" data-id="${doc.id}">🖉</button>
                      <button class="btn-Trash" data-id="${doc.id}">🗑</button>
              </div>
        </div>      
      </section>`
  });
    const btnDelete = newContainerPost.querySelectorAll(".btn-Trash");
    btnDelete.forEach(btn => {
      btn.addEventListener("click", ({target:{dataset}}) => {
        deletePost(dataset.id)
    })
  })

  const btnEdit = newContainerPost.querySelectorAll(".btn-Edit");
    btnEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
      const doc = await getEdit(e.target.dataset.id)
      //console.log(doc.data())
      const task = doc.data();
      
      //postForm['txtUserPost'].value = task.contentUserPost
      const contentUserPost = document.getElementById('txtUserPost').value = task.contentUserPost
      editStatus = true;
      id = doc.id;
      //ocument.getElementById('buttonPost').innerText = 'UpDate'

 })
})

 })
})

  LoginMain.querySelector('#buttonPost').addEventListener('click', (e) => {
      e.preventDefault()
      
      if(!editStatus) {
        const contentUserPost = document.getElementById('txtUserPost').value;
        savePost(contentUserPost)
      } 
      else {
        const contentUserPost = document.getElementById('txtUserPost').value;
        updatePost(id, {contentUserPost});

        editStatus = false;
      }      

      const eraser = document.getElementById('postForm').reset();
      
  });  


 return LoginMain;

}
