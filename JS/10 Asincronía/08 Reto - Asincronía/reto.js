async function obtenerDatos() {
    try {
        console.log('Iniciando solicitud a la api')
        await fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
            if(json !== null) {
                console.log('Datos obtenidos correctamente de la Api ...:', json);
            }else {
                console.log('Error')
            }
            
        })
        .catch(error => console.error('!ERROR¡: ', error));
    }catch {

    }

}
obtenerDatos();