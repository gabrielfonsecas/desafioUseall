# Teste básico de lógica de programação e JavaScript
<br>

# Questão 1

### **Qual o resultado desta expressão:** 

```
10 * 4 - 8 + 24 / 8
```
**Resultado:**

```
(10 * 4) - 8 + (24/8)
40 - 8 + 3
35
```
<br>

# Questão 2

### **Qual a diferença entre os operadores `==` e `===`? Quando usar um ou outro?**
<br>

Ambos são operadores de comparação.<br>
O operador: `==` compara apenas o valor sem destinção de tipo.<br>
O operador: `===` compara se o tipo e o valor são iguais.

<br>

# Questão 3

### **Observe atentamente o algoritmo a seguir:**

```js
var num =-1;
while(num <= 10){
    console.log(num)
    num += 0;
}
if(num > 10){
    console.log(num)
}
```
**O algoritmo possui um erro. Que erro é esse?**

a) Erro de compilação<br>
b) Loop Infinito<br>
c) Declaração incorreta de variáveis<br>
d) If sem else
 
**Resposta:**<br>
***b) Loop Infinito***

O contador começará a partir de -1, que foi o valor definido para `num`. Enquanto o valor de `num` for menor ou igual a 10 ele ficará na estrutura de repetição while. Ao somar o `num` com o valor zero, não há alteração de valor, portanto nunca atenderá a condição de parada do while.

<br>

# Questão 4

### **Analise o código e escreva qual o resultado será exibido ao lado da expressão `console.` :**

```js
var a = 3;

var minhaFuncao = function(numero) {
    numero = 9;
    return numero;
};

var novoNumero = minhaFuncao(a);

console.log(`novoNumero = ${novonumero}`);
console.log(`a = ${a}`);
```
**Resposta:**

```
novoNumero = 9
a = 3
```
<br>

# Questão 5

### **Analise o código e escreva qual o resultado será exibido ao lado da expressão `console.`:**

```js
var a = {
    nome: "Pedro"
};

var b = {
    nome: a.nome
};

console.info(a===b);
console.info(a.nome === b.nome);

a.nome = "Maria";

console.dir(a);
console.dir(b);

console.info(a.nome === b.nome);
```

**Saída do console:**
```json
false
true
{ nome: 'Maria' }
{ nome: 'Pedro' }
false
```
<br>

# Questão 6

### **Analise o trecho do código a seguir, e escreva qual o resultado das variáveis `x` e `y` ao final da execução:**
```js
int x = 10;
int y = 20;

x += x == 20 ? x/y : y/x; //linha 4
y -= y == 10 ? y/x : x/y; //linha 5
```

**Resposta:**


Na linha 4, o `x` vai receber ele mesmo somado a `y/x`, pois a condição do operador ternário resulta em falso, então `x=12`.

Na linha 5, o `y` vai receber ele mesmo subtraido a `x/y`, pois a condição do operador ternário resulta em falso, então `y=19,4`.

