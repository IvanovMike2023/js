function scramble(str1, str2) {
    debugger
    console.log(str1.split(str2[2],1).join(''))
    for(let i=0;i<str2.length;i++){
        console.log(str1.length)
        console.log(str1)
        if(str1.indexOf(str2[i])>-1){
        str1= str1.replace(str2[i],'')
        }else return console.log(false)
    }
    return console.log(true)
}
scramble('scriptjavx',        'jvascript')// ==> True
//     ..Array.prototype.diff = function(a) {
//     return this.filter(function(i) {return !(a.indexOf(i) > -1);});
// };
// assert.strictEqual(scramble('rkqodlw',           'world'      ), true );
// assert.strictEqual(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
// assert.strictEqual(scramble('katas',             'steak'      ), false);
// assert.strictEqual(scramble('scriptjavx',        'javascript' ), false);
// assert.strictEqual(scramble('scriptingjava',     'javascript' ), true );
// assert.strictEqual(scramble('scriptsjava',       'javascripts'), true );
// assert.strictEqual(scramble('javscripts',        'javascript' ), false);
// assert.strictEqual(scramble('jscripts',          'javascript' ), false);
// assert.strictEqual(scramble('aabbcamaomsccdd',   'commas'     ), true );
// assert.strictEqual(scramble('commas',            'commas'     ), true );
// assert.strictEqual(scramble('sammoc',            'commas'     ), true )
