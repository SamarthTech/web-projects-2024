btn1 = document.querySelector("#hobby_add");
btn2 = document.querySelector("#skill_add");
btn3= document.querySelector("#project_add");
btn4 = document.querySelector("#academy_add");
btn5 = document.querySelector("#work_add");
btn6 = document.querySelector("#generate");
btn7 = document.querySelector("#see");
btn8 = document.querySelector("#download");
btn9 = document.querySelector("#back")

function adding_hobby (){
    new_hobby = document.createElement("textarea");
    new_hobby.classList.add("hobby");

    pos = document.querySelector("#hobby_cont");
    pos.insertBefore(new_hobby , btn1);

}

function adding_skill () {
    new_skill = document.createElement("textarea");
    new_skill.classList.add("skill");

    pos= document.querySelector("#skill_cont");
    pos.insertBefore(new_skill , btn2)
}

function adding_project () {
    new_project = document.createElement("textarea");
    new_project.classList.add("project");

    pos = document.querySelector("#project_cont");
    pos.insertBefore(new_project , btn3);
}

function adding_academy () {
    new_academy = document.createElement("textarea");
    new_academy.classList.add("academy");

    pos = document.querySelector("#academy_cont");
    pos.insertBefore(new_academy , btn4);
}

function adding_work () {
    new_work = document.createElement("textarea");
    new_work.classList.add("work");

    pos = document.querySelector("#work_cont");
    pos.insertBefore(new_work , btn5);
}

btn1.onclick = adding_hobby;
btn2.onclick = adding_skill;
btn3.onclick = adding_project;
btn4.onclick = adding_academy;
btn5.onclick = adding_work;


function build_cv () {
    // Taking values from the form feild
    f_name_data = document.querySelector("#fname").value;
    l_name_data = document.querySelector("#lname").value;

    p_no_data = document.querySelector("#pno").value;
    email_data = document.querySelector("#email").value;
    add_data = document.querySelector("#hadd").value;

    p_link_data = document.querySelector("#pw").value;
    f_link_data = document.querySelector("#fb").value;
    l_link_data = document.querySelector("#ld").value;
    t_link_data = document.querySelector("#tw").value;
    g_link_data = document.querySelector("#gh").value;

    proff_data = document.querySelector("#pfn").value;
    obj_data = document.querySelector("#obj").value;


    // Identifying the put places
    put_f_name1 = document.querySelector("#f-name1");
    put_f_name2 = document.querySelector("#f-name2");
    put_l_name1 = document.querySelector("#l-name1");
    put_l_name2 = document.querySelector("#l-name2");

    put_add = document.querySelector("#h-add");
    put_p_no = document.querySelector("#p-no");
    put_email = document.querySelector("#mail");

    put_p = document.querySelector("#p-w");
    put_f = document.querySelector("#f-b");
    put_l = document.querySelector("#l-d");
    put_t = document.querySelector("#t-w");
    put_g = document.querySelector("#g-h");

    put_proff = document.querySelector("#p-f-n");
    put_obj = document.querySelector("#o-b-j");


    // Setting values
    put_l_name1.innerHTML = l_name_data;
    put_l_name2.innerHTML = l_name_data;
    put_f_name1.innerHTML = f_name_data;
    put_f_name2.innerHTML = f_name_data;

    put_p_no.innerHTML = p_no_data;
    put_email.innerHTML = email_data;
    put_add.innerHTML = add_data;

    put_p.innerHTML = p_link_data;
    put_f.innerHTML = f_link_data;
    put_l.innerHTML = l_link_data;
    put_t.innerHTML = t_link_data;
    put_g.innerHTML = g_link_data;

    put_proff.innerHTML = proff_data;
    put_obj.innerHTML = obj_data;

    // Dynamic list feilds
    acqs= document.querySelectorAll(".academy")
    for (let each of acqs) {
        // For each values creating a list
        let new_list = document.createElement("li");

        // Adding styles the lists 
        new_list.classList.add("list-group-item");
        new_list.classList.add("cli");

        // Storing values to the list
        let value= each.value;
        new_list.append(value);

        // Placing the list to the card
        document.querySelector("#acq").appendChild(new_list); 
    }


    skls= document.querySelectorAll(".skill")
    for (let each of skls) {
        // For each values creating a list
        let new_list = document.createElement("li");

        // Adding styles the lists 
        new_list.classList.add("list-group-item");
        new_list.classList.add("cli");

        // Storing values to the list
        let value= each.value;
        new_list.append(value);

        // Placing the list to the card
        document.querySelector("#skl").appendChild(new_list); 
    }

    pjcs= document.querySelectorAll(".project")
    for (let each of pjcs) {
        // For each values creating a list
        let new_list = document.createElement("li");

        // Adding styles the lists 
        new_list.classList.add("list-group-item");
        new_list.classList.add("cli");

        // Storing values to the list
        let value= each.value;
        new_list.append(value);

        // Placing the list to the card
        document.querySelector("#pjc").appendChild(new_list); 
    }


    wrks= document.querySelectorAll(".work")
    for (let each of wrks) {
        // For each values creating a list
        let new_list = document.createElement("li");

        // Adding styles the lists 
        new_list.classList.add("list-group-item");
        new_list.classList.add("cli");

        // Storing values to the list
        value= each.value;
        new_list.append(value);

        // Placing the list to the card
        document.querySelector("#wrk").appendChild(new_list); 
    }

    
    hbs= document.querySelectorAll(".hobby")
    for (let each of hbs) {
        let new_list = document.createElement("li");
        new_list.classList.add("list-group-item");
        new_list.classList.add("cli");
        value= each.value;
        new_list.append(value);
        document.querySelector("#hby").appendChild(new_list); 
    }


    // Image
    prfph = document.querySelector("#pp").files[0];
    put_prfph = document.querySelector("#p-p");

    // Checking if the image is not in jpg format
    if (prfph !== undefined) {
        if (prfph.type === "image/jpeg"){
            // Reading the file
            reader = new FileReader();
            // Image URL 
            reader.readAsDataURL(prfph);

            // After loading the file, adding it to the p-p feild
            reader.onloadend= function(){
                put_prfph.src = reader.result;
            }
        }
    }

    
    // Display screen seeting
    document.querySelector("#form").style.display = "none"
    document.querySelector("header").style.display = "none"
    document.querySelector("#cv").style.display = "block"
}


btn6.onclick = build_cv;


function show_template () {
    document.querySelector("#form").style.display ="none";
    document.querySelector("#cv").style.display ="block";
}

btn7.onclick = show_template;

function go_back () {
    document.querySelector("#form").style.display ="block";
    document.querySelector("#cv").style.display ="none";
}

btn9.onclick = go_back;


function printcv() {
    window.print();
}

btn8.onclick = printcv;

