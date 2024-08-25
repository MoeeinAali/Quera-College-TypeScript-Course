export function and(items : boolean[]) {
let booli = items[0];
items.forEach((item,index)=>{
    booli = booli && item;
})
return booli;
}
