// // chave api
// /* AIzaSyAlcDBqiCO7sV_Uvtg4LxN0eTPO1KsAqOw */

// (g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});
//     var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>
//     {await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.
//     set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);
//     a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));
//     a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g)
//     :d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
//     key: "AIzaSyAlcDBqiCO7sV_Uvtg4LxN0eTPO1KsAqOw",
//     v: "weekly",
//     // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
//     // Add other bootstrap parameters as needed, using camel case.
//   });


// // Initialize and add the map
// let map;

// /*
//     A palavra-chave async em JavaScript indica que uma função é assíncrona. Isso significa que ela pode conter operações que levam tempo, 
//     como chamadas de API ou operações de leitura de arquivos, sem bloquear a execução do restante do código. Quando uma função é marcada como async, 
//     ela retorna automaticamente uma Promise, o que permite que você use await dentro dela para esperar pela resolução de outras Promises. 
// */

// async function initMap() {
//     // The location of Tecgraf
//     const position = { lat: -22.97799529134749, lng: -43.231810558948794 }; 
    
//     // Request needed libraries.
//     const { Map } = await google.maps.importLibrary("maps");
//     const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//     // The map, centered at Tecgraf
//     map = new Map(document.getElementById("map"), {
//         zoom: 15,
//         center: position,
//         mapId: "DEMO_MAP_ID",
//     });

//     /*
//     Níveis de zoom:
//         1: Mundo
//         5: terra ou continente
//         10: cidade
//         15: ruas
//         20: construções
//     */

//     // The marker, positioned at Uluru
//     const marker = new AdvancedMarkerElement({
//         map: map,
//         position: position,
//         title: "Tecgraf",
//     });
// }
