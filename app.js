let adviceNumber = document.querySelector("span")
let adviceParrafo = document.querySelector(".advice-parrafo")
const btnChanger = document.querySelector(".btn-change")

btnChanger.addEventListener('click', () => {
   location.reload(true)

})

const getAdvice = async () => {
    try {
        const res = await fetch("https://api.adviceslip.com/advice")
        const data = await res.json()
        printAdvice(data)
        console.log(data)
    } catch (error) {
        console.log(error)
        
    }

}

getAdvice()


const printAdvice = (data) => {
    Object.values(data).forEach(e => {
    adviceNumber.textContent = e.id
    adviceParrafo.textContent = '"' + e.advice + '"'
    


    })

}