
var internal={};

internal.Employee=[
  {id:1, name:'Chico'},
  {id:2, name:'Bruno'},
  {id:3, name:'Batman'},
  {id:4, name:'Flash'},
  {id:5, name:'SuperMan'},
  {id:6, name:'AquaMan'},

];

internal.lastId=6;

exports.findAll= function () {
  return internal.Employee;
};

exports.findEmployee = function (id) {
  return internal.Employee.find(function (Employee) {
    return Employee.id===id;
  })
};

exports.delete = function (id) {
  var index;
  var EmployeeToRemove= internal.Employee.find(function (Employee,i) {
    index=i;
    return Employee.id===id;
  });

  internal.Employee.splice(index,1);
};

exports.add = function(Employee) {

  Employee.id = internal.lastId+1;
  internal.Employee.push(Employee);
  internal.lastId++;
};

exports.edit = function(id,Employee) {
  var index;

  var EmployeeToEdit = internal.Employee.find(function (Employee,i) {
    index=i;
    return Employee.id===id;
  });
  if(!EmployeeToEdit){
    return EmployeeToEdit;
  }

  internal.Employee[index].name=Employee.name|| EmployeeToEdit.name;
  

 return internal.Employee[index];
}
