import { onNavigate } from '../main.js';
<<<<<<< HEAD
import { savePost, getPost } from '../firebase/authFunctions.js';

export const Login = () => {
  const LoginMain = document.createElement('main');
  LoginMain.innerHTML = `<header id="backgroundHeader">
        <img class="isotype" src="./img/iconUser.svg">
          <div>
            <input type="text" id="nickNameHeader" class="infoRegisterHeader">
          </div>
=======
export const Login= () =>{
  let LoginMain= document.createElement("main");
  LoginMain.innerHTML = /*html*/
  `<header id="backgroundHeader">
| <img class="isotype" src="./img/iconUser.svg">
>>>>>>> b05bff931ed6caae28fe4961bd874275b5baf2e0
        <button id="loginOutBtn"><img class="loginOutIcon" src="./img/iconoLoginOut.svg"></button>
  </header>
<<<<<<< HEAD

  <!--Container post de user -->
  <br>
  <section id="postContainer">
    <form id="postForm">
      <div id="postUser" class="postUserStyle">
        <textarea placeholder="Desahógate..." type="text" id="txtUserPost" class="userInfoPost"></textarea>
      </div>
=======
<!--Container post de user -->
  <br>
  <section id="postContainer">
    <div id="postUser" class="postUserStyle">
      <textarea placeholder="Desahógate..." type="text" id="txtUserPost" class="userInfoPost"></textarea>
    </div>
      <div>
        <button id="buttonPost">Publicar</button>
        <button id="buttonEdit">Editar</button>
        <button id="buttonTrash"><img class="buttonTrashStyle" src="./img/iconTrash.svg"></button>
     </div>
  </section>
<!--Container post user's friend 1 -->
  <br>
  <section id="postContainerFriend1">
    <div id="postFriend1" class="postFriendStyle">
      <img class="equisIcon" src="./img/equis.svg">
      <img class="cloudTxtIcon" src="./img/cloudTxtIcon.svg">
    </div>
      <div>
        <textarea type="text" id="txtFriend" class="txtFriendStyle">Me siento muy feliz. ¡Fue un día increíble!</textarea>
        <!--<p id="txtFriend" class="txtFriendStyle">Me siento muy feliz. ¡Fue un día increíble!</p>-->
      </div>
        <div id="likesAndComments" class="likesAndCommentsStyle">
          <button id="buttonLikes"><img class="buttonLikesStyle" src="./img/likesIcon.svg"></button>
            <p id="likesCounter" class="likesCounterStyle"><span>1,030 Likes</span></p>
              <button id="buttonComment"><img class="buttonCommentStyle" src="./img/commentIcon.svg"></button>
              <p id="txtComment" class="txtCommentStyle">Ver comentarios</p>
        </div>
<!--Container post user's friend 2 -->
  <br>
  <section id="postContainerFriend2">
    <div id="postFriend1" class="postFriendStyle">
      <img class="equisIcon" src="./img/equis.svg">
      <img class="cloudTxtIcon" src="./img/cloudTxtIcon.svg">
    </div>
>>>>>>> b05bff931ed6caae28fe4961bd874275b5baf2e0
        <div>
          <button id="buttonPost">Publicar</button>
          <button id="buttonEdit">Editar</button>
          <button id="buttonTrash"><img class="buttonTrashStyle" src="./img/iconTrash.svg"></button>
       </div>
    </form>
  </section>`

  LoginMain.classList.add('loginMain');
  LoginMain.querySelector('#loginOutBtn').addEventListener('click', () => onNavigate('/'));

<<<<<<< HEAD
  const postForm = document.getElementById('postForm')
  //const tittleNameUser = document.getElementById('nickNameHeader')

/*postForm.addEventListener('click', (e) => {
    e.preventDefault()

    const NameUser = postForm['txtUserPost']
    console.log(NameUser)
  })*/

  LoginMain.querySelector('#buttonPost').addEventListener('click', (e) => {
      e.preventDefault()
      const contentUserPost = document.getElementById('txtUserPost').value;
      const eraser = document.getElementById('postForm').reset();
      savePost(contentUserPost)
      //const postUser = postForm['txtUserPost']
      console.log(contentUserPost)
    //  console.log('enviando')
  });

=======
>>>>>>> b05bff931ed6caae28fe4961bd874275b5baf2e0
  return LoginMain;
};