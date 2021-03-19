window.onload = function () {
  createStates();
}

let states = document.getElementById('state');
function createStates() {
  let stateOptions = [ 'Selecione seu Estado', 'Acre (AC)', 'Alagoas (AL)', 'Amapá (AP)', 'Amazonas (AM)', 'Bahia (BA)', 'Ceará (CE)', 'Distrito Federal (DF)', 'Espírito Santo (ES)', 'Goiás (GO)', 'Maranhão (MA)', 'Mato Grosso (MT)', 'Mato Grosso do Sul (MS)', 'Minas Gerais (MG)', 'Pará (PA)', 'Paraíba (PB)', 'Paraná (PR)', 'Pernambuco (PE)', 'Piauí (PI)', 'Rio de Janeiro (RJ)', 'Rio Grande do Norte (RN)', 'Rio Grande do Sul (RS)', 'Rondônia (RO)', 'Roraima (RR)', 'Santa Catarina (SC)', 'São Paulo (SP)', 'Sergipe (SE)', 'Tocantins (TO)'];
  let value = 1;   
    for (let index = 0; index < stateOptions.length; index += 1) {
      let options = document.createElement('option');
      states.appendChild(options).innerText = stateOptions[index];
      states.appendChild(options).value = stateOptions[index];
  }
}


