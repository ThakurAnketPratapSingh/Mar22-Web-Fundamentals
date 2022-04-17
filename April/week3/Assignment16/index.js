const students = [{ name: "john 0", score: 45 },
                  { name: "john 1", score: 33 },
                  { name: "john 2", score: 55 },
                  { name: "john 3", score: 65 },
                  { name: "john 4", score: 85 },
                 ]



function passedStudents(studentList) {
    const finalArr = []
    let sum=0
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].score < 50) {
            const obj = {
                name: studentList[i].name,
                score: studentList[i].score + 15
            }
            finalArr.push(obj)
        } else {
            finalArr.push(studentList[i])
        }
    }
    console.log(finalArr)
    for (let i = 0; i < finalArr.length; i++) {
        if (finalArr[i].score > 50) {
            console.log(finalArr[i].name, " has passed")
            sum=sum+finalArr[i].score
            let row_2 = document.createElement('tr');
            let row_2_data_1 = document.createElement('td');
            row_2_data_1.innerHTML =finalArr[i].name;
            let row_2_data_2 = document.createElement('td');
            row_2_data_2.innerHTML = finalArr[i].score;

            row_2.appendChild(row_2_data_1);
            row_2.appendChild(row_2_data_2);
            tbody.appendChild(row_2);
        } else {
            console.log(finalArr[i].name, " failed the test")
        }
    }
    console.log(sum,"Sum of all the marks of students who passed passing marks = 50")
    let sums = document.getElementById('h4').innerHTML =sum;
    
        
}


let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');

table.appendChild(thead);
table.appendChild(tbody);

document.getElementById('body').appendChild(table);





    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = "Name";
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = "Score";
  

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
   
    thead.appendChild(row_1);



passedStudents(students)
