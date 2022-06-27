const response = await fetch('https://character-database.becode.xyz/characters');

const json = await response.json().catch(console.error);

console.log(json)