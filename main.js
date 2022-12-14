//DOM요소 정의
const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");

//function 정의
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");

  const item = document.createElement("div");
  item.setAttribute("class", "item");

  const name = document.createElement("span");
  name.setAttribute("class", "item__name");
  name.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("class", "item__delete");
  deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
  deleteBtn.addEventListener("click", () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement("div");
  itemDivider.setAttribute("class", "item__divider");

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);
  return itemRow;
}

function onAdd() {
  // 1.사용자가 입력한 텍스트 받아온다
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }

  // 2. 새로운 아이템 만든다 (텍스트 + 삭제버튼)
  const item = createItem(text);

  // 3. items 컨테이너 안에 새로운 아이템 추가
  items.appendChild(item);

  // 4. 새로 추가된 아이템으로 이동, 스크롤링
  item.scrollIntoView({ block: "center" });

  //5. 인풋 초기화
  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", () => {
  onAdd();
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});
