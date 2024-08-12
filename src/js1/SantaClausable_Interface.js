function isSantaClausable(obj) {
    // TODO
return console.log( 'function'==typeof (obj.sayHoHoHo && obj.distributeGifts && obj.goDownTheChimney) )

}
var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
};
var notSanta = {
    sayHoHoHo: function() { console.log('Oink fwefwefewOink!') },
    distributeGifts: function() { console.log('Giffwefwefts for all!'); },

    say_ho_ho_ho:7

    // no distributeGifts() and no goDownTheChimney()
};
isSantaClausable(santa)
// sayHoHoHo() / say_ho_ho_ho
// distributeGifts() / distribute_gifts
// goDownTheChimney() / go_down_the_chimney
