function likes(names) {
    let text = 'likes this'
    let text2 = 'like this'
    console.log(names=='')
    if(names==''){
        console.log('no one likes this')
    }
    else if(names.length===1) {
        console.log(names.toString() + ' ' + text)
    }else if(names.length===2){
        console.log(names[0].toString() + ' and ' +names[1].toString() +' ' + text)
    }else if(names.length===3){
        console.log(names[0].toString() +','+ names[1].toString() +' and ' +names[2].toString() +' ' + text)
    }else if(names.length>3){
        console.log(names.length-2)
        console.log(names[0].toString() +','+ names[1].toString() +` and ${names.length-2} others ` +' ' + text)
    }
    // TODO
}
likes([])
//                             -->  "no one likes this"
     //likes(["Peter"])        //                 -->  "Peter likes this"
//likes(["Jacob", "Alex"]) //                -->  "Jacob and Alex like this"
//likes(["Max", "John", "Mark"])//           -->  "Max, John and Mark like this"
//likes(["Alex", "Jacob", "Mark", "Max", "Max", "Mark", "Max", "Max"]) //  -->  "Alex, Jacob and 2 others like this"