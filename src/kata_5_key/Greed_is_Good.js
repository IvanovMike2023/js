function score( dice ) {
    // Fill me in!
  //  console.log(dice.sort())
    dice=dice.sort()
    let res=0
    let count1=0
    let count2=0
    let count3=0
    let count4=0
    let count5=0
    let count6=0
    for(let i=0;i<5;i++){
        if(dice[i]===1){
            count1+=1
        }
        if(dice[i]===2){
            count2+=1
        }
        if(dice[i]===3){
            count3+=1
        }
        if(dice[i]===4){
            count4+=1
        }
        if(dice[i]===5){
            count5+=1
        }
        if(dice[i]===6){
            count6+=1
        }
    }
    if(count5>2){
        res+=500
    }
    if(count6>2){
        res+=600
    }
    if(count4>2){
        res+=400
    }
    if(count3>2){
        res+=300
    }
    if(count2>2){
        res+=200
    }
    if(count1>2){
        debugger
        count1-=3
        res+=1000
        if(count1>0){
            count1-=1
            res+=100
        }
    }
    if(count1>1<3){
        res+=100*count1
    }
    if(count5===1){
        res+=50
    }
}
score( [1, 1, 1, 1, 3]) //"Should be 450"

//
// Three 1's => 1000 points 3
// Three 6's =>  600 points 18
// Three 5's =>  500 points 15
// Three 4's =>  400 points 12
// Three 3's =>  300 points 9
// Three 2's =>  200 points 6
// One   1   =>  100 points
// One   5   =>   50 point