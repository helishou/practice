/*
 * @Author       : helishou
 * @Date         : 2021-08-08 20:53:07
 * @LastEditTime : 2021-08-08 21:40:55
 * @LastEditors  : helishou
 * @Description  : 
 * @FilePath     : f:\桌面\front do\Webpack进阶\插曲-测试\ajax.js
 * 你用你的指尖,阻止我说再见,在bug完全失去之前
 */
const ajax=(url)=>{
    return new Promise((rs,rj)=>{
        const xhr=new XMLHttpRequest()
        xhr.open('get',url);
        xhr.setRequestHeader('accept','application/json')
        xhr.onreadystatechange=()=>{
            if(xhr.readyState==4&&xhr.status===200){
                rs(xhr.responseText)
                //返回一个 DOMString，该 DOMString 包含对请求的响应，如果请求未成功或尚未发送，则返回 null。
            }else if(xhr.readyState==4){
                rj(new Error(xhr.responseText))
            }
        }
        xhr.send()
    })
}