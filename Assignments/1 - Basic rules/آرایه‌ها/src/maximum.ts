export function maximum(items : number[]) {
let maxi = items[0];
items.forEach((item,index)=>{
    if(item > maxi){
        maxi = item;
    }
})
return maxi;
}