
const pokemonsList = [
    {id:1, name:"Pikachu"},
    {id:2, name:"Charmander"},
    {id:3, name:"Charizard"},
    {id:4, name:"Mewoth"},
    {id:5, name:"Bulgasaur"}
]

const usersList = [
    {id:1, name:"Ash", caught:4},
    {id:2, name:"Misty", caught:3},
    {id:3, name:"Rock", caught:5},
    {id:4, name:"James", caught:1},
    {id:5, name:"Jessie", caught:0}
]

export function getPokemons(){
    return pokemonsList; 
}

export function getUsers(){
    return usersList;
}