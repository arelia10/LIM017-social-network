import { onNavigate } from '../main.js';
import { savePost,updatePost,dataUser} from '../firebase/authFunctions.js';


export const Login = () => {
  const LoginMain = document.createElement('main');
  LoginMain.innerHTML = /*html*/
  `<header id="backgroundHeader">
        <img class="isotype" src="./img/iconUser.svg">
          <div>
            <input type="text" id="nickNameHeader" class="infoRegisterHeader">
          </div>
        <button id="loginOutBtn"><img class="loginOutIcon" src="./img/iconoLoginOut.svg"></button>
  </header>

  <!--Container post de user -->
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
  </section>

  <!-- TasksList -->
  <div class="col-md-6" id="tasks-container"></div>`

  LoginMain.classList.add('loginMain');
  LoginMain.querySelector('#loginOutBtn').addEventListener('click', () => onNavigate('/'));

  const postForm =  LoginMain.querySelector('#postForm');
  let editStatus = false;
  let id = '';
  postForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const contentUserPost = postForm.txtUserPost;
    if (!editStatus && contentUserPost.value !== '') {
      savePost(contentUserPost, dataUser());
    } else {
      updatePost(id, {contentUserPost: contentUserPost.value });
      editStatus = false;
      postForm.buttonPost.innerText = 'Publicar';
    }
    postForm.reset();
  });

  return LoginMain;
};