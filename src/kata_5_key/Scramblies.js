function scramble(str1, str2) {
    str1 = str1.split('')
    str2 = str2.split('')
    debugger
    for(let i=0;i<str1.length;i++){
       //console.log( str1.includes(str2[i]))

        if(str2.includes(str1[i])){
             //str1.splice(b,1)
            //console.log(str2.filter(f)=>f=)
           //return console.log(true)
        }else return console.log(false)
    }
    return console.log(true)
}
scramble('scriptjavxfec',        'jvascript')// ==> True
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
