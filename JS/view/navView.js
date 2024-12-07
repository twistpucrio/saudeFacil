const NavView = (() => {
    
    // Mensagem de erros
    const displayError = (message) => {
        document.getElementById('details').innerHTML = `<p>${message}</p>`;
    };

    //Display lista de hospitais
    const displayHospitalsNav = (hospitals) => {
        const displayHospitaisEncontrados = document.getElementById('displayHospitaisEncontrados');
        displayHospitaisEncontrados.innerHTML = ''; // Limpa antigo
        hospitals.forEach(hospital => {
            displayHospitaisEncontrados.innerHTML += `

                <a href="detalhesHospital.html?id=${hospital.id}" class="hospital-link">
                    <div id="hospital-${hospital.nome}" class="hospital-info" tabindex="0" onclick="addClickEventToDiv(hospital-${hospital.nome}, ${hospital.id});');">    
                    <h2>${hospital.nome}</h2>
                        <p><strong>Endereço:</strong> ${hospital.endereco}</p>
                    </div>
                </a>
            `;
        });
    };

    // Mostra ou esconde
    const alterarDropdown = (visible) => {
        const dropdown = document.getElementById('dropdown-localizacao');
        dropdown.style.display = visible ? 'block' : 'none';
    };

    // Atualiza valor do input
    const setInputValue = (value) => {
        document.getElementById('local').value = value;
    };


    

    return {
        displayError,
        displayHospitalsNav,
        alterarDropdown,
        setInputValue,
    };
})();