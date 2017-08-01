var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};
function welcome(){
  var value = document.getElementById('todo-text').value;
  alert(value);
  var list = document.getElementById("unordered");
  var elem = document.createElement('li');
  //var innerDOM='<input type="checkbox"';
  elem.innerHTML= value;
  elem.className="list-group-item";
  list.appendChild(elem);
}

(function (todo, data, $) {


    todo.init = function () {


        $.each(data, function (index, params) {

        });


        $('#add-btn').click(function (e) {

        });
