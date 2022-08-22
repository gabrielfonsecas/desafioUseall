function mediaTres(a,b,c){ 
let media
media = (a+b+c)/3
console.log(media)
}
mediaTres(2,6,9) 


function mediaNumeros(num){
let c = 0
if(num.length === 0){
    console.log("Desculpe, não há números para fazer uma média.")
}else{
    for(let i=0; i < num.length; i++){  
    c += num[i]
}
c = c/num.length
console.log(c)
}
}
mediaNumeros([1,2,3,4])