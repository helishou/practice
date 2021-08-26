/*
 * @Author       : helishou
 * @Date         : 2021-07-13 23:46:18
 * @LastEditTime : 2021-07-13 23:47:10
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\下载图片.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
var request = require('request')
var fs = require('fs')
var path = require('path')

const dirname = 'uploadImages'
const hostdir = "./public/mito/"
function mkdirSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirname))) {   
            fs.mkdirSync(dirname);
            return true;
        }
    }
    return false
}

function downloadUrl(urlList) {
    for (const url of urlList) {
      const first = url.indexOf(dirname)
      const last = url.lastIndexOf('/')
      if (first > 0 && last > 0) {
        const name = url.substr(last + 1)
        const dir = url.substr(first, last - first)
        const dstpath = hostdir + dir + '/' + name
        if (name.length && dir.length && !fs.existsSync(dstpath)) {
          if (mkdirSync(hostdir + dir)) {
            console.log(dstpath)
            request(url).pipe(fs.createWriteStream(dstpath))
          }
        }
      }
    }
}
downloadUrl(['http://img.netbian.com/file/2021/0708/small328c217f576e240194847ad9c56e73741625753341.jpg']) 

