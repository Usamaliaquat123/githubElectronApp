const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const isDev = require('electron-is-dev')


let mainWindow

    
createWindow = async () => {
    mainWindow = new BrowserWindow({ width: 900, height: 680 })
    mainWindow.loadURL(isDev ? `http://localhost:3000`: `file://${path.join(__dirname,'../build/index.html')}`)
    mainWindow.on('closed',() => mainWindow = null)
}


app.on('ready',createWindow)

app.on('window-all-closed',() => {
    if(process.platform !== `darwin`) app.quite()
})

app.on('activate',() => {
    if(mainWindow === null){
        createWindow()
    }
})