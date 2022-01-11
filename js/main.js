// Elemento de preview
const elCam = document.getElementById('videoCam');

// Inicialização da lib e vínculo ao elemento necessário
const scanner = new Instascan.Scanner({
    video: elCam,
});

// Listener... toda vez que a cam fazer algun escaneamento
scanner.addListener('scan', content => {
   console.log(content);
});

setTimeout(function(){

    // Capturando todas as cameras disponíveis
    Instascan.Camera.getCameras().then( cameras => {
        let conteudoParaInjetar = '';

        cameras.forEach(function(item, index){
            conteudoParaInjetar += `ID Camera ${index}: ${item.id} <br>`;
        });

        document.getElementById('infoCameras').innerHTML = conteudoParaInjetar;
    }).catch(function (error) {
        document.getElementById('infoCameras').innerHTML = `Desculpe! Ocorreu o seguinte erro: ${error}`;
    });

}, 5000);

