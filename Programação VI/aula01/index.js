console.log('Exemplo callback')

setTimeout(function () {
    console.log('Executando tarefa 1.0!!!')
}, 2000)

setTimeout(() => console.log('Executando tarefa 2.0!!!'), 4000)

const func = () => console.log('Executando tarefa 3.0!!!')

setTimeout(func, 6000)

console.log('After setTimeout()')


console.log('Exemplo de Promise')

const prom = () => new Promise((res, rej) => {
   // res('Resolvida!!!')
    rej('Não Resolvida!!!')
})

//prom().then(data => console.log(data))
prom().catch(error => console.log(error))


const now = (new Date()).getMinutes()
//console.log(now)
const prom2 = () => new Promise((res, rej) => {
    if(now % 2 == 0) {
        res('Minuto PAR')
    }else {
        rej('Minuto ÍMPAR')
    }
})

prom2()
    .then(data => console.log(data))
    .catch(e => console.log(e))


console.log('Exemplo Async/Await')

const myFuturePromise = () => {
    return new Promise((res, rej) => {
        setTimeout(() => res('Resolvido em 5s'), 5000)
    })
}


const metAsyncAwait = async () => {
    console.log('Entrando exemplo async/await')
    await myFuturePromise().then(data => console.log(data))
    console.log('Saindo exemplo async/await')
}

metAsyncAwait()