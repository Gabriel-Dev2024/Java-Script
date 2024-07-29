function parimpar(n) {
    if (n % 2 === 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}
console.log(parimpar(16))



function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(2, 5))



function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(5))

// 5! = 5 x 4 x 3 x 2 x 1 = 120