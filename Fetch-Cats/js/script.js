const btnElem = document.getElementById("btn");

const outputElem = document.querySelector(".outputCats");

btnElem.addEventListener("click", () =>{
    const url = "../json/cats.json";

    fetch(url)
     .then(res => res.json())
     .then(json => {
        //console.log(json);
        json.forEach(function(val) {
            //ALT kode indsats her
            const catContainer = document.createElement("div");    
            // Tilføj en attribut til vores catContainer
            catContainer.classList.add("cat-container");

            const catItem = document.createElement("div");
            // Tilføj en attribut til vores catItem
            catItem.classList.add("cat-Item");

            //Oprette et img-element til katen
            const catImage = document.createElement("img");
            // Tilføj en attribut til vores catImage
            catImage.classList.add("cat-Image");
            
            // Tilføj en attribut til vores catImage
            catImage.src = `${val.image_url}`;//brugt shift til at finde den her tegn `
            catImage.alt = `${val.name}${val.breed}`;

            //Opretter Unordered list med list items
            //....og tilføjer kat-info til list-items

            const catInfo = document.createElement("ul");

            catInfo.innerHTML =
            `
            <li>${val.name}${val.breed}</li>
            <li>weather:${val.weather}</li>
            <li>image:${val.image}</li>  
            `;


            catItem.appendChild(catImage);
            catItem.appendChild(catInfo);

            catContainer.appendChild(catItem);

            outputElem.appendChild(catContainer);

        })

     })
});