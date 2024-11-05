// MapController.js

const MapController = ((model, view) => {

    let isGeolocationEnabled = false;

    // Função que busca os hospitais baseados no procedimento selecionado
    const buscarHospitais = () => {
        const selectedProcedures = Array.from(document.querySelectorAll("input[name='procedimento']:checked"))
            .map(checkbox => checkbox.id);

        model.carregarHospitais().then(() => {
            const hospitals = selectedProcedures.flatMap(procedureId => model.getHospitalsByProcedure(procedureId));
            localStorage.removeItem("hospitaisFiltrados");
            localStorage.setItem("hospitaisFiltrados", JSON.stringify(hospitals));
            view.addHospitalMarkers(hospitals);
        });
    };

    // Função para inicializar o mapa e configurar geolocalização e busca
    const init = () => {
        setupToggleGeolocationButton();  // Chama a função para configurar o botão de geolocalização

        const initialPosition = { lat: -22.92799529134749, lng: -43.231810558948794 }; // Tecgraf
        const mapElementId = "map";
        const mapOptions = {
            zoom: 15,
            mapId: "DEMO_MAP_ID"
        };

        view.initMap(initialPosition, mapElementId, mapOptions);

        // document.getElementById("toggle-geolocation").addEventListener("click", getUserLocation);

         // Verifica se há hospitais salvos no localStorage
        const hospitaisSalvos = localStorage.getItem("hospitaisFiltrados");
        if (hospitaisSalvos) {
            const hospitals = JSON.parse(hospitaisSalvos);
            view.addHospitalMarkers(hospitals);
        }

 
        document.getElementById("btnBusca").addEventListener("click", buscaPorTexto);
    };

    // Função para obter a geolocalização do usuário e centralizar o mapa
    const getUserLocation = () => {
        if (isGeolocationEnabled && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userPosition = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    view.centerMap(userPosition);
                    new google.maps.Marker({
                        position: userPosition,
                        map: view.getMapInstance(),
                        title: "Minha localização",
                    });
                },
                () => {
                    alert("Erro ao obter localização. Verifique as permissões do navegador.");
                }
            );
        } else if (!navigator.geolocation) {
            alert("Geolocalização não é suportada neste navegador.");
        }
    };

    // Função para buscar locais por texto
    const buscaPorTexto = () => {
        const locationInput = document.getElementById("local").value;
        const service = view.getPlacesService();  // Obtém a instância do PlacesService da View
        const request = {
            query: locationInput,
            fields: ["name", "geometry"],
        };
        
        service.findPlaceFromQuery(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK && results) {
                const place = results[0];
                view.centerMap(place.geometry.location);

                view.meuLocalDePartida(place);

            } else {
                alert("Local não encontrado. Tente uma nova pesquisa.");
            }
        });
    };

    const setupToggleGeolocationButton = () => {
        const toggleButton = document.getElementById("toggle-geolocation")
        toggleButton.addEventListener("click", () => {
            isGeolocationEnabled = !isGeolocationEnabled;
            toggleButton.textContent = isGeolocationEnabled ? "Desativar Geolocalização" : "Ativar Geolocalização";
            getUserLocation();
        })
    }

    return {
        buscarHospitais,
        buscaPorTexto,
        getUserLocation,
        init
    };
})(MapModel, MapView);
