import { onNavigate } from '../main.js';

export const Login= () =>{
  let LoginMain= document.createElement("main");
  LoginMain.innerHTML = `<header id="backgroundHeader">
        <img class="isotype" src="./img/iconUser.svg">
        <button id="loginOutBtn"><img class="loginOutIcon" src="./img/iconoLoginOut.svg"></button>
      <div>
  </header>

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

<!--Container post user's friend -->
  <br>
  <section id="postContainerFriend1">
    <div id="postFriend1" class="postFriendStyle">
      <img class="equisIcon" src="./img/equis.svg">
      <img class="cloudTxtIcon" src="./img/cloudTxtIcon.svg">
    </div>
      <div>
        <p id="txtFriend" class="txtFriendStyle">Me siento muy feliz.¡Fue un día increíble!</p>
      </div>
        <div>
          <button id="buttonLikes"><img class="buttonLikesStyle" src="./img/likesIcon.svg"></button>
          <p id="likesCounter" class="likesCounterStyle"><span>1,030 Likes</span></p>
          <button id="buttonComment"><img class="buttonCommentStyle" src="./img/commentIcon.svg"></button>
          <p id="txtComment" class="txtCommentStyle">Ver comentarios</p>
        </div>
  </section>`



  LoginMain.classList.add("loginMain");
  LoginMain.querySelector("#loginOutBtn").addEventListener('click', () => onNavigate('/'));


  return LoginMain;
};
