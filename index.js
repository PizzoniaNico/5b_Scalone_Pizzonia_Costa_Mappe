const Div = document.getElementById("form");
const Form = (Div) => {
    return {
        render: (conf) => {
            //creazione input
            Div.innerHTML = 
                Luogo<input id="nome" type="text"/>+
                <button id="Cerca" type="button">Cerca</button>
            //lettura valori inseriti
            document.querySelector("#Cerca").onclick = () => {
                const nome = document.querySelector("#nome").value;
            }

        }
    }
} 
