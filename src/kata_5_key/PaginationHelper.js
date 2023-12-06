class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection=collection
        this.itemsPerPage=itemsPerPage
        this.subarray = []; //массив в который будет выведен результат.
    }
    itemCount() {
return this.collection.length
    }
    pageCount() {
        return Math.ceil(this.collection.length/this.itemsPerPage)
    }
    pageItemCount(pageIndex) {

        for (let i = 0; i <Math.ceil(this.collection.length/this.itemsPerPage); i++){
            this.subarray[i] = this.collection.slice((i*this.itemsPerPage), (i*this.itemsPerPage) + this.itemsPerPage);
        }
        if(this.subarray[pageIndex]===undefined){
            return -1
        }
        if(pageIndex>this.subarray.length-1)
            return -1
        return this.subarray[pageIndex].length
    }
    pageIndex(itemIndex) {
        if(this.collection==''){
            return -1
        }
        if(itemIndex>this.itemCount()-1 || itemIndex<0)
            return -1
        return Math.ceil((itemIndex + 1)/this.itemsPerPage)-1
    }
}
//var helper = new PaginationHelper(new Array(50), 2);
var helper = new PaginationHelper([1], 2);
//var helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8], 1);
//var helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 2);
//var helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26,27,28,29,30,31,32,33], 30);
//var helper = new PaginationHelper([], 10)
console.log(helper.pageCount()) //сколько всего страниц
console.log(helper.itemCount()) //сколько всего элементов
console.log(helper.pageItemCount(0)) //количество элементов на текущей странице
console.log(helper.pageIndex(16)) //на какой странице находится элемент с индексом

