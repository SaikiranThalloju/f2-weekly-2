let studentData;

fetch("./demo-json-data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    studentData = data;
    getData(data);
  });
function updateData(data) {

  let tb = document.getElementById("tbody");
  let table = document.getElementById("table");
  let tbody = document.createElement("tbody");
  tbody.id = "tbody"
  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${data[i].id}</td>
    <td><img src="${data[i].img_src}.width="38".height="38""> ${data[i].first_name} ${data[i].last_name}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].class}</td>
        <td>${data[i].marks}</td>
        <td>${data[i].passing}</td>
        <td>${data[i].email}</td>
        `;
    tbody.appendChild(tr);
  }
  //   table.appendChild(tbody);
  table.replaceChild(tbody, tb);
}

function getData(data) {
  let table = document.getElementById("table");
  let tbody = document.createElement("tbody");
  tbody.id = "tbody";
  for (let i = 0; i < data.length; i++) {
         if(data[i].passing === true){
          data[i].passing = "pass";
         }
         else if(data[i].passing === false){
          data[i].passing = "fail"
         }

    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${ data[i].id}</td>
    <td><img src="${data[i].img_src}.width="38".height="38""> ${data[i].first_name} ${data[i].last_name}</td>
    <td>${data[i].gender}</td>
    <td>${data[i].class}</td>
    <td>${data[i].marks}</td>
    <td>${data[i].passing}</td>
    <td>${data[i].email}</td>
    `;
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
}

function sortAtoZ() {
  studentData.sort((a, b) => {
    const fullNameA = a.first_name + " " + a.last_name;
    const fullNameB = b.first_name + " " + b.last_name;
    return fullNameA.localeCompare(fullNameB);
  });
  //   let table = document.getElementById("table");
  //   for (let i = 0; i < studentData.length; i++) {
  //     let tr = document.createElement("tr");
  //     tr.innerHTML = `<td>${studentData[i].id}</td>
  //     <td>${studentData[i].first_name} ${studentData[i].last_name}</td>
  //     <td>${studentData[i].gender}</td>
  //      <td>${studentData[i].class}</td>
  //     <td>${studentData[i].marks}</td>
  //     <td>${studentData[i].passing}</td>
  //     <td>${studentData[i].email}</td>
  //     `;
  //     table.appendChild(tr);
  //   }
  updateData(studentData);
}

function sortZtoA(){
    studentData.sort((a, b) => {
        const fullNameA = a.first_name + " " + a.last_name;
        const fullNameB = b.first_name + " " + b.last_name;
        return fullNameB.localeCompare(fullNameA);
      });
  updateData(studentData);

}

function sortbyMarks(){
studentData.sort((a,b)=>{
   return a.marks-b.marks
})
updateData(studentData);
}

function sortbyClass(){
    studentData.sort((a,b)=>{
        return a.class-b.class
     })
     updateData(studentData);
     }

     
     function sortbyPassing() {
      const passingStudents = studentData.filter(student => student.passing === "pass");
      updateData(passingStudents);
    }


    
    function sortbyGender() {
      const maleStudents = studentData.filter(student => student.gender === 'Male');
      const femaleStudents = studentData.filter(student => student.gender === 'Female');
      const combinedStudents = [...maleStudents, ...femaleStudents];
      updateData(combinedStudents);
  }


  function search_person(){
  const searchInput = document.getElementById('search');
    // const searchbutton = document.getElementById('search-button');
        const searchTerm = searchInput.value;
        const filteredStudents = studentData.filter(student =>
            student.first_name.includes(searchTerm) ||
            student.last_name.includes(searchTerm) ||
            student.email.includes(searchTerm)
        );
        updateData(filteredStudents);
  }