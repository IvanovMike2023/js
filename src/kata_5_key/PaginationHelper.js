class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection=collection
        this.itemsPerPage=itemsPerPage
        this.subarray = []; //массив в который будет выведен результат.
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
    }
    itemCount() {
return this.collection.length
        // returns the number of items within the entire collection
    }
    pageCount() {
        return Math.ceil(this.collection.length/this.itemsPerPage)
        // returns the number of pages
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
       // console.log(this.subarray[pageIndex])
        return this.subarray[pageIndex].length
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
    }
    pageIndex(itemIndex) {
        console.log('cascsa')
        console.log(this.subarray.length)
        if(itemIndex>this.collection.length || itemIndex<=0)
            return -1

        return Number(this.subarray.map((m)=>m.indexOf(this.collection[itemIndex])).map((m,i)=>{
            if (m>0)
               return  i
        }).join(''))
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
    }
    //  console.log(collection, this.pageCount, this.itemCount, this.pages, this.lengthOfOnePage)
}
var helper = new PaginationHelper(new Array(50), 2);
//var helper = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50], 2);

//console.log(helper.pageCount())
//console.log(helper.itemCount())
console.log(helper.pageItemCount(3))
console.log(helper.pageIndex(3))

