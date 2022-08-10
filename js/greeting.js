const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector('#id');
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그아웃 버튼 지정
const button = document.querySelector('#logout');


// 로컬 저장공간에 아이디 저장
function onLoginSubmit(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem(USERNAME_KEY, username);
	paintGreeting(username);
}


/* 로그아웃 버튼 클릭시 로그아웃 */
button.addEventListener('click', () => {
	/* 로컬 데이터 삭제 */
	localStorage.removeItem('username');
});




// profile 사진 + 인사말 추가
function paintGreeting(username) {
	// name p 인식
	const name = document.querySelector("#name");

	name.innerText = `${username}님 환영합니다!`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

// 로그인 버튼 클릭시 데이터 전송
loginForm.addEventListener("submit", onLoginSubmit)

const saveUserName = localStorage.getItem(USERNAME_KEY);

// 로컬 저장 공간에 데이터 없으면 로그인 창, 데이터 있으면 프로필 뜸
if (saveUserName === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	paintGreeting(saveUserName);
}