var students = [];
for (var i = 0; i <= 9; i++) {
    students.push({
        id: i + 1,
        name: "Name ".concat(i + 1),
        age: 23
    });
}
console.log(students);
