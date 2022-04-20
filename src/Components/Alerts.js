const expression = {
	nickName: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{6,6}$/, // 6 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const formularioRegister = document.getElementById("formRegister");
const inputs = document.querySelectorAll("#formRegister input");
