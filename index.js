console.log("Hello World")
let minion1="Kevin",minion2="Bob"
const jefe="Gru"
console.log(minion1,minion2)
console.log(jefe)



let Gru={
    nombre:"Jose",
    edad:30,
    }
console.log(Gru.nombre)
Gru.nombre="Gru"
console.log(Gru)
console.table(Gru)
let GruStr=JSON.stringify(Gru)
let GruObj=JSON.parse(GruStr)





let lista= ["carne","papel","lechuga"]
console.log(lista)
console.log(lista[1])
console.log(lista.length)
lista.push("Rucula")
console.log(lista)
lista.unshift("Pan")
console.log(lista)
lista.pop()
lista.shift()
console.log(lista)
lista.splice(2,1,"Ropa")
console.log(lista)






function buenas(nombre,apellido) {
    console.log("Hola "+nombre+" "+apellido)
}
buenas("Gru","Zapiola")
buenas("Bob")




function cuadratica(a,b,c){
    let x1=(b+((((-b)**2)-4*a*c)**0.5))/2*a
    console.log("X1= "+x1)
    let x2=(b-((((-b)**2)-4*a*c)**0.5))/2*a
    console.log("X2= "+x2)
}
cuadratica(-1,-2,3)









const estudiantes=[
    est1={
        nombre:"Martin",
        edad:20,
    },
    est2={
        nombre:"Jose",
        edad:32
    },
    est3={
        nombre:"Walter",
        edad:12
    }
]
console.log(estudiantes[2])
console.table(estudiantes[1])

