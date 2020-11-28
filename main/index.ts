import { app, BrowserWindow } from 'electron';
import * as path from 'path';

var Hexo = require('hexo');
var hexo = new Hexo('/Users/Admin/projects/test-blog', {});

hexo.init().then(function(){
    console.log('initialize')
});

app.on('ready', () => {
    console.log('App is ready');

    const win = new BrowserWindow({
        width: 600,
        height: 400
    });

    const indexHTML = path.join(__dirname + '/index.html');
    win.loadFile(indexHTML).then(() => {
        // IMPLEMENT FANCY STUFF HERE
    }).catch(e => console.error(e));
});
