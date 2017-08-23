
var internal={};

internal.item=[
  {id:1, name:'Amplificadores Monitoress - Rack', type: 'Som', qtdTotal: 1},
  {id:2, name:'Barras PA', type: 'Som', qtdTotal: 10},
  {id:3, name:'Bateria Pearl AJCOI', type: 'Som', qtdTotal: 1},
  {id:4, name:'Beringher DDM4000', type: 'Som', qtdTotal: 1},
  {id:5, name:'Beringher XL1600', type: 'Som', qtdTotal: 1},
  {id:6, name:'Blinders', type: 'Luz', qtdTotal: 2},

];

internal.lastId=6;

exports.findAll= function () {
  return internal.item;
};

exports.finditem = function (id) {
  return internal.item.find(function (item) {
    return item.id===id;
  })
};

exports.delete = function (id) {
  var index;
  var itemToRemove= internal.item.find(function (item,i) {
    index=i;
    return item.id===id;
  });

  internal.item.splice(index,1);
};

exports.add = function(item) {

  item.id = internal.lastId+1;
  internal.item.push(item);
  internal.lastId++;
};

exports.edit = function(id,item) {
  var index;

  var itemToEdit = internal.item.find(function (item,i) {
    index=i;
    return item.id===id;
  });
  if(!itemToEdit){
    return itemToEdit;
  }

  internal.item[index].name=item.name|| itemToEdit.name;
  internal.item[index].type=item.type|| itemToEdit.type;
  internal.item[index].qtdTotal=item.qtdTotal|| itemToEdit.qtdTotal;

 return internal.item[index];
}
