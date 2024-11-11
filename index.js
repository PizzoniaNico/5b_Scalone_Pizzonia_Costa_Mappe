const Div = document.getElementById("form");
//parte fatta da costa
let places = [
    {
       name: "Piazza del Duomo",
       coords: [45.4639102, 9.1906426]
    },
    {
       name: "Darsena",
       coords: [45.4536286, 9.1755852]
    },
    {
       name: "Parco Lambro",
       coords: [45.4968296, 9.2505173]
    },
    {
       name: "Stazione Centrale",
       coords: [45.48760768, 9.2038215]
    }
 ];
 let zoom = 12;
 let maxZoom = 19;
 let map = L.map('map').setView(places[0].coords, zoom);
 // fino a qua parte costa

const Form = (Div) => {
    return {
        render: (conf) => {
            Div.innerHTML = 
                Luogo<input id="nome" type="text"/>+
                <button id="Cerca" type="button">Cerca</button>
            document.querySelector("#Cerca").onclick = () => {
                const nome = document.querySelector("#nome").value;
                add(nome,conf);                
            }
        }
    }
} 

// inizio costa
function render2(){

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: maxZoom,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);
 places.forEach((place) => {
    const marker = L.marker(place.coords).addTo(map);
    marker.bindPopup(<b>${place.name}</b>);
 });
}
//fine costa

function add(nome,conf){
    let url="https://us1.locationiq.com/v1/search?key=%TOKEN &q=%NOME &format=json&"
    url = url.replace("%TOKEN",conf.token)
    url = url.replace("%NOME",nome)
    fetch(url)
    .then(r => r.json())
    .then(data => {
        const config ={
            name: nome,
            coords: [data[0].lat, data[0].lon]
        }
        map.setView(config.coords, zoom);
        places.push(config);
        render2()
    })
}

fetch("conf.json").then(r => r.json()).then(conf => {
    const form = Form(Div);
    form.render(conf)
    render2()
})
