async function loadData(){
    const caracters = await fetch("https://hp-api.onrender.com/api/characters")
        .then(data => data.json())
        .then(caracteres => {

            console.log(caracteres);

        })
}