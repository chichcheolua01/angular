type TStudent = {
    id?:number,
    name?:string,
    age?:number
}

const studentList:TStudent[] = []

for (let i = 0; i<=9; i++ ){
    studentList.push({
        id: i + 1,
        name: `Name ${i + 1}`,
        age: 23
    })
}
console.log(studentList)
