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

        const listCharactersPost = async () => {
            const response = await fetch(
                "https://character-database.becode.xyz/characters", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: objectJson
            });
        }

        listCharactersPost()

    }

    Main()

}

const btnAjt = document.getElementById("btn_ajt")

btnAjt.addEventListener('click', function (e) {
    creatCharacter();
    alert("This character has been created");
});