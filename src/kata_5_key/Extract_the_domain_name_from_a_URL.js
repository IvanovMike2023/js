function domainName(url) {
    if (url.search('http://') != -1 && url.search('www.') === -1) {
        let prev = url.search('//')
        let result = url.substr(prev + 2, url.length)
        if (result.search('.co')) {
            let res2 = result.substr(0, result.search('.co'))
            console.log(res2)
        }

    } else if (url.search('http://') != -1 && url.search('www.') != -1 ) {
        let prev = url.search('www.')
        let result = url.substr(prev+4, url.length)
        if (result.search('.co')) {
            let res2 = result.substr(0, result.search('.co'))
            console.log(res2)
        }

    }else if (url.search('https://www.') != -1 ) {
        let prev = url.search('www.')
        let result = url.substr(prev+4, url.length)
        if (result.indexOf('.')!=-1 ) {
            let res2 = result.substr(0, result.indexOf('.'))
            console.log(res2)
        }

    }else if (url.search('www.') != -1 ) {
        let prev = url.search('www.')
        let result = url.substr(prev+4, url.length)
        if (result.search('.co')!=-1 || result.search('.ru')!=-1) {
            let res2 = result.substr(0, result.indexOf('.'))
            console.log(res2)
        }
    }else if (url.search('https://') != -1 ) {
        let prev = url.indexOf('https://')
        let result = url.substr(prev+8, url.length)
        if (result.indexOf('.')!=-1 ) {
            let res2 = result.substr(0, result.indexOf('.'))
            console.log(res2)
        }
    }else {
        if (url.indexOf('.')!=-1 ) {
            let res2 = url.substr(0, url.indexOf('.'))
            console.log(res2)
        }
    }
}

// domainName("http://google.com")
 domainName("www.xakep.ru")
// domainName("https://www.cnet.com")
// domainName("https://youtube.com")
// domainName("https://07n5qh62c3hyulw7.tv/error")
//domainName("https://www.5c619.edu/users")
domainName("64hfr3qo.net/archive/ ")
//
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
function domainName3(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
};