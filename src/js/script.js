// async function loadData(){
//     const caracters = await fetch("https://hp-api.onrender.com/api/characters")
//         .then(data => data.json())
//         .then(caracteres => {

//             console.log(caracteres);

//         })
// }

let characters = document.querySelectorAll(".imgCharacters");

characters.forEach(image => {
    image.addEventListener("mouseover", function() {
        const imageName = image.src.split('/').pop();
        console.log(imageName);
        if (imageName.includes("cedric")){
            image.style.borderColor = "YELLOW";
        } else if (imageName.includes("cho")) {
            image.style.borderColor = "BLUE";
        } else if (imageName.includes("draco")) {
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