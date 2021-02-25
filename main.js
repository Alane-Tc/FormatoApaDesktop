const { app, BrowserWindow } = require('electron');

function crearVentanaPrincipal() {
    let ventanaPrincipal = new BrowserWindow({
        minWidth: 1200, maxHeight: 1400,
        show: false,
        icon: __dirname + `./src/public/img/logo.icns`,
        icon: __dirname + `./src/public/img/logo.ico`,
        webPreferences: {
            nodeIntegration: true
        }
    });
    ventanaPrincipal.maximize();
    ventanaPrincipal.show();
    ventanaPrincipal.title = 'Formato Apa'
    ventanaPrincipal.setMenu(null);
    ventanaPrincipal.loadFile(`src/index.html`); 
}

app.whenReady().then(crearVentanaPrincipal);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
        crearVentanaPrincipal();
    }
});