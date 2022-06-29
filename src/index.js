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
            window.open(url, "_self").document.write('<!DOCTYPE html><html><head><title>' + json[i].name + '</title><script type="module" src="./src/index.js"></script><link rel="stylesheet" href="./src/css/index.min.css" /></head><body class="body_char"><header class="header_char"><h1 class="h1_char" id="h1_char">' + json[i].name + '</h1></header><main class="main_char"><div class="main_char_div" id="main_char_div"></div></main><footer></footer></body></html>');

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
    window.open(url, "_self").document.write('<!DOCTYPE html><html><head><title>' + q.value + '</title><script type="module" src="./src/index.js"></script><link rel="stylesheet" href="./src/css/index.min.css" /></head><body><header><h1 class="h1_char" id="h1_char">' + q.value + '</h1></header><main><div class="main_char_div" id="main_char_div"></div></main><footer></footer></body></html>');

    const response = await fetch(
        "https://character-database.becode.xyz/characters?name=" + q.value
    );

    const json = await response.json().catch(console.error);

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

    console.log(json)

}

// event listener but look weardo

window.addEventListener("load", function (e) {
    listCharacters();
});

f.addEventListener('submit', submitted);
