let id = 1;

export default function ActionType(name){

  function type(){}

  type.id = id++;
  type._name = name;
  type.toString = function() { return `${type._name} - ${type.id}`; };

  return type;
}

ActionType.create = function(){
  return [].slice.call(arguments).reduce((obj, name) => {
    obj[name] = ActionType(name);
    return obj;
  }, {});
};
