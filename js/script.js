
  const { BrowserWindow, app } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
      width: 280,
      height: 280,
      setMinimizable: false,
     
    })
  
    win.loadFile('index.html');
    win.setAlwaysOnTop(true, 'floating');
    win.setFullScreenable(false),
    win.setMaximizable(false),
    win.setResizable(true),
    win.show();
  }

  app.whenReady().then(() => {
    createWindow()
  })