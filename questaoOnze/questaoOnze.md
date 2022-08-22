Basicamente, para entregar o menor número de notas, é necessário que a entrega sempre comece pelo maior valor, que neste caso segue a ordem R$100, R$50, R$20 e R$10, então:

Dentro de cada um dos If's existem outros If's seguindo a ordem acima.

## Maior ou igual R$100

<ul>
<li>Se o valor a ser sacado for maior ou igual a R$100, o programa divide o valor desejado por 100, e caso haja números quebrados na divisão o sistema ignora, armazenando somente o valor inteiro.</li>
<li>No próximo passo o sistema pega o total a ser recebido e armazena o resto da divisão na variável "valor".</li>
<li>O terceiro passo para finalizar esta estrutura condicional é exibir quanta notas de R$100 são necessárias.</li>
</ul>

```js
if (valor >= 100) {
    saque = Math.trunc(valor / 100)
    valor = valor % 100
    console.log(`${(saque)} nota(s) de R$100`)
```
>Obs.: Caso o valor seja menor que 100, irá para algum dos else if: maior igual a 50, maior igual a 20 ou igual a 10

<br>

## Maior ou igual R$50 (Dentro do condicional >= 100)

<ul>
<li>Esta estrutura condicional está dentro do condicional maior ou igual a R$100.</li>
<li>Caso a variável "valor", que recebeu o resto da divisão, seja maior ou igual a R$50, então, será divido por 50, esse valor será atribuído a variável "saque". </li>
<li>A variável "valor" que armazena o resto da divisão por 100, passará a receber um novo resto de divisão, agora por 50.</li>
<li>Por fim, o console.log irá exibir a quantidade necessária de notas de R$50.</li>
</ul>

```js
if (valor >= 50) {
    saque = Math.trunc(valor / 50)
    valor = valor % 50
    console.log(`${(saque)} nota(s) de R$50`)
```
>Obs.: Caso o valor seja menor que 50, irá para algum dos else if: maior igual a 20 ou igual a 10

<br>

## Maior ou igual R$20 (Dentro do condicional >= 100 dentro do condicional >= 50)

<ul>
<li>Esta estrutura condicional está dentro do condicional maior ou igual a R$50.</li>
<li>Caso a variável "valor", que recebeu o resto da divisão, seja maior ou igual a R$20, então, será divido por 20, esse valor será atribuído a variável "saque". </li>
<li>A variável "valor" que armazena o resto da divisão por 50, passará a receber um novo resto de divisão, agora por 20.</li>
<li>Por fim, o console.log irá exibir a quantidade necessária de notas de R$20.</li>
</ul>

>Obs.: Caso o valor seja menor que 20, irá para o else if: igual a 10

<br>

```js
if (valor >= 20) {
    saque = Math.trunc(valor / 20)
    valor = valor % 20
    console.log(`${(saque)} nota(s) de R$20`)
```

<br>

## Maior ou igual R$10 (Dentro do condicional >= 100,dentro do condicional >= 50, dentro do condicional >= 20)

<ul>
<li>Esta estrutura condicional está dentro do condicional maior ou igual a R$100.</li>
<li>Caso a variável "valor", que recebeu o resto da divisão, igual a R$10, então, será divido por 10, esse valor será atribuído a variável "saque". </li>
<li>Por fim, o console.log irá exibir a quantidade necessária de notas de R$50.</li>
</ul>

```js
else if (valor == 10) {
    saque = valor / 10
    console.log(`${saque} nota(s) de R$10`)
```

Este foi um exemplo simples; pois no if >= 100 existem 3 else if: >=50, >=20 e ==10; nesses casos, para cada if deve existir outros else if; E no if >= 50 existem 2 else if: >=20 == 10; E no if >=20 existe um else if: == 10; E assim sucessivamente.