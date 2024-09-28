const MemeTitle = document.querySelector("  .Meme-Generator   .meme-title");
const MemeImg = document.querySelector(" .Meme-Generator    .meme-img");
const MemeAuthor = document.querySelector(" .Meme-Generator    .meme-author");
const memeGenerate = document.querySelector(" .Meme-Generator .btn");


const updateDetails=( url ,title, author) =>{
    MemeImg.setAttribute("src",url);
    MemeTitle.innerHTML= title;
    MemeAuthor.innerHTML=`Meme by :${author}`;
}


const generatememe =() =>{
    fetch("https://meme-api.com/gimme ")
    .then((response) => response.json())
    .then((data) => {
            updateDetails(data.url ,data.title ,data.author);
          }  )
};


memeGenerate.addEventListener("click", generatememe);
generatememe();
