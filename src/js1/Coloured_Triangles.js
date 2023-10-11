function triangle(row) {
// let Return the answer
let result = ''
    if(row.length===1){
        console.log(row)
    }
    for(let i=0;i<row.length-1;i++){
        debugger
        if(row[i]===row[i+1]){
            result+=row[i]
        }else {
            result+='RGB'.replace(row[i],'').replace(row[i+1],'')
        }

    }
    if(result.length>1){
        return  triangle(result)
    }else return console.log(result)

}
triangle('BBR')