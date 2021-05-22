function probandoMap () {
    const arr = [1, 2, 3, 4];
    const result = arr.map(x => x * 2)
    console.log(`probandoMap: ${result}`)
}
probandoMap()

function probandoFindIndex() {
    const arr = [1, 2, 3, 4];
    const result = arr.findIndex(x => x == 2 )
    console.log(`probandoFindIndex: ${result}`)
}

probandoFindIndex()

function probandoEvery() {
    const arr = [1, 2, 3, 4];
    const result = arr.every(x => x > 2 )
    console.log(`probandoEvery: ${result}`)
}

probandoEvery()

function probandoSome() {
    const arr = [1, 2, 3, 4];
    const result = arr.some(x => x > 2 )
    console.log(`probandoSome: ${result}`)
}

probandoSome()

function probandoFilter() {
    const arr = [1, 2, 3, 4];
    const result = arr.filter(x => x > 2 )
    console.log(`probandoFilter: ${result}`)
}

probandoFilter()