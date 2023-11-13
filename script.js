const addButton = document.querySelector('input.addButton')
const num = document.getElementById('number')
const lis = document.getElementById('select')
const finishButton = document.getElementById('finishButton')
const resetButton = document.getElementById('resetButton')
let values = []

function isNum(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

function inList(n, l) {
    return l.indexOf(Number(n)) !== -1;
}

function toAdd(){
    if(isNum(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Value ${num.value} added.`
        lis.appendChild(item)
        res.innerHTML = ""
    }else {
        alert('Invalid value or already found in the list!!!')
    }
    num.value = ""
    num.focus()
}
 
function finish() {
    if(values.length == 0){
        alert('Add values to finish')
    }else{
        let total = values.length
        let max = Math.max.apply(null, values )
        let min = Math.min.apply(null, values )

        let sum = 0
        for(let i = 0; i < values.length; i++){
            sum += values[i]
        }

        let media = 0
        media = sum / total

        res.innerHTML = ''
        res.innerHTML += `<p>In total, we have ${total} numbers registered.</p>`
        res.innerHTML += `<p>The highest value is ${max} and the lowest value is ${min}.</p>`
        res.innerHTML += `<p>The total sum is ${sum}</p>`
        res.innerHTML += `<p>The average is ${media}</p>`
    }
}

function reset (){
    lis.innerHTML = ''
    res.innerHTML = ''
    values = []
    
}

addButton.addEventListener('click', toAdd)
finishButton.addEventListener('click', finish)
resetButton.addEventListener('click', reset)
