# JavaScript I - Aula 02
## 📄 Atividade 01 - Loops em JS
Aluno: Cleverson Guandalin

---
# Avaliar elementos de um array

**array 'numerosDaSorte'**

```javascript
numerosDaSorte = [37, 14, 26, 5, 94, 87] 
```

**Condições:**
- X é par e menor que 50
- X é menor que 50
- X é maior que 50

## Código desenvolvido:
```javascript
const numerosDaSorte = [37, 14, 26, 5, 94, 87];

for(let i = 0; i < numerosDaSorte.length; i++) {
    let num = numerosDaSorte[i];
    if(num % 2 === 0 && num < 50) {
        console.log(num + " é par e menor que 50");
    } else if(num < 50) {
        console.log(num + " é menor que 50");
    } else {
        console.log(num + " é maior que 50");
    }
} 
```

---
