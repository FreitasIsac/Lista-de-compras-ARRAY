/* let frutas = [ "manga", "laranja" ]

/* frutas.push("maçã")

frutas.unshift("uva")

frutas.pop()

frutas.shift()

frutas.splice(1,1) */

/* const user = prompt("Qual fruta deseka deletar?")

const deleteFruta = frutas.indexOf(user) */



/* console.log(deleteFruta,1) */  

alert ("Digite uma lista de compras: ")


var lista = []

var res = document.querySelector(".res")
var input = document.querySelector("#item")
var btn = document.querySelector("#btn")

function addItem(){
    res.innerHTML = ""
    var valueItem = input.value

    lista.push(valueItem)
    lista.map((item) => {
        const li = document.createElement("li")
        li.innerHTML = item
        
        res.appendChild(li)
        
        var lis = document.querySelectorAll("li")
    })
    input.value = ""

    
}


btn.addEventListener("click", addItem)