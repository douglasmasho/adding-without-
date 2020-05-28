
function add (x, y){
    let a = x ^ y;
    let b = (x & y) << 1;
    // console.log(a);
    // console.log(b);
    // console.log(a^b, (a&b) << 1)
    // if(b !== 0){
    //     add(a,b);
    //     console.log(2)
    // }else{
    //     console.log(1);
    //     console.log(3)
    //     return a ^ b;
    // }
    if(b === 0){
        // return a;
        console.log(a)
    }else{
        add(a,b);
    }
}