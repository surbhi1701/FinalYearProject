const greeting = document.querySelector('.greeting');

window.onload = () => {
    if (!sessionStorage.name) {
        location.href = '/login';
    } else {
        greeting.innerHTML = `hello ${sessionStorage.name}`;
    }
}

const logOut = document.querySelector('.logout');

logOut.onclick = () => {
    sessionStorage.clear();
    location.reload();
}

fetch('/api/attend')
    .then(function (response) {
        return response.json();
    })

    .then(function (students) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let student of students) {
            out += `
                <tr>
                    <td>${student.sno}</td>
                    <td>${student.name}</td>
                    <td>${student.status}</td>
                </tr>
            `;
        }
        placeholder.innerHTML = out;
    })