import { app, BrowserWindow } from 'electron';
import path from 'node:path';
import { registerIpcHandlers } from './services/ipcHandlers.js';
const isDev=!app.isPackaged;
function createWindow():void{ const win=new BrowserWindow({ width:1440,height:960,minWidth:1200,minHeight:760,show:false,backgroundColor:'#f1f5f9',webPreferences:{ preload:path.join(__dirname,'preload.js'), contextIsolation:true, nodeIntegration:false } }); win.once('ready-to-show',()=>win.show()); if(isDev){ void win.loadURL('http://localhost:5173'); } else { void win.loadFile(path.join(__dirname,'../dist/index.html')); } }
app.whenReady().then(()=>{ registerIpcHandlers(); createWindow(); app.on('activate',()=>{ if(BrowserWindow.getAllWindows().length===0) createWindow(); }); });
app.on('window-all-closed',()=>{ if(process.platform!=='darwin') app.quit(); });
