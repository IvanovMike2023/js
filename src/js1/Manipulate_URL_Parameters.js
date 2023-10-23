/**
 * Play with URLs
 * @param {string} url - The URL that's we want to manipulate
 * @param {string} param - The parameter that we want to change or add
 * @returns {string} The result URL.
 */
function addOrChangeUrlParameter (url, param) {
   param=param.split('=')
    console.log(param)
    if(url.indexOf(param[0])===-1 && url.indexOf('?')===-1){
        console.log(url+'?'+param.join('='))
    }
    else if(url.indexOf(param[0])===-1 && url.indexOf(param[1])===-1 && url.indexOf('?')!=-1){
        console.log(param.length)
        if(param.length===1){
            console.log(url + '&' + param[0])
        }
        console.log(url + '&' + param[0]+'='+param[1])

    }
    else if(url.indexOf(param[0])!=-1 && url.indexOf(param[1])===-1 && url.indexOf('?')!=-1) {
        let mas = url.split('?')
        console.log('param.split()')
        let r = mas.splice(1, 1, param.join('='))
        console.log(mas.join('?'))
    }
    else if(param==''){
        console.log(url)
    }
}

//addOrChangeUrlParameter("www.example.com", "key=value")
//addOrChangeUrlParameter("http://example.com", "ID=1234")
//addOrChangeUrlParameter("http://xxx.ample.com", "")
//addOrChangeUrlParameter("http://example.com?Name=Allan", "ID=1234")
// -> 'www.example.com?key=value' (adds a parameter).

//addOrChangeUrlParameter("www.example.com?key=value", "key2=value2" )
// -> 'www.example.com?key=value&key2=value2' (adds another parameter).

addOrChangeUrlParameter("www.example.com?key=oldValue", "" )
// ->'www.example.com?key=newValue' (changes the parameter).