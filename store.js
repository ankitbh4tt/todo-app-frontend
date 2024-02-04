const store = {
  todos: [
    {
      id: "1",
      title: "Complete Task A",
      completed: false,
    },
    {
      id: "2",
      title: "Read Book",
      completed: true,
    },
    {
      id: "3",
      title: "write code",
      completed : true
    },
  ],
};

const storeHandler ={
  get(target,property){
    console.log("oh you are trying to get ",property);
    return target[property];
  },
  set(target,property,value){
    if(property=="todos"){
      window.dispatchEvent(new Event("todosChange"));
    }
    target[property]=value;
    return true;
  }
};




const storeProxy = new Proxy(store,storeHandler)


function addTodo(newTodo){
  storeProxy.todos = [...storeProxy.todos,newTodo];
}
export { addTodo };
export default storeProxy;