
var internal={};

internal.Event=[
  {id:1, dataInit:'20-jan', dataEnd:'23-jan', name:'LVCHC FEST', local:'Setúbal',obs:'', price: 350 },
  {id:2, dataInit:'20-jan', dataEnd:'23-jan', name:'FEST1', local:'Setúbal',obs:'', price: 350 },
  {id:3, dataInit:'20-jan', dataEnd:'23-jan', name:'FEST2', local:'Palmela',obs:'', price: 500 },
  {id:4, dataInit:'20-jan', dataEnd:'23-jan', name:'FEST3', local:'Carne Assada',obs:'', price: 350 },
  {id:5, dataInit:'20-jan', dataEnd:'23-jan', name:'FEST4', local:'Palhota',obs:'', price: 1000 },
  {id:6, dataInit:'20-jan', dataEnd:'23-jan', name:'FEST5', local:'Caramelo',obs:'', price: 750 },
];

internal.lastId=6;

exports.findAll= function () {
  return internal.Event;
};

exports.findEvent = function (id) {
  return internal.Event.find(function (Event) {
    return Event.id===id;
  })
};

exports.delete = function (id) {
  var index;
  var EventToRemove = internal.Event.find(function (Event,i) {
    index=i;
    return Event.id===id;
  });

  internal.Event.splice(index,1);
};

exports.add = function(Event) {

  Event.id = internal.lastId+1;
  internal.Event.push(Event);
  internal.lastId++;
};

exports.edit = function(id,Event) {
  var index;

  var EventToEdit = internal.Event.find(function (Event,i) {
    index=i;
    return Event.id===id;
  });
  if(!EventToEdit){
    return EventToEdit;
  }

  internal.Event[index].name=Event.name|| EventToEdit.name;


 return internal.Event[index];
}
