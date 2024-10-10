const date = new Date();
console.log(date);

const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
];

const tuki = month + 1;



console.log(year+'年'+tuki+'月'+day+'日');
