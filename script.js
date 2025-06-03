let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

//code
function groupById(arr) {
    return arr.reduce((acc, currentItem) => {
        acc[currentItem.id] = currentItem;
        return acc;
    }, {});
}


let usersById = groupById(users);

console.log(usersById);