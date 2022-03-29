// selector all element

const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const pendingTask = document.querySelector(".pendingTask");
const clearAll = document.querySelector(".footer button");
let isEdit = null;
console.log("bb test", "tải lại trang");
// local storage
showTask();
addBtn.onclick = () => {
  let userEnterValue = inputBox.value;
  let getLocalStorage = localStorage.getItem("Newtodo");
  if (!getLocalStorage) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  console.log(listArray);
  listArray.push(userEnterValue);
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
};
clearAll.onclick = deleteAll;

function showTask() {
  let getLocalStorage = localStorage.getItem("Newtodo");
  console.log({ getLocalStorage });
  if (!getLocalStorage) {
    listArray = [];
  } else {
    listArray = JSON.parse(getLocalStorage);
  }
  let newTask = "";
  listArray.forEach((item, index) => {
    if (index === isEdit) {
      newTask += `<input id=${index} onchange="getValueInput(${index})" type="text" />`;
    } else {
      newTask += `<li ondblclick="editItem(${index})"> ${item} <span onclick="deleteTask(${index})" class="icon"><i class="fa-solid fa-trash"></i></span>  </li>`;
    }
  });
  todoList.innerHTML = newTask;
  inputBox.value = "";
  pendingTask.textContent = listArray.length;
}
function deleteAll() {
  listArray = [];
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}

function deleteTask(index) {
  listArray.splice(index, 1);
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  showTask();
}
function editItem(index) {
  isEdit = index;

  showTask();
}
function getValueInput(index) {
  var x = document.getElementById(index);

  listArray.splice(index, 1, x.value);
  localStorage.setItem("Newtodo", JSON.stringify(listArray));
  isEdit = null;
  showTask();
}
// bài tạp về nhà hoàn thiện các chức năng todo app
// - validate ô input có kí tự mới được phép add task, click enter cũng add được task
// - double click -> xuất hiện ô input để edit
// - có ô checkbox để check task đã hoàn thành hay chưa
