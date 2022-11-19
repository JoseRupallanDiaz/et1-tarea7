export function getSum(request, response) {
    const number1 = request.body.number1
    const number2 = request.body.number2
    let msg
    if (!isNaN(number1)) {
        if(!isNaN(number2)){
            const result = {
                result: number1 + number2
            }
            return response.status(200).send(result)
        } else {
            msg = "number2 debe ser un numero"
        }
    } else {
        msg = "number1 debe ser un numero"
    }
    return response.status(400).send(msg)
}

export function getSubstraction(request, response) {
    const number1 = request.body.number1
    const number2 = request.body.number2
    let msg
    if (!isNaN(number1)) {
        if(!isNaN(number2)){
            const result = {
                result: number1 - number2
            }
            return response.status(200).send(result)
        } else {
            msg = "number2 debe ser un numero"
        }
    } else {
        msg = "number1 debe ser un numero"
    }
    return response.status(400).send(msg)
}

export function getMultiplication(request, response) {
    const number1 = request.body.number1
    const number2 = request.body.number2
    let msg
    if (!isNaN(number1)) {
        if(!isNaN(number2)){
            const result = {
                result: number1 * number2
            }
            return response.status(200).send(result)
        } else {
            msg = "number2 debe ser un numero"
        }
    } else {
        msg = "number1 debe ser un numero"
    }
    return response.status(400).send(msg)
}

export function getDivision(request, response) {
    const number1 = request.body.number1
    const number2 = request.body.number2
    let msg
    if (!isNaN(number1)) {
        if(!isNaN(number2)){
            if(number2!==0){
                const result = {
                    result: number1 / number2
                }
                return response.status(200).send(result)
            } else {
                msg = "number2 debe ser distinto de 0"
            }
        } else {
            msg = "number2 debe ser un numero"
        }
    } else {
        msg = "number1 debe ser un numero"
    }
    return response.status(400).send(msg)
}