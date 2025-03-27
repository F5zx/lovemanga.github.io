function updateProfileView() {
    const auth = new Auth();
    if (auth.currentUser) {
        document.querySelector('.auth-forms').classList.add('hidden');
        document.querySelector('.profile').classList.remove('hidden');
        document.getElementById('username').textContent = auth.currentUser.login;
        renderList('read-list', auth.currentUser.read);
        renderList('favorites-list', auth.currentUser.favorites);
    } else {
        document.querySelector('.auth-forms').classList.remove('hidden');
        document.querySelector('.profile').classList.add('hidden');
    }
}

function renderList(elementId, items) {
    const container = document.getElementById(elementId);
    container.innerHTML = items.map(item => `
        <div class="manga-item">
            <h4>${item.title}</h4>
            <img src="${item.image}" alt="${item.title}" class="manga-thumbnail">
        </div>
    `).join('');
}
function showLogin() {
    document.getElementById('register-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
}

function showRegister() {
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('register-form').classList.remove('hidden');
}

function register() {
    const login = document.getElementById('reg-login').value;
    const password = document.getElementById('reg-password').value;
    
    if (auth.register(login, password)) {
        auth.login(login, password);
        updateProfileView();
    }
}

function login() {
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    
    if (auth.login(login, password)) {
        updateProfileView();
    } else {
        alert('Неверный логин или пароль!');
    }
}

function logout() {
    auth.logout();
    updateProfileView();
}
document.addEventListener('DOMContentLoaded', updateProfileView);
