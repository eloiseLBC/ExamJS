async function loadTwelveCaracteres(){
    const caracters = await fetch("https://hp-api.onrender.com/api/characters")
        .then(data => data.json())
        .then(caracteres => {
            let i = 0;
            
            while (i < 12){
                for (let caractere of caracteres){}
                let itemElement = document.createElement("div");
                console.log(caracteres[i]);
                itemElement.className = "characters"
                console.log(itemElement.image);
                itemElement.innerHTML = "<img src='"+ caracteres[i].image+"' class='imgCharacters'></img>"                
                document.querySelector(".characters").appendChild(itemElement);
                i++;
            }

            let characters = document.querySelectorAll(".imgCharacters");

characters.forEach(image => {
    image.addEventListener("mouseover", function() {
        const imageName = image.src.split('/').pop();
        console.log(imageName);
        if (imageName.includes("cedric")){
            image.style.borderColor = "YELLOW";
        } else if (imageName.includes("cho") || imageName.includes("luna")) {
            image.style.borderColor = "BLUE";
        } else if (imageName.includes("draco") || imageName.includes("snape")) {
            image.style.borderColor = "GREEN"
        } else {
            image.style.borderColor = "RED";
        }        
    });
    image.addEventListener("mouseout", function(){
        image.style.borderColor = "";
    })

    image.addEventListener("click", function(){
        console.log("gihi");
    })
});
        
})
}


function createHouses(){
    let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    
}



loadTwelveCaracteres();