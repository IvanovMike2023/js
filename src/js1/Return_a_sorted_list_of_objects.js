function sortList (sortBy, list) {
 return console.log(list.sort( (a,b)=>a[sortBy]<b[sortBy]? 1: -1))
}
sortList('a',[
    {"a": 1, "b": 3},
    {"a": 3, "b": 2},
    {"a": 2, "b": 40},
    {"a": 4, "b": 12}
])
