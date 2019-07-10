// const name = "Ray"
// const myTemplateString = `Hola a todos mi nombre es ${name}`;
// const myString = "Hola a todos \n" +
// "mi nombre es " + name;
// console.info(myString);
// console.info(myTemplateString);
const collection = [
    {
        id: 1,
        title: 'La Metamorfosis'
    },
    {
        id: 2,
        title: 'Peter Pan'
    }
];
const myId = 2;
const title = collection.find( (item) => {
    return item.id === myId;
}).title;
console.log("Book title:", title);
console.log(`Book title: ${collection.find( (item) => item.id === myId).title}`);
const str = 'La vida es bella';
console.log(`Uppercase: ${str.toUpperCase()}`);
const value1 = 10;
const value2 = 10;
console.log(`${value1 + value2}`);
const film = {
    id: 1,
    title: 'Pan',
    year: 2017
};
console.log(`Film report: ${film.title ? film.title : 'No se encuentra la pelicula'}`);
console.log(`Film year: ${film.year || 'unknown'}`);