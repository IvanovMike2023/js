function remove (string) {
    console.log(string.split(' ').filter((f)=> !f.match(/[!]/g) || f.match(/[!]/g).length>1).join(' '))
    console.log(string.split(' ').filter((f)=> f.split('!').length!=2).join(' '))
    return string.split(' ').filter((f)=>f!='Hi!').join();
}

 remove("!bpb! !iglu !ldszi oic msihqbd !ksmorsn !tgth! pbcwex! skjf !bxyx")
//remove("Hi! !Hi Hi!") === ""
//remove("!!Hi! !Hi Hi! Hi!!") //=== "Hi!!"
 //remove("Hi! !Hi! Hi!") === "!Hi!"
//: expected '!bpb!,oic,msihqbd,!tgth!,skjf' to equal '!bpb! oic msihqbd !tgth! skjf'