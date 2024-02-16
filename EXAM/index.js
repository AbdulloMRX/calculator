const numberButtons = document.querySelectorAll('#tugmalar')
const windowT = document.getElementById('terminal')
const equal = document.getElementById('teng')
const edit = document.querySelectorAll("#manipulate")
const clear = document.querySelector("#clear")
const input = document.getElementById("input")
const medianb=document.getElementById('median')
const medianInput=document.getElementById('medianInput')
// console.log(Number(windowT.innerHTML)+5)
// let initialValue=''
let typedNumber = 0
let calculate = []
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        windowT.innerHTML = Number(windowT.innerHTML + button.innerHTML)
        typedNumber = Number(button.value)
        console.log(calculate)
    })
})

let editType = ''
edit.forEach(p => {
    p.addEventListener('click', () => {
        calculate.push(Number(windowT.innerHTML))
        windowT.innerHTML = p.innerHTML
        if (calculate[0] !== '/'||
            calculate[0] !== '*'||
            calculate[0] !== '+'||
            calculate[0] !== '-'
            && Number(calculate[0])
        ){
            console.log(calculate)
            editType = p.attributes.value.value
            console.log(editType)
            windowT.innerHTML = ''
        }
    })
})

clear.addEventListener('click', () => {
    calculate = []
    windowT.innerHTML = ''
    console.log(calculate)
})

equal.addEventListener('click', () => {
    if(!calculate[0]){
        windowT.innerText='iltimos avval qiymat kiriting!'
        calculate[0]
        return;
    }

calculate.push(typedNumber)
console.log(calculate)

    if (editType === 'divide') {
        let calculated = Number(calculate[0]) / calculate[1]
        calculate.pop()
        calculate.pop()
        calculate.push(calculated)
        windowT.innerHTML = calculate[0]
    }else if(editType==='plus'){
        let calculated = Number(calculate[0]) + calculate[1]
        calculate.pop()
        calculate.pop()
        calculate.push(calculated)
        windowT.innerHTML = calculate[0]

    }else if( editType ==='multiply'){
        let calculated = Number(calculate[0]) * calculate[1]
        calculate.pop()
        calculate.pop()
        calculate.push(calculated)
        windowT.innerHTML = calculate[0]
    }else if(editType==='minus'){
        let calculated = Number(calculate[0]) -calculate[1]
        calculate.pop()
        calculate.pop()
        calculate.push(calculated)
        windowT.innerHTML = calculate[0]
    }
})

let inputF = input.addEventListener('change', (e) => {
    windowT.innerHTML = e.target.value
    console.log(e.target.value)
})

let median=''
medianInput.addEventListener('change',(e)=>{
    windowT.innerHTML=e.target.value
    console.log(e)
    median=e.target.value
})

medianb.addEventListener('click',()=>{
    let medianSP=median.split(",")
    let length=medianSP.length
    if(length%2!==0){
        windowT.innerHTML= length/2+0.5
    }else if(length%2==0){
        windowT.innerHTML= `${length/2},${length/2+1}`
    }

})

const meanB=document.getElementById('mean')
const meanInput=document.getElementById('meanInput')

let mean=''
meanInput.addEventListener('change',(e)=>{
windowT.innerHTML=e.target.value
mean=e.target.value
})

meanB.addEventListener('click',()=>{
    let total=0
    let meanSP=mean.split(',')
    for(let ms of meanSP){
        let mn=Number(ms)
        total+=mn
    }
    console.log(total)
    windowT.innerHTML=total/meanSP.length
})

let rangeB=document.getElementById('range')
let rangeinput=document.getElementById('rangeInput')
let range=0

rangeinput.addEventListener('change',(e)=>{
    windowT.innerHTML=e.target.value
    range=e.target.value
})

let ranged=[]

rangeB.addEventListener('click',()=>{
    for(let i=1;i<=range;i++){
        ranged.push(i)
    }
    console.log(ranged)
})

const radicalB=document.getElementById('radical')
const radicalInput=document.getElementById('radicalInput')

let radical=0
radicalInput.addEventListener('change',(e)=>{
    windowT.innerHTML=e.target.value
    radical=e.target.value
})

radicalB.addEventListener('click',()=>{
    console.log(radical)

// for(let i=2;i<=radical;i++){
//     if(i*i==radical){
//         console.log(i)
//     }
// }
windowT.innerHTML= Math.sqrt(radical)
})

{/* <input type="number" id="multiplicant"/>
<input type="number" id="multiplicator"/>
<button id="powerButton"></button> */}

const multiplicant=document.getElementById('multiplicant')
const multiplicator=document.getElementById('multiplicator')
const powerButton=document.getElementById('powerButton')

let multiplicantOP=0
multiplicant.addEventListener('change',(e)=>{
    multiplicantOP=e.target.value
    windowT.innerHTML=String(e.target.value)
})

let multiplicatorOP=0
multiplicator.addEventListener('change',(e)=>{
    multiplicatorOP=e.target.value
    windowT.innerHTML+=`${e.target.value}`
})
let resultOfower=0
powerButton.addEventListener('click',()=>{
    resultOfPower=multiplicantOP
    for(let i=0;i<multiplicatorOP-1;i++){
        resultOfPower=resultOfPower*multiplicantOP
    }
    windowT.innerHTML=resultOfPower
})
factorial
let factorial=5
let result=1;
for(let i = 1;i<=factorial;i++){
    result*=i
}
console.log(result)