// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

let destructivelyAppendCat = name => {
    cats.push(name)
}
let destructivelyPrependCat = name => {
    cats.unshift(name)
}
let destructivelyRemoveLastCat = () => {
    cats.pop()
}
let destructivelyRemoveFirstCat = () => {
    cats.shift()
}
let appendCat = name => {
    const newCats = [...cats, name]
    return newCats
}
let prependCat = name => {
    const newCats = [name, ...cats]
    return newCats
}
let removeLastCat = () => {
    return cats.slice(0, cats.length - 1)
}
let removeFirstCat = () => {
    return cats.slice(1)
}
