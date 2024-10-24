const inputBox = document.querySelector('input')
const searchButton = document.querySelector('.input-search > button')
const pkmnName = document.querySelector('.others > h1')
const pokemonId = document.querySelector('.others > h2')
const pokemonImage = document.querySelector('.pic > img')
const pokemonStats = document.querySelectorAll('.stat > div > div > h1')
const pokemonHeight = document.querySelector('.physique > h2:nth-child(1)')
const pokemonWeight = document.querySelector('.physique > h2:nth-child(2)')
const pokemonAbility = document.querySelector('.physique > h2:nth-child(3)')
const pokemonDesc = document.querySelector('.about > h4')
const cryButton = document.querySelector('.cry > button')
const audioPlay = document.querySelector('#audioPlayer')
const pokemonType = document.querySelectorAll('.type > h3')

const lengthConversion = (height) => {
    const inches = height*3.93
    const feet = Math.floor(inches / 12);
    const remainingInches = Math.round(inches % 12);
    return `${feet}' ${remainingInches}"`;
};



const fetchData = async()=>{
    const pokemonName = inputBox.value.toLowerCase();
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    try{
        const response = await fetch(endpoint)
        const data = await response.json()
        console.log(data);
        let pkmnid = data["id"].toString()
        audioPlay.setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pkmnid}.ogg`)
        if (pkmnid.length === 1){
            pkmnid = "00" + pkmnid
        }
        else if (pkmnid.length === 2){
            pkmnid = "0" + pkmnid
        }
        pokemonImage.setAttribute("src",`https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/${pkmnid}.png`)
        pkmnName.innerText = inputBox.value.toUpperCase()
        for(let i=0;i<6;i++){
            pokemonStats[i].innerText = data["stats"][i]["base_stat"]
        }
        pokemonId.textContent = `#${pkmnid}`
        for(let i=0;i<data.types.length;i++){
            pokemonType[i].textContent = data.types[i].type.name.toUpperCase()
            pokemonType[i].className = `${data.types[i].type.name}`
        }
        if(data.types.length === 1){
            pokemonType[1].textContent = "-"
            pokemonType[1].className = ""
        }
        pokemonHeight.textContent = `Height: ${lengthConversion(data["height"])}`
        pokemonWeight.textContent = `Weight: ${Math.round((data["weight"]/10)*2.20)} lbs`
        pokemonAbility.textContent = `Ability: ${data["abilities"][0]["ability"]["name"].toUpperCase()}`
        const pokemonDescResponse = await fetch(data.species.url)
        const pokemonDescription = await pokemonDescResponse.json()
        pokemonDescription.flavor_text_entries.forEach((item)=>{
            if (item["language"]["name"] == "en"){
                aboutData = item["flavor_text"]
            }
        });
        pokemonDesc.textContent = aboutData
        
        cryButton.addEventListener('click', function() {
            audioPlay.play();
        });
    } 
    catch(error){
        console.log(error);
        window.location.href = "errorpageindex.html";
    }
    
    inputBox.value = ""
}

searchButton.addEventListener('click',fetchData);
inputBox.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        fetchData();
    }
});

//functionality for the back-to-top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});