function populateUFs () {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json() ) /* também poderia ser (res) => { return res.json() }) */
    .then(states => {
        for( const state of states) {
            ufSelect.innerHTML +=  `<option value="${state.id}">${state.nome}</option>` /*crase serve p interpolar*/
        }
        
    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("select[name=city]")
    const stateSelect = document.querySelector("select[name=state]")
    const  ufValue = event.target.value

    const indexOfSelectdState = event.target.selectedIndex

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then(res => res.json() ) /* também poderia ser (res) => { return res.json() }) */
    .then(cities => {
        for( const city of cities) {
            citySelect.innerHTML +=  `<option value="${city.id}">${city.nome}</option>` /*crase serve p interpolar*/
        }
        citySelect.disabled = false        
    } )
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)
