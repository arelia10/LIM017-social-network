import { signInWithEmail, loginGoogle } from '../../src/firebase/authFunctions.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from '../../src/firebase/firebaseImports.js';
import { Welcome } from '../../src/Components/Welcome.js';

jest.mock('../../src/firebase/firebaseImports.js');

/*jest.mock('../../src/authFunctions.js');*/
window.alert = jest.fn();
describe('signInWithEmail', () => {
  window.alert.mockClear();
  it('Función para verificar el ingreso de usuario', () => {
    signInWithEmail('katy@gmail.com','123456');
    expect(signInWithEmailAndPassword.mock.calls.length).toBe(1);
    expect(signInWithEmailAndPassword.mock.calls[0][1]).toBe('katy@gmail.com');
    expect(signInWithEmailAndPassword.mock.calls[0][2]).toBe('123456');
  });
});

describe('Componente Welcome', () => {
  it('Botón para ingresar con google', () => {
    const welcomeComponent = Welcome()
    welcomeComponent.querySelector('#googleBtn').dispatchEvent(new Event('click'))
    expect(signInWithPopup).toHaveBeenCalledTimes(1)
  })
});

/*describe('loginGoogle', () => {
  
  it('Debería', () => { signInWithPopup()
    .then(() => {
      expect(signInWithPopup).toHaveBeenCalled();
      expect(signInWithPopup.mock.calls[0][1]).toEqual(new GoogleAuthProvider());
    });
  });
  it('Función para ingresar con google', () => {
    expect(loginGoogle()).toEqual(signInWithPopup());
  });
});*/

