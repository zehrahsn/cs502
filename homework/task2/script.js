let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
        name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
let arr1 = [];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].name.startsWith('t')) {
        arr1.push(arr2[i]);
    }
}
console.log(arr1);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
let arr3 = [];
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i].name.startsWith('t') && arr2[i].name.endsWith('t')){
        arr3.push(arr2[i]);
    }
}
console.log(arr3.length);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let total =0
arr3.map(item=> {
    total += item.key
})
console.log(total)

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// arr2.forEach(item => {
//     if(item.name.endsWith('e')) {
//         item.name= 'SuperDev'
//     }
// })
// console.log(arr2 )
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
var longest = arr2.reduce(
    function (a, b) {
        return a.length > b.length ? a : b;
    }
);
console.log(longest.key)

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
let indexes = arr2.indexOf(longest)
console.log(indexes* indexes)

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
let arr4 = arr2.filter(item => item.name.length === 4)
console.log(arr4)

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
let maxkey = arr2.reduce((prev, curr) => (prev.key > curr.key) ? prev : curr, 1)
console.log(maxkey.name)

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
let doubleL = [];
for (let i = 0; i < arr2.length; i++) {
    let count = 0;
    for (let j = 0; j < arr2[i].name.length; j++) {
        if (arr2[i].name[j] === 'l' || arr2[i].name[j] === 'l') {
            count++;
        }
    }
    if (count === 2) {
        doubleL.push(i);
    }
}
console.log(doubleL);

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin
let doubleT = [];
for (let i = 0; i < arr2.length; i++) {
    let count = 0;
    for (let j = 0; j < arr2[i].name.length; j++) {
        if (arr2[i].name[j] === 't' || arr2[i].name[j] === 't') {
            count++;
        }
    }
    if (count === 2) {
        doubleT.push(arr2[i].key);
    }
}

console.log(doubleT);
