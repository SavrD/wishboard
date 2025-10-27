
function updateDateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };
  document.getElementById("datetime").textContent = now.toLocaleDateString("ru-RU", options);
}
setInterval(updateDateTime, 1000);
updateDateTime();

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const stats = document.getElementById("stats");

function updateStats() {
  const total = taskList.children.length;
  const completed = document.querySelectorAll("li.completed").length;
  stats.textContent = `Выполнено задач: ${completed} / ${total}`;
}

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  li.textContent = taskText;

  const delBtn = document.createElement("button");
  delBtn.textContent = "✕";
  delBtn.addEventListener("click", () => {
    li.remove();
    updateStats();
  });

  li.addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") {
      li.classList.toggle("completed");
      updateStats();
    }
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
  updateStats();
});

updateStats();

const weatherIcon = document.querySelector(".weather-icon");
const tempElem = document.querySelector(".temp");
const descElem = document.querySelector(".desc");

const weatherOptions = [
  { icon: "☀️", temp: "+20°C", desc: "Ясно, солнечно" },
  { icon: "🌤️", temp: "+18°C", desc: "Переменная облачность" },
  { icon: "🌧️", temp: "+15°C", desc: "Дождь, возможен ветер" },
  { icon: "⛅", temp: "+17°C", desc: "Облачно с прояснениями" },
  { icon: "❄️", temp: "-2°C", desc: "Снегопад, прохладно" },
  { icon: "🌩️", temp: "+16°C", desc: "Гроза и ветер" }
];

function updateWeather() {
  const random = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
  

  weatherIcon.style.opacity = 0;
  tempElem.style.opacity = 0;
  descElem.style.opacity = 0;

  setTimeout(() => {
    weatherIcon.textContent = random.icon;
    tempElem.textContent = random.temp;
    descElem.textContent = random.desc;

   
    weatherIcon.style.opacity = 1;
    tempElem.style.opacity = 1;
    descElem.style.opacity = 1;
  }, 400);
}

setInterval(updateWeather, 5000); 

const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeToggle.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
