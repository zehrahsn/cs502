// ~~~~~~~~~~~~~~~task1~~~~~~~~~~~~~~~

// let a = 12
// let b = 8
// console.log (a * b)

// let x = (10/2)
// console.log (x)

// let num1 = 20
// let num2 = 17
// console.log (num1+num2)

// let name = 'Zahra'
// let surname = 'Hasanova'
// let year = '2004'
// let info = `${name} ${surname} ${year}`
// console.log (info)

// let num3=17
// let num4=12
// console.log (num3%num4)

// ~~~~~~~~~~~~~~~task2~~~~~~~~~~~~~~~

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;

// console.log(c); //2
// console.log(d); //1
// console.log(b); //2

// ~~~~~~~~~~~~~~~task3~~~~~~~~~~~~~~~

// let a = 2;
// let x = 1 + (a *= 2);
// console.log(x); // 5

// ~~~~~~~~~~~~~~~task4~~~~~~~~~~~~~~~

// console.log('test1', test); // error

// {
//     let test = "something"
//     console.log('test2', test); // test2 something
// }
// console.log('test3', test);  // error 


// console.log('test1', test);  
// {
//     var test = "something"
//     console.log('test2', test); 
// }
// console.log('test3', test); 


// ~~~~~~~~~~~~~~~task5~~~~~~~~~~~~~~~

// let name = "Ulfat"
// console.log(typeof name) //string
// // let surname = Zakirli
// console.log(typeof surname) //error
// let year = 2000
// console.log(typeof year) //number
// year = "2000"
// console.log(typeof year) //string
// let city;
// console.log(typeof city) //undefined
// let qualification = null
// console.log(typeof qualification) //object
// let obj = { name: 'ulfat' }
// console.log(typeof obj) //object
// let arr = ['a', 'b', 'c']
// console.log(typeof arr) //object

// ~~~~~~~~~~~~~~~task6~~~~~~~~~~~~~~~

// const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]

// 1.Sum all the numbers in 'arr1'
// let sum = 0
// arr1.map(item => sum = sum + item)
// console.log(sum)

// 2.Add two numbers (10,88) to end of arr1 (push methods)
// arr1.push(10, 88)
// console.log(arr1)

// 3.Remove first two numbers from arr1
// arr1.shift()
// arr1.shift()
// console.log(arr1)

// 4.Add three numbers (0,9,11) in front of arr1(unshift)
// arr1.unshift(0, 9, 11)
// console.log(arr1)

// 5.Remove four numbers in front of arr1(shift)
// arr1.shift()
// arr1.shift()
// arr1.shift()
// arr1.shift()
// console.log(arr1)

// ~~~~~~~~~~~~~~~task7~~~~~~~~~~~~~~~

const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// // 1.Console values from "Rufet" to "Fuad"
console.log(arr2.slice(2, 8))

// 2.Change Gulshen to Rovshen 
const index = 5
const value = 'Rovshen'
arr2.splice(index, 0, value)
delete arr2[4]
console.log(arr2)

// // 3.Console each name with map
const namee = arr2.map((item) => console.log (item))

// // 4.Console only names which is Anar
const name = arr2.filter(arr2 => arr2 == 'Anar')
console.log(name)

// 5.Console all names where name is Anar change it to "Perviz"
arr2.forEach((name, index) => {
    if (name === "Anar") {
        arr2[index] = "Perviz";
    }
});
console.log(arr2);

// 6.Console second to last value of arr2
console.log(arr2.slice(1))

// // 7.Console length of arr2
console.log(arr2.length)



// ~~~~~~~~~~~~~~~task8~~~~~~~~~~~~~~~

 const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]
// // (use typeof), like this: filter((item) => typeof item === 'string')

// // 1.Show only numbers
console.log(arr3.filter((item) => typeof item === "number"))
// // 2.Show only true values
console.log(arr3.filter((item) => typeof item))
// // 3.Show only false values
console.log(arr3.filter((item) => typeof item === false))
// // 4.Show only strings
console.log(arr3.filter((item) => typeof item === 'string'))


// ~~~~~~~~~~~~~~~task8~~~~~~~~~~~~~~~

const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// // 1.Console (only even numbers)
console.log(numbers.filter(item => item % 2 === 0))
// // 2.Console (only odd numbers)
console.log(numbers.filter(item => item % 2 === 0 + 1))


// ~~~~~~~~~~~~~~~task9~~~~~~~~~~~~~~~

const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]

// // 1.Console all values of arr4 -
console.log(arr4)
// // if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
let newarr4 = arr4.map((value) => {
    if (typeof value == 'number'){
        console.log(value + 10);
    } else if (typeof value === 'string') { console.log(value + ' is string')
} else{console.log( value + ' is falsy value' )}
})

// // Example: [10,'true',false]
// // Result: [20, "true is string", "false is falsy value"]

// // 2.Sum all numbers of arr4
let sum = 0;
for (let i = 0; i < arr4.length; i++) {
    if (typeof arr4[i] === 'number' && !isNaN(arr4[i])) {
        sum += arr4[i];
    }
}
console.log(sum);

// // 3.Count only the values that are true
arr4.forEach(value => {
    if (value === true) {
        console.log(value);
    }})

// // 4.Count only the values that are string
arr4.forEach(value => {
    if (value === 'string') {
        console.log(value);
    }})
// // 5.Count only the values that are false
arr4.forEach(value => {
    if (value === false) {
        console.log(value);
    }})


// ~~~~~~~~~~~~~~~task10~~~~~~~~~~~~~~~

// 1.Create a object add your name, surname, age and city. 
// const obj = {
//     name: 'Zahra' ,
//     surname: 'Hasanova',
//     age: 19,
//     city: 'Baku'
// }
// // 2.Then change name to "Jhon"
// obj.name = 'Jhon'
// console.log(obj)

// const obj = {
//     email: 'ulfat@gmail.com',
//     info: {
//         gender: 'Male',
//         loc: {
//             city: "Baku",
//             street: 'Nizami 22',
//             education: {
//                 "uni name": "ADNSU",
//             }
//         }
//     }
// }

// // 3.Console gender
// console.log(obj.info.gender)

// // 4.Console city
// console.log(obj.info.loc.city)


// ~~~~~~~~~~~~~~~task11~~~~~~~~~~~~~~~


let fullName = 'Zahra Hasanova Mirismayil'

// // 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
let names =(fullName.split(" "))
console.log(names)

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
let temp= names[0]
names[0]=names[1]
names[1]= temp 

// // 3) Alinan yeni arrayi stringe cevirin(join)
console.log(names.join(" "))


let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// // QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

// //4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
const Count = arr.filter(arr => arr == 5).length
console.log(Count)

// //5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let summ = 0
arr.map(item => sum = sum + item)
console.log(summ)

// //6) arrayda tekrar olunan reqemleri artan sira ile duzun
console.log(arr.sort())

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
let maxnumber= (Math.max(...arr))
console.log(arr.filter(arr => arr == maxnumber).length)

// //8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
console.log(arr.includes(5))

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 2) {
        index = i;}}
console.log(index)

//10) arraydaki en boyuk reqemin ilk indexini tapin
let number= (Math.max(...arr))
console.log(arr.indexOf(number))

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
const result = arr.findIndex(arr => arr == 4)
const result1 = arr.findLastIndex(arr => arr == 4)
console.log(result)
console.log(result1)


//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
const result3 = arr.findIndex(arr => arr == 5)
console.log(result3)
const result4 = arr.findLastIndex(arr => arr == 5)
console.log(result4)

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
const newarr = arr.filter(item => item > 2)
console.log(newarr)
console.log(arr.length - newarr.length)

//14) 7 reqeminin indexleri cemini tapin.
const newresult = arr.findIndex(arr => arr == 7)
const newresult1 = arr.findLastIndex(arr => arr == 7)
console.log(newresult + newresult1)