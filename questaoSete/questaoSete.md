Segundo o enunciado da questão:
>Menor que 18: `Abaixo do peso`<br>
>Menor que 25: `Peso normal`<br>
>Maior que 25: `Acima do peso`

O número 25 não se adequa em nenhum dos casos, pois em nenhum momento o enunciado deixa claro que alguma das categorias seja `IGUAL À 25`.

O `peso` deve ser em kilograma.

A `altura` deve ser em metros.

A variável `resultado` recebe a divisão de peso por altura².

```js
resultado = peso/(altura*altura)
```

O `.toFixed(2)` mostra apenas duas casas após a vírgula. Foi colocado junto ao `console.log`, para não ser necessário definir mais uma variável.

```js
console.log(`${resultado.toFixed(2)}`)
```
