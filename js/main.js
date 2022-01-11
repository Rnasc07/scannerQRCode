// Inicialização da lib e vínculo ao elemento necessário
const scanner = new Instascan.Scanner({
    video: document.getElementById('preview'),
});

// Listener... toda vez que a cam fazer algun escaneamento
scanner.addListener('scan', content => {
    document.getElementById('infoCameras').innerHTML = content;
});

setTimeout(function(){

    // Capturando todas as cameras disponíveis
    Instascan.Camera.getCameras().then( cameras => {
        let conteudoParaInjetar = '';

        if(cameras.length > 0){
            cameras.forEach(function(item, index){
                conteudoParaInjetar += `ID Camera ${index}: ${item.name} <br>`;
            });

            document.getElementById('infoCameras').innerHTML = conteudoParaInjetar + "teste 7";

            scanner.start(cameras[2]);
        } else {
            document.getElementById('infoCameras').innerHTML = "Cameras não encontradas!";
        }

    }).catch(function (error) {
        document.getElementById('infoCameras').innerHTML = `Desculpe! Ocorreu o seguinte erro: ${error}`;
    });

}, 5000);

