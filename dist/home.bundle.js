(()=>{const t=document.getElementById("form"),e=document.getElementById("query"),a=window.location;window.addEventListener("load",(function(t){(async()=>{const t=await fetch("https://character-database.becode.xyz/characters"),e=await t.json().catch(console.error);for(let t=0;t<e.length;t++){const a=document.createElement("div");a.setAttribute("id","div"+t),a.setAttribute("class","div_test"),document.getElementById("list_char").appendChild(a);const c=document.createElement("img");c.setAttribute("id","pImg"+t),c.setAttribute("src","data:image/png;base64,"+e[t].image),c.setAttribute("class","main_img"),c.setAttribute("alt","img"),document.getElementById("div"+t).appendChild(c);const n=document.createElement("p");n.setAttribute("id","pName"+t),n.setAttribute("class","p_test_name"),document.getElementById("div"+t).appendChild(n),document.getElementById("pName"+t).innerHTML=e[t].name;const d=document.createElement("p");d.setAttribute("id","pDesc"+t),d.setAttribute("class","p_test_desc"),document.getElementById("div"+t).appendChild(d),document.getElementById("pDesc"+t).innerHTML=e[t].shortDescription;const i=document.createElement("a");i.setAttribute("id","aBtn"+t),i.setAttribute("class","p_test_btn"),document.getElementById("div"+t).appendChild(i),document.getElementById("aBtn"+t).innerHTML="Learn More";const s=window.location;i.addEventListener("click",(function(a){a.preventDefault();const c=s;window.open(c,"_self").document.write("<!DOCTYPE html><html><head><title>"+e[0].name+'</title><script type="module" src="./src/index.js"><\/script><link rel="stylesheet" href="./src/css/index.min.css" /></head><body class="body_char"><header class="header_char"><div class="buttons"> <form id="form" role="search"> <input type="search" id="query" name="q" placeholder="Search character..." aria-label="Search through site content"/> <button id="btn_search" class="button_search"> <svg viewBox="0 0 1024 1024"> <path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"> </path> </svg> </button> </form> <div class="buttons_Add_Edit"> <button id="btn_add" class="button_add"> <a href="./modif.html">Edit character</a></button> <button id="btn_add" class="button_add"> <a href="./pageAjt.html">Add new character</a></button> </div></div><div class="title"> <a href="./index.html" class="title_ajt">Character Manager</a> </div></header><main class="main_char"><div class="main_char_div" id="main_char_div"><h1 href="#" class="h1_char" id="h1_char">'+e[0].name+"</h1></div></main><footer></footer></body></html>"),document.getElementById("h1_char").innerHTML=e[t].name;const n=document.createElement("img");n.setAttribute("id","pImg"),n.setAttribute("alt","image"),n.setAttribute("src","data:image/png;base64,"+e[t].image),n.setAttribute("class","img_char"),document.getElementById("main_char_div").appendChild(n);const d=document.createElement("p");d.setAttribute("id","pName"),d.setAttribute("class","p_char_desc"),document.getElementById("main_char_div").appendChild(d),document.getElementById("pName").innerHTML=e[t].description;const i=document.createElement("input");i.setAttribute("id","aBtnChar"+t),i.setAttribute("class","p_test_btn_c"),i.setAttribute("type","button"),i.setAttribute("value","delete character"),document.getElementById("main_char_div").appendChild(i),i.addEventListener("click",(function(){1==confirm("Are you sure to delete this character ?")?((async()=>{await fetch("https://character-database.becode.xyz/characters/"+e[t].id,{method:"DELETE"})})(),setTimeout((function(){window.location="index.html"}),2e3)):location.reload(!0)}))}))}})()})),t.addEventListener("submit",(async t=>{t.preventDefault();const c=a,n=await fetch("https://character-database.becode.xyz/characters?name="+e.value),d=await n.json().catch(console.error);window.open(c,"_self").document.write("<!DOCTYPE html><html><head><title>"+d[0].name+'</title><script type="module" src="./src/index.js"><\/script><link rel="stylesheet" href="./src/css/index.min.css" /></head><body class="body_char"><header class="header_char"><div class="buttons"> <form id="form" role="search"> <input type="search" id="query" name="q" placeholder="Search character..." aria-label="Search through site content"/> <button id="btn_search" class="button_search"> <svg viewBox="0 0 1024 1024"> <path class="path1" d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"> </path> </svg> </button> </form> <div class="buttons_Add_Edit"> <button id="btn_add" class="button_add"> <a href="./modif.html">Edit character</a></button> <button id="btn_add" class="button_add"> <a href="./pageAjt.html">Add new character</a></button> </div></div><div class="title"> <a href="./index.html" class="title_ajt">Character Manager</a> </div></header><main class="main_char"><div class="main_char_div" id="main_char_div"><h1 href="#" class="h1_char" id="h1_char">'+d[0].name+"</h1></div></main><footer></footer></body></html>"),document.getElementById("h1_char").innerHTML=d[0].name;const s=document.createElement("img");s.setAttribute("id","pImg"),s.setAttribute("src","data:image/png;base64,"+d[0].image),s.setAttribute("class","img_char"),s.setAttribute("alt","image"),document.getElementById("main_char_div").appendChild(s);const r=document.createElement("p");r.setAttribute("id","pName"),r.setAttribute("class","p_char_desc"),document.getElementById("main_char_div").appendChild(r),document.getElementById("pName").innerHTML=d[0].description;const o=document.createElement("input");o.setAttribute("id","aBtnChar"+i),o.setAttribute("class","p_test_btn_c"),o.setAttribute("type","button"),o.setAttribute("value","delete character"),document.getElementById("main_char_div").appendChild(o),o.addEventListener("click",(function(){(async()=>{await fetch("https://character-database.becode.xyz/characters/"+d[0].id,{method:"DELETE"})})(),1==confirm("Are you sure to delete this character ?")?setTimeout((function(){window.location="index.html"}),2e3):location.reload(!0)})),console.log(d)}))})();