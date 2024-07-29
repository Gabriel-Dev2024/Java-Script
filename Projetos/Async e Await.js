function requestCar(drivers) {
    return new Promise((resolve, reject) => {
        if (drivers > 0) {
            return console.log('Seu motorista esta a caminho')
        }
            return console.log('Não há motoristas disponiveis')
    })
}

async function main() {
    let drivers = 0

    const request = await requestCar(drivers).catch(() => null)

    if (!request) {
        console.log('Error')
        return;
    }

    console.log(request)

    /*request
        .then((text) => {
            console.log('Promise concluida', text)
        })
        .catch((err) => {
            console.log('Promise rejeitada', err)
        })
        .finally(() => {
            console.log('Fim da Promessa')
        })*/
}
main()