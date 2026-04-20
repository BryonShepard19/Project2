document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("alertBtn");
  if (btn) {
    btn.addEventListener("click", () => {
      alert("Button clicked!");
    });
  }

  const eventsList = document.getElementById("eventsList");
  if (eventsList) {
    const events = ["Club Fair", "Hackathon", "Basketball Game"];
    events.forEach(e => {
      const li = document.createElement("li");
      li.textContent = e;
      eventsList.appendChild(li);
    });
  }

  const weatherBtn = document.getElementById("getWeather");
  if (weatherBtn) {
    weatherBtn.addEventListener("click", () => {
      fetch("https://api.openweathermap.org/data/2.5/weather?q=New York&appid=YOUR_API_KEY&units=metric")
        .then(res => res.json())
        .then(data => {
          document.getElementById("weatherResult").textContent =
            `Temperature: ${data.main.temp}°C`;
        })
        .catch(() => {
          document.getElementById("weatherResult").textContent = "Error loading weather.";
        });
    });
  }
});
