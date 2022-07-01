const listCharacters = async () => {
    const response = await fetch(
        "https://character-database.becode.xyz/characters"
    );

    const json = await response.json().catch(console.error);

    for (let i = 0; i < json.length; i++) {
        console.log(json[i].name)
        console.log(json[i].id)

        const option = document.createElement("option");
        option.setAttribute("id", "option" + i);
        option.setAttribute("class", "option_name");
        option.setAttribute("value", json[i].id);
        document.getElementById("character_selection").appendChild(option);
        document.getElementById("option" + i).innerHTML = json[i].name;
    }

}

const optionv = document.getElementById("character_selection");

optionv.addEventListener('change', async () => {
    console.log(optionv.value)

    const response = await fetch(
        "https://character-database.becode.xyz/characters/" + optionv.value
    );

    const json = await response.json().catch(console.error);

    console.log(json)

    const name = document.getElementById("input_main_ajt_name");
    const dataImg = document.getElementById("img_main_ajt");
    const shortDescription = document.getElementById("input_main_ajt_dscS");
    const description = document.getElementById("input_main_ajt_dscL");

    const img = document.getElementById("pImg");
    img.setAttribute("src", "data:image/png;base64," + json.image);

    name.setAttribute("value", json.name);
    shortDescription.setAttribute("value", json.shortDescription);
    description.innerHTML = json.description;
    dataImg.setAttribute("value", json.name);

});

const creatCharacter = async () => {

    const name = document.getElementById("input_main_ajt_name").value;
    const dataImg = document.getElementById("img_main_ajt").files[0];
    const shortDescription = document.getElementById("input_main_ajt_dscS").value;
    const description = document.getElementById("input_main_ajt_dscL").value;

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    async function Main() {
        const file = document.querySelector('#img_main_ajt').files[0];
        const img64 = await toBase64(file);

        var character = {
            name: name,
            shortDescription: shortDescription,
            description: description,
            image: img64.replace(/^data:image\/[a-z]+;base64,/, "")
        };

        console.log(character)

        var objectJson = JSON.stringify(character)

        console.log(objectJson)

        const optionv = document.getElementById("character_selection");

        const listCharactersPost = async () => {
            const response = await fetch(
                "https://character-database.becode.xyz/characters/" + optionv.value, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: objectJson
            });
        }

        listCharactersPost()

    }

    Main()

}


window.addEventListener('load', () => {
    listCharacters()
});

const btnAjt = document.getElementById("btn_ajt")

btnAjt.addEventListener('click', function (e) {
    creatCharacter();
    if (confirm("Are you sure to modify this character ?") == true) {
        setTimeout(function () {
            window.location = "http://127.0.0.1:5500/";
        }, 2000);
    } else {
        location.reload(true)
    }
});

const fileL = document.getElementById('img_main_ajt');

fileL.addEventListener('change', () => {
    const fileN = document.querySelector('#img_main_ajt').files[0];
    document.getElementById('name_img_p').innerHTML = fileN.name;

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    async function main() {
        const file = document.querySelector('#img_main_ajt').files[0];
        const img64 = await toBase64(file);

        const img = document.getElementById("pImg");
        img.setAttribute("src", img64);
    }

    main()

});