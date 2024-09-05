const open__modal = document.querySelector(".open__modal");
const drower = document.querySelector(".drower__dr");
const drower__content = document.querySelector(".drower__content");
const drower__close = document.querySelector(".drower__close");

const removeDrower = () => {
  drower__content.classList.remove("open");
  drower.classList.remove("show");
};

open__modal.addEventListener("click", () => {
  drower__content.classList.toggle("open");
  drower.classList.add("show");
});

drower.addEventListener("click", removeDrower);
drower__close.addEventListener("click", removeDrower);

const breadcrumb = document.querySelector(".breadcrumb");

const generateLink = (...arr) => {
  console.log(globalThis.location);

  breadcrumb.innerHTML = arr
    .map(
      (item, i) =>
        `<a class="breadcrumb__link" href="${item == "home" ? "index" : item
        }.html">${item}</a> ${arr[i + 1] ? "/" : ""} `
    )
    .join("");
};

// generateLink("home", "contact", "about");

let data = [
  {
    id: 1,
    name: "Hitler",
    description: `Kun.uz связался с несколькими жителями Байсуна и поинтересовался ситуацией после выброса сероводорода, произошедшего из скважины шахты «25-летия Независимости». По словам собеседников, город и его окрестности окутаны неприятным запахом, из-за которого трудно дышать. У многих людей наблюдаются такие симптомы, как головная боль, тошнота и вялость.`,
  },
  {
    id: 2,
    name: "Stalin",
    description: `Президент Франции Эммануэль Макрон впервые прокомментировал задержание основателя Telegram Павла Дурова. Соответствующий пост глава республики опубликовал у себя в X. `,
  },
  {
    id: 3,
    name: "Kim",
    description: `Согласно сообщению, в законопроекте «О государственных секретах» определяются полномочия органов в области защиты государственных секретов, уровни секретности, сроки засекречивания информации, порядок выдачи разрешений на использование государственных секретов.`,
  },
];

const tab = document.querySelector(".tab__content");
const tab__buttons = document.querySelector(".tab__buttons");

const renderButtons = (contentId) => {
  tab__buttons.innerHTML = data
    .map(
      (item, index) =>
        `<button class="buttons ${contentId == item.id
          ? "active"
          : !contentId && index == 0
            ? "active"
            : ""
        }" onclick="renderTab(${item.id})">${item.name}</button>`
    )

    .join("");
};

renderButtons();

const renderTab = (id) => {
  tab.innerHTML = data
    .map((item, index) => {
      if (!id && index == 0) {
        return `<p>${item.description}</p>`;
      } else if (id === item.id) {
        return `<p>${item.description}</p>`;
      }

      return null;
    })
    .join("");

  renderButtons(id);
};

renderTab();


//////////////

let modal = document.querySelector(".myModal");
let btn = document.querySelector(".about_btn");

btn.onclick = function () {
  modal.style.display = "block";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
