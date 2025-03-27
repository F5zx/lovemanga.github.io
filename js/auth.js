class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
    }
    register(login, password) {
        if (this.users.some(user => user.login === login)) {
            alert('Пользователь с таким логином уже существует!');
            return false;
        }
        const newUser = {
            login,
            password,
            read: [],
            favorites: []
        };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        return true;
    }
    login(login, password) {
        const user = this.users.find(u => u.login === login && u.password === password);
        if (user) {
            this.currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(user));
            return true;
        }
        return false;
    }
    logout() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }
}
const auth = new Auth();