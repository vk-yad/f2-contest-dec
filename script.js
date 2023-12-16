const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    const developers = data.filter((person) => person.profession === 'developer');
    console.log(developers);
  
  }
  
  // 2. Add Data
  function addData() {
    const newName = prompt('Enter name:');
    const newAge = parseInt(prompt('Enter age:'), 10);
    const newProfession = prompt('Enter profession:');
  
    if (!newName || isNaN(newAge) || !newProfession) {
      alert('Invalid input. Please enter valid details.');
      return;
    }
  
    const newData = { name: newName, age: newAge, profession: newProfession };
    data.push(newData);
    console.log(data);
  
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const filteredData = data.filter((person) => person.profession !== 'admin');
    console.log(filteredData);

  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
        { name: 'Draken', age: 30, profession: 'tester' },
        { name: 'Rony', age: 25, profession: 'designer' }
    ];

    const resultArray = data.concat(dummyArray);
    console.log("Concatenated Array:", resultArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const sum = data.reduce((acc, dev) => acc + dev.age, 0);
    const average = sum / data.length;
    console.log("Average Age:", average.toFixed(2));
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const isAbove25 = data.some(dev => dev.age > 25);
    console.log("At last one person is above 25:", isAbove25);
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const professions = [...new Set(data.map((person) => person.profession))];
    console.log(professions);
  
    
  }
  
  // 8. Sort by Age
  function sortByAge() {
    const sortedData = [...data].sort((a, b) => a.age - b.age);
    console.log(sortedData);

  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const updatedData = data.map((person) => {
        if (person.name === 'john') {
          return { ...person, profession: 'manager' };
        }
        return person;
      });
      console.log(updatedData);
    
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const professionCount = data.reduce((count, person) => {
        count[person.profession] = (count[person.profession] || 0) + 1;
        return count;
      }, {});
      console.log(professionCount);
    
  }