const listCharacters = async () => {
  const response = await fetch(
    "https://character-database.becode.xyz/characters"
  );

  const json = await response.json().catch(console.error);

  console.log(json);

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
  }
};

const f = document.getElementById('form');
const q = document.getElementById('query');
const site = 'https://character-database.becode.xyz/characters/?name=';

function submitted(event) {
        event.preventDefault();
        const url = site + q.value;
        const win = window.open(url, '_blank');
        win.focus();
 }

 f.addEventListener('submit', submitted);
 window.addEventListener("load", function (e) {
    listCharacters();
});
