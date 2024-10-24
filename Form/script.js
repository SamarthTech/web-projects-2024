 let form = document.querySelector("form");

let main = document.querySelector(".main");


form.addEventListener("submit", (event) => {
    let name = event.target.name.value;
    let number = event.target.phno.value;
    let email = event.target.email.value;

    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? [];

    userdata.push({
        'name': name,
        'number': number,
        'email': email

    })

    localStorage.setItem("userdetails", JSON.stringify(userdata));

    event.target.reset();

    displaydata();
    event.preventDefault();
}

)
let displaydata = () => {
    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? [];
    let finaldata = ``;
    userdata.forEach((element, i) => {
        finaldata +=
            `<div class="main">
        <span onclick='removeData(${i})'>&times;</span>
        <h5>Name</h5>
        <div>${element.name}</div>

        <h5>Email</h5>
        <div>${element.email}</div>

        <h5>Phone</h5>
        <div>${element.number}</div>
    </div>`
    });
    main.innerHTML = finaldata;
}

const removeData = (index) => {
    let userdata = JSON.parse(localStorage.getItem("userdetails")) ?? [];
    userdata.splice(index, 1);
    localStorage.setItem("userdetails", JSON.stringify(userdata));
    displaydata();
}