# Questão 8

# function mediaTres:
Essa função serve para calcular a média simples entre três valores quaisquer.

A função `mediaTres` receberá os valores `a`, `b`, `c`.

A variável `media` será atribuída ao resultado da soma de `a+b+c` dividido por `3`:

```
media = (a+b+c)/3
```

Para chamar a função deve-se inserir fora dos `{}` da função, o nome da dela e nos parênteses deve conter três valores separados por virgulas, conforme o exemplo da Linha 6.

```js
function mediaTres(a,b,c){ 
let media
media = (a+b+c)/3
console.log(media)
}
mediaTres(2,6,9) //linha 6
```
<br>

# function mediaNumeros
Essa função recebe nenhum ou vários valores e calcule a média simples.

Defini-se o valor 0 para `c`.<br>
Inicia-se um condicional **if**: Se o número de elementos do array for vazio então será gerado um log:`("Desculpe, não há números para fazer uma média.")`.

```js
let c = 0
if(num.length === 0){
    console.log("Desculpe, não há números para fazer uma média.")
}else{
    for(let i=0; i < num.length; i++){  
    c += num[i]
}
```

Caso possua números no array, então será iniciado o condicional **for**:<br>
O `contador(i)`  `i` partirá do 0.<br>
A condição de parada será quando o `contador(i)`  atingir o número de elementos da array.<br>
A cada loop o `contador(i)` somará 1 em sua contagem.

```js
for(let i=0; i < num.length; i++){  
c += num[i]
```

`c` atribui o valor da array na posição do `contador(i)`  somando com seu antigo valor.<br>
Após o `contador(i)` ter o mesmo valor do total de elementos da array, o condicional **for** encerra.<br>
`c` recebeu a soma de todos os valores da array.

Atribui-se a `c` o valor da soma dos elementos dividido pelo número total de elementos da array:
```
c = c/num.length
```
Para chamar a função deve-se inserir fora dos `{}` da função, o nome da dela e nos parênteses deve conter três valores separados por virgulas, conforme o exemplo:
```
mediaNumeros([1,2,3,4])
```