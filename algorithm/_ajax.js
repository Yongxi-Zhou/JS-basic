function ajax(url) {
    return new Promise((resolve, reject) => {
        //先看有没有XMLHttpRequest
        const xhr = XMLHttpRequest? new XMLHttpRequest(): new ActiveXObject('Microsoft.XMLHttp')

        //GET请求，send不用传参数, 
        //xhr.open(method,url,async);  
        // async：true（异步）或 false（同步） 
        xhr.open('GET', url, true)
        xhr.onreadystatechange = function() {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    // ????
                    resolve(JSON.parse(xhr.responseText))
                } else if (this.status === 400 || this.status === 500) {
                    reject(new Error("404 not found"))
                }
            }
        }
        xhr.send(null)
    })
}

ajax("https://rapserver.sunmi.com/app/mock/395/GET/%2Findex%2Flist")
.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})
