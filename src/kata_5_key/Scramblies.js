function scramble(str1, str2) {
    str2 = str2.split('')
    str1 = str1.split('')
    let counter=0
str2.forEach((x)=>{
    if(str1.indexOf(x)>-1){
        counter+=1
        str1.splice(str1.indexOf(x),1)
    }
})
    return counter===str2.length ? true : false
}
scramble('scriptingjava',     'ajvascript' )// ==> True
//scramble('ssssssscript',     'ascript' )// ==> True
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
