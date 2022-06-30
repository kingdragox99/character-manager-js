// fetch api + making card for each characters

const listCharacters = async () => {
    const response = await fetch(
        "https://character-database.becode.xyz/characters"
    );

    const json = await response.json().catch(console.error);

    for (let i = 0; i < json.length; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "div" + i);
        div.setAttribute("class", "div_test");
        document.getElementById("list_char").appendChild(div);

        const img = document.createElement("img");
        img.setAttribute("id", "pImg" + i);
        img.setAttribute("src", "data:image/png;base64," + json[i].image);
        img.setAttribute("class", "main_img")
        document.getElementById("div" + i).appendChild(img);

        const pName = document.createElement("p");
        pName.setAttribute("id", "pName" + i);
        pName.setAttribute("class", "p_test_name");
        document.getElementById("div" + i).appendChild(pName);

        document.getElementById("pName" + i).innerHTML = json[i].name;

        const pDesc = document.createElement("p");
        pDesc.setAttribute("id", "pDesc" + i);
        pDesc.setAttribute("class", "p_test_desc");
        document.getElementById("div" + i).appendChild(pDesc);

        document.getElementById("pDesc" + i).innerHTML = json[i].shortDescription;

        const aBtn = document.createElement("a");
        aBtn.setAttribute("id", "aBtn" + i);
        aBtn.setAttribute("class", "p_test_btn");
        aBtn.setAttribute("href", "yooooo")
        document.getElementById("div" + i).appendChild(aBtn);

        document.getElementById("aBtn" + i).innerHTML = "Learn More";

        const site = 'http://127.0.0.1:5500/';

        aBtn.addEventListener('click', function (e) {
            e.preventDefault();
            const url = site + json[i].name;
            window.open(url, "_self").document.write('<!DOCTYPE html><html><head><title>' + json[i].name + '</title><script type="module" src="./src/index.js"></script><link rel="stylesheet" href="./src/css/index.min.css" /></head><body class="body_char"><header class="header_char"><div class="buttons"> <form id="form" role="search"> <input type="search" id="query" name="q" placeholder="Search character..." aria-label="Search through site content" /> <button id="btn_search" class="button_search"> <svg viewBox="0 0 1024 1024"> <path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"> </path> </svg> </button> </form> <button id="btn_add" class="button_add">Add new character</button> </div> <div class="title"> <h1>Character Manager</h1> </div></header><main class="main_char"><div class="main_char_div" id="main_char_div"><h1 href="#" class="h1_char" id="h1_char">' + json[i].name + '</h1></div></main><footer></footer></body></html>');

            const h1 = document.getElementById("h1_char").innerHTML = json[i].name;

            const img = document.createElement("img");
            img.setAttribute("id", "pImg");
            img.setAttribute("src", "data:image/png;base64," + json[i].image);
            img.setAttribute("class", "img_char")

            document.getElementById("main_char_div").appendChild(img);

            const pDeskL = document.createElement("p");
            pDeskL.setAttribute("id", "pName");
            pDeskL.setAttribute("class", "p_char_desc");
            document.getElementById("main_char_div").appendChild(pDeskL);

            document.getElementById("pName").innerHTML = json[i].description;

            const cBtn = document.createElement("input");
            cBtn.setAttribute("id", "aBtnChar" + i);
            cBtn.setAttribute("class", "p_test_btn_c");
            cBtn.setAttribute("type", "button");
            cBtn.setAttribute("value", "delete character");
            document.getElementById("main_char_div").appendChild(cBtn);

            const listCharactersDeleted = async () => {
                const response = await fetch(
                    "https://character-database.becode.xyz/characters/" + json[i].id, {
                    method: 'DELETE'
                });
            }

            cBtn.addEventListener('click', function () {
                listCharactersDeleted()
                alert("This character has been deleted")
                document.location.reload(true)
            });

        });
    }
};

// Making page for characters with info, do i need to refetch ?

const f = document.getElementById('form');
const q = document.getElementById('query');
const site = 'http://127.0.0.1:5500/';

const submitted = async (event) => {

    event.preventDefault();
    const url = site + q.value;

    const response = await fetch(
        "https://character-database.becode.xyz/characters?name=" + q.value
    );

    const json = await response.json().catch(console.error);

    window.open(url, "_self").document.write('<!DOCTYPE html><html><head><title>' + json[0].name + '</title><script type="module" src="./src/index.js"></script><link rel="stylesheet" href="./src/css/index.min.css" /></head><body class="body_char"><header class="header_char"><div class="buttons"> <form id="form" role="search"> <input type="search" id="query" name="q" placeholder="Search character..." aria-label="Search through site content" /> <button id="btn_search" class="button_search"> <svg viewBox="0 0 1024 1024"> <path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"> </path> </svg> </button> </form> <button id="btn_add" class="button_add">Add new character</button> </div> <div class="title"> <h1>Character Manager</h1> </div></header><main class="main_char"><div class="main_char_div" id="main_char_div"><h1 href="#" class="h1_char" id="h1_char">' + json[0].name + '</h1></div></main><footer></footer></body></html>');

    const h1 = document.getElementById("h1_char").innerHTML = json[0].name;

    const img = document.createElement("img");
    img.setAttribute("id", "pImg");
    img.setAttribute("src", "data:image/png;base64," + json[0].image);
    img.setAttribute("class", "img_char")

    document.getElementById("main_char_div").appendChild(img);

    const pDeskL = document.createElement("p");
    pDeskL.setAttribute("id", "pName");
    pDeskL.setAttribute("class", "p_char_desc");
    document.getElementById("main_char_div").appendChild(pDeskL);

    document.getElementById("pName").innerHTML = json[0].description;

    const cBtn = document.createElement("input");
    cBtn.setAttribute("id", "aBtnChar" + i);
    cBtn.setAttribute("class", "p_test_btn_c");
    cBtn.setAttribute("type", "button");
    cBtn.setAttribute("value", "delete character");
    document.getElementById("main_char_div").appendChild(cBtn);

    const listCharactersDeleted = async () => {
        const response = await fetch(
            "https://character-database.becode.xyz/characters/" + json[0].id, {
            method: 'DELETE'
        });
    }

    cBtn.addEventListener('click', function () {
        listCharactersDeleted()
        alert("This character has been deleted")
        document.location.reload(true)
    });

    console.log(json)

}

// event listener but look weardo

window.addEventListener("load", function (e) {
    listCharacters();
});

f.addEventListener('submit', submitted);
