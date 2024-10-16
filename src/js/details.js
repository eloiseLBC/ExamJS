async function loadData(house = null){
    const url = new URL(document.location)
    const searchParams = url.searchParams;
    let name = searchParams.get("id");
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);
    // Récupérer l'id
    const caracters = await fetch("https://hp-api.onrender.com/api/characters/")
        .then(data => data.json());

    // Trouver le personnage correspondant au nom
    let caractere = caracters.find(char => char.name.includes(name));
    let id = caractere.id
    console.log(id)
    const perso = await fetch("https://hp-api.onrender.com/api/character/" + id)
        .then(data => data.json("https://hp-api.onrender.com/api/character/" + id))
        .then(perso => {
            let main = document.querySelector(".perso__right")
    main.innerHTML = ""

    main.innerHTML = `
        <div>
        <p class="attr">Gender</p>
        <p>${perso.gender}</p>
    </div>
    <div>
        <p class="attr">Eye</p>
        <p>${perso.eyeColour}</p>
    </div>
    <div>
        <p class="attr">Hair</p>
        <p>${perso.hairColour}</p>
    </div>
    <div>
        <p class="attr">Date of birth</p>
        <p>${perso.dateOfBirth}</p>
    </div>
    <div>
        <p class="attr">Patronus</p>
        <p>${perso.patronus}</p>
    </div>
    </div>
    `
            // MONSIEUR j'ai réussi à chopper les donner juste pas à les afficher avec le time :((((
        })
    console.log(perso)
    

}

loadData();