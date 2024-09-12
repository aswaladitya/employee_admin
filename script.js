document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mock login logic
    if (username === 'admin' && password === 'adminps') {
        showDashboard('admin');
    } else if (username === 'employee' && password === 'employeeps') {
        showDashboard('employee');
    } else {
        alert('Invalid credentials');
    }
});

function showDashboard(role) {
    document.getElementById('login').style.display = 'none';
    if (role === 'admin') {
        document.getElementById('adminDashboard').style.display = 'flex';
    } else if (role === 'employee') {
        document.getElementById('employeeDashboard').style.display = 'flex';
    }
}

document.getElementById('logoutAdmin').addEventListener('click', function() {
    logout();
});

document.getElementById('logoutEmployee').addEventListener('click', function() {
    logout();
});

function logout() {
    document.getElementById('adminDashboard').style.display = 'none';
    document.getElementById('employeeDashboard').style.display = 'none';
    document.getElementById('login').style.display = 'flex';
}