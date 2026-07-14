const CITIES = [
    {
        id: "sydney",
        name: "Sydney",
        state: "NSW",
        latitude: -33.8688,
        longitude: 151.2093,
        timezone: "Australia/Sydney",
        note: "Harbour edges can feel cooler in a southerly, especially after sunset."
    },
    {
        id: "melbourne",
        name: "Melbourne",
        state: "VIC",
        latitude: -37.8136,
        longitude: 144.9631,
        timezone: "Australia/Melbourne",
        note: "Keep a light outer layer close; a wind shift can change a mild day quickly."
    },
    {
        id: "brisbane",
        name: "Brisbane",
        state: "QLD",
        latitude: -27.4698,
        longitude: 153.0251,
        timezone: "Australia/Brisbane",
        note: "Humidity can hold after sunset, so breathable layers usually work best."
    },
    {
        id: "gold-coast",
        name: "Gold Coast",
        state: "QLD",
        latitude: -28.0167,
        longitude: 153.4,
        timezone: "Australia/Brisbane",
        note: "Beachfront wind is often stronger than it feels a few streets inland."
    },
    {
        id: "cairns",
        name: "Cairns",
        state: "QLD",
        latitude: -16.9186,
        longitude: 145.7781,
        timezone: "Australia/Brisbane",
        note: "Tropical humidity and passing showers reward quick-dry, breathable layers."
    },
    {
        id: "perth",
        name: "Perth",
        state: "WA",
        latitude: -31.9523,
        longitude: 115.8613,
        timezone: "Australia/Perth",
        note: "The afternoon sea breeze can arrive quickly along the coast."
    },
    {
        id: "adelaide",
        name: "Adelaide",
        state: "SA",
        latitude: -34.9285,
        longitude: 138.6007,
        timezone: "Australia/Adelaide",
        note: "Dry warmth can linger, while evenings cool quickly outside summer."
    },
    {
        id: "hobart",
        name: "Hobart",
        state: "TAS",
        latitude: -42.8821,
        longitude: 147.3272,
        timezone: "Australia/Hobart",
        note: "Wind off the river and mountain can drop the apparent temperature."
    },
    {
        id: "canberra",
        name: "Canberra",
        state: "ACT",
        latitude: -35.2809,
        longitude: 149.13,
        timezone: "Australia/Sydney",
        note: "Clear evenings cool quickly, even after a warm afternoon."
    },
    {
        id: "darwin",
        name: "Darwin",
        state: "NT",
        latitude: -12.4634,
        longitude: 130.8456,
        timezone: "Australia/Darwin",
        note: "Light fabrics and sun protection matter more than extra layers in humid weather."
    }
];

const QUICK_CITY_IDS = new Set(["sydney", "melbourne", "brisbane", "perth"]);

const WEATHER_CODES = {
    0: ["Clear sky", "☀"],
    1: ["Mostly clear", "◑"],
    2: ["Partly cloudy", "◒"],
    3: ["Overcast", "☁"],
    45: ["Foggy", "≋"],
    48: ["Icy fog", "≋"],
    51: ["Light drizzle", "↘"],
    53: ["Drizzle", "↘"],
    55: ["Heavy drizzle", "↘"],
    56: ["Freezing drizzle", "↘"],
    57: ["Freezing drizzle", "↘"],
    61: ["Light rain", "↘"],
    63: ["Rain", "↘"],
    65: ["Heavy rain", "↘"],
    66: ["Freezing rain", "↘"],
    67: ["Freezing rain", "↘"],
    71: ["Light snow", "✦"],
    73: ["Snow", "✦"],
    75: ["Heavy snow", "✦"],
    77: ["Snow grains", "✦"],
    80: ["Rain showers", "↘"],
    81: ["Rain showers", "↘"],
    82: ["Heavy showers", "↘"],
    85: ["Snow showers", "✦"],
    86: ["Snow showers", "✦"],
    95: ["Thunderstorm", "ϟ"],
    96: ["Storm with hail", "ϟ"],
    99: ["Storm with hail", "ϟ"]
};

const OUTFIT_ASSETS = {
    deepCold: {
        image: "assets/outfits/cool-day.webp",
        imageSmall: "assets/outfits/cool-day-400.webp",
        alt: "Illustrated level 1 winter outfit with a warm coat, knit jumper, scarf, beanie and boots",
        caption: "Full winter layers are reserved for genuinely cold conditions."
    },
    coldCoat: {
        image: "assets/outfits/cold-coat-day.webp",
        imageSmall: "assets/outfits/cold-coat-day-400.webp",
        alt: "Illustrated level 2 cold-weather outfit with a medium wool coat, knit jumper, trousers and boots",
        caption: "A proper coat handles cold mornings without heavy accessories."
    },
    jacketLayer: {
        image: "assets/outfits/jacket-layer-day.webp",
        imageSmall: "assets/outfits/jacket-layer-day-400.webp",
        alt: "Illustrated level 3 outfit with a warm jumper, lightweight jacket, trousers and closed shoes",
        caption: "Two practical layers cover a cold start and a milder afternoon."
    },
    lightJumper: {
        image: "assets/outfits/light-jumper-day.webp",
        imageSmall: "assets/outfits/light-jumper-day-400.webp",
        alt: "Illustrated level 4 outfit with one light jumper, long trousers and walking shoes",
        caption: "One light jumper is enough for a cool Brisbane evening."
    },
    mild: {
        image: "assets/outfits/mild-day.webp",
        imageSmall: "assets/outfits/mild-day-400.webp",
        alt: "Illustrated level 5 outfit with a t-shirt, light overshirt, trousers and walking shoes",
        caption: "A light overshirt keeps a changeable day flexible."
    },
    longSleeve: {
        image: "assets/outfits/long-sleeve-day.webp",
        imageSmall: "assets/outfits/long-sleeve-day-400.webp",
        alt: "Illustrated level 6 outfit with a lightweight long-sleeve top, light trousers and sneakers",
        caption: "Long sleeves work without an extra outer layer in mild air."
    },
    warmTrousers: {
        image: "assets/outfits/warm-trousers-day.webp",
        imageSmall: "assets/outfits/warm-trousers-day-400.webp",
        alt: "Illustrated level 7 outfit with a breathable t-shirt, lightweight trousers and sneakers",
        caption: "A breathable tee and light trousers suit a warm, settled day."
    },
    summer: {
        image: "assets/outfits/warm-day.webp",
        imageSmall: "assets/outfits/warm-day-400.webp",
        alt: "Illustrated level 8 summer outfit with a white t-shirt, navy shorts and walking shoes",
        caption: "Shorts and breathable basics keep a summer day comfortable."
    },
    hotSun: {
        image: "assets/outfits/hot-sun-day.webp",
        imageSmall: "assets/outfits/hot-sun-day-400.webp",
        alt: "Illustrated level 9 hot-weather outfit with a loose top, shorts, cap, sunglasses and sneakers",
        caption: "Loose summer pieces and a cap add practical sun protection."
    },
    extremeHeat: {
        image: "assets/outfits/extreme-heat-day.webp",
        imageSmall: "assets/outfits/extreme-heat-day-400.webp",
        alt: "Illustrated level 10 extreme-heat outfit with loose linen, shorts, broad hat, airy shoes and water bottle",
        caption: "Maximum airflow, shade and water matter in extreme heat."
    },
    wet: {
        image: "assets/outfits/wet-day.webp",
        imageSmall: "assets/outfits/wet-day-400.webp",
        alt: "Illustrated wet-weather outfit with a waterproof jacket, trousers and walking shoes",
        caption: "A waterproof outer layer handles showers and wind."
    }
};

const OUTFIT_BANDS = [
    {
        level: 1,
        max: 5,
        type: "deepCold",
        name: "Deep cold",
        range: "5°C or below",
        title: "A warm coat, knit layer, scarf and closed shoes.",
        detail: "Add a beanie for early starts, exposed lookouts or long periods outside.",
        short: "Winter coat + layers"
    },
    {
        level: 2,
        max: 9,
        type: "coldCoat",
        name: "Cold",
        range: "6-9°C",
        title: "A medium-weight coat over a warm knit.",
        detail: "Closed shoes and warm socks should cover most city plans without a scarf or beanie.",
        short: "Coat + warm knit"
    },
    {
        level: 3,
        max: 12,
        type: "jacketLayer",
        name: "Layered",
        range: "10-12°C",
        title: "A warm jumper with a lightweight jacket.",
        detail: "Two removable layers handle a cold start without moving into heavy winter clothing.",
        short: "Jumper + light jacket"
    },
    {
        level: 4,
        max: 15,
        type: "lightJumper",
        name: "Light jumper",
        range: "13-15°C",
        title: "One light jumper should be enough.",
        detail: "Wear long trousers and closed shoes; skip the coat, scarf and beanie.",
        short: "One light jumper"
    },
    {
        level: 5,
        max: 18,
        type: "mild",
        name: "Light layer",
        range: "16-18°C",
        title: "A tee with a light overshirt or jacket.",
        detail: "Keep the outer layer easy to remove when the sun is out or you move indoors.",
        short: "Tee + light layer"
    },
    {
        level: 6,
        max: 21,
        type: "longSleeve",
        name: "Mild",
        range: "19-21°C",
        title: "A lightweight long-sleeve top.",
        detail: "Light trousers and walking shoes work without an additional jacket for most plans.",
        short: "Light long sleeves"
    },
    {
        level: 7,
        max: 24,
        type: "warmTrousers",
        name: "Warm",
        range: "22-24°C",
        title: "A breathable tee with light trousers.",
        detail: "Choose airy fabrics and comfortable shoes; an outer layer is unlikely to be useful.",
        short: "Tee + light trousers"
    },
    {
        level: 8,
        max: 27,
        type: "summer",
        name: "Summer",
        range: "25-27°C",
        title: "A tee, shorts and comfortable walking shoes.",
        detail: "Use breathable fabrics and carry sun protection if you will be outside around midday.",
        short: "Tee + shorts"
    },
    {
        level: 9,
        max: 31,
        type: "hotSun",
        name: "Hot",
        range: "28-31°C",
        title: "Loose summer clothes, a cap and sunnies.",
        detail: "Prioritise airflow, sunscreen and shade during the strongest part of the day.",
        short: "Loose summer kit"
    },
    {
        level: 10,
        max: Number.POSITIVE_INFINITY,
        type: "extremeHeat",
        name: "Extreme heat",
        range: "32°C or above",
        title: "Loose linen, a broad hat and plenty of water.",
        detail: "Minimise time in direct afternoon sun and plan regular shade or indoor breaks.",
        short: "Heat + sun protection"
    }
];

const state = {
    cityId: readStoredCity(),
    weather: null,
    selectedForecastIndex: 0,
    loadToken: 0,
    toastTimer: null
};

const elements = {};

document.addEventListener("DOMContentLoaded", initialise);

function initialise() {
    cacheElements();
    populateCityControls();
    bindEvents();
    renderForecastSkeletons();
    configurePlannerDate();
    elements.copyrightYear.textContent = new Date().getFullYear();
    selectCity(state.cityId, { syncPlanner: true });
    updateLocalClock();
    window.setInterval(updateLocalClock, 60000);
}

function cacheElements() {
    const ids = [
        "city-select", "planner-city", "city-quick-list", "location-button", "weather-status",
        "status-text", "today-label", "current-temperature", "condition-name", "feels-like",
        "outfit-title", "outfit-detail", "outfit-level", "outfit-range", "outfit-meter",
        "outfit-image", "outfit-visual", "outfit-caption",
        "essential-tip", "local-time", "wind-speed", "cloud-cover", "rain-chance", "uv-index",
        "humidity", "day-range", "local-note", "forecast-grid", "light-title", "light-intro",
        "golden-hour-time", "sunset-time", "blue-hour-time", "photo-score-label",
        "photo-advice-title", "photo-advice-copy", "golden-cloud", "sunset-rain", "photo-condition",
        "planner-form", "planner-date", "planner-duration", "result-location", "result-light-type",
        "recommended-start", "result-summary", "arrival-time", "shoot-time", "finish-time",
        "result-note", "menu-toggle", "site-nav", "copyright-year", "toast"
    ];

    ids.forEach((id) => {
        elements[toCamel(id)] = document.getElementById(id);
    });
}

function toCamel(value) {
    return value.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function populateCityControls() {
    const options = CITIES.map((city) => (
        `<option value="${city.id}">${city.name}, ${city.state}</option>`
    )).join("");

    elements.citySelect.innerHTML = options;
    elements.plannerCity.innerHTML = options;
    elements.cityQuickList.innerHTML = CITIES.filter((city) => QUICK_CITY_IDS.has(city.id)).map((city) => (
        `<button class="city-chip" type="button" data-city="${city.id}">${city.name}</button>`
    )).join("");
}

function bindEvents() {
    elements.citySelect.addEventListener("change", (event) => {
        selectCity(event.target.value, { syncPlanner: true });
    });

    elements.cityQuickList.addEventListener("click", (event) => {
        const button = event.target.closest("[data-city]");
        if (button) selectCity(button.dataset.city, { syncPlanner: true });
    });

    elements.locationButton.addEventListener("click", useCurrentLocation);
    elements.forecastGrid.addEventListener("click", selectForecastDay);
    elements.plannerForm.addEventListener("submit", (event) => {
        event.preventDefault();
        calculatePlanner();
    });

    elements.menuToggle.addEventListener("click", toggleNavigation);
    elements.siteNav.addEventListener("click", (event) => {
        if (event.target.closest("a")) closeNavigation();
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 820) closeNavigation();
    });
}

function selectCity(cityId, options = {}) {
    const city = getCity(cityId) || CITIES[2];
    state.cityId = city.id;
    state.selectedForecastIndex = 0;
    state.weather = null;

    try {
        localStorage.setItem("ozsnap-city", city.id);
    } catch (_) {
        // The app still works when storage is blocked.
    }

    elements.citySelect.value = city.id;
    elements.todayLabel.textContent = `Today in ${city.name}`;
    elements.localNote.textContent = city.note;
    updateActiveCityChip();
    updateLocalClock();

    if (options.syncPlanner) {
        elements.plannerCity.value = city.id;
        elements.plannerDate.value = getTodayInZone(city.timezone);
    }

    calculatePlanner();
    loadWeather(city);
}

async function loadWeather(city) {
    const token = ++state.loadToken;
    setStatus("", `Checking live conditions for ${city.name}...`);
    elements.outfitVisual.classList.add("loading");
    elements.outfitVisual.setAttribute("aria-busy", "true");

    const cache = readWeatherCache(city.id);
    if (cache && Date.now() - cache.fetchedAt < 30 * 60 * 1000) {
        if (token !== state.loadToken) return;
        state.weather = cache.data;
        renderWeather(cache.data);
        setStatus("live", `Live forecast for ${city.name} · refreshed ${formatTime(new Date(cache.fetchedAt), city.timezone)}`);
        elements.outfitVisual.classList.remove("loading");
        elements.outfitVisual.setAttribute("aria-busy", "false");
        return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);

    try {
        const response = await fetch(buildWeatherUrl(city), { signal: controller.signal });
        if (!response.ok) throw new Error(`Weather request failed with ${response.status}`);

        const data = await response.json();
        validateWeatherData(data);
        if (token !== state.loadToken) return;

        state.weather = data;
        writeWeatherCache(city.id, data);
        renderWeather(data);
        setStatus("live", `Live forecast for ${city.name} · updated ${formatTime(new Date(), city.timezone)}`);
    } catch (error) {
        if (token !== state.loadToken) return;

        if (cache?.data) {
            state.weather = cache.data;
            renderWeather(cache.data);
            setStatus("saved", `Showing the latest saved forecast for ${city.name}`);
        } else {
            renderWeatherUnavailable(city);
            setStatus("error", "Live weather is temporarily unavailable. Light calculations still work.");
        }
    } finally {
        window.clearTimeout(timeout);
        elements.outfitVisual.classList.remove("loading");
        elements.outfitVisual.setAttribute("aria-busy", "false");
    }
}

function buildWeatherUrl(city) {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", city.latitude);
    url.searchParams.set("longitude", city.longitude);
    url.searchParams.set("timezone", city.timezone);
    url.searchParams.set("forecast_days", "7");
    url.searchParams.set("wind_speed_unit", "kmh");
    url.searchParams.set("current", [
        "temperature_2m",
        "apparent_temperature",
        "relative_humidity_2m",
        "precipitation",
        "weather_code",
        "cloud_cover",
        "wind_speed_10m",
        "wind_gusts_10m"
    ].join(","));
    url.searchParams.set("hourly", "cloud_cover,precipitation_probability");
    url.searchParams.set("daily", [
        "weather_code",
        "temperature_2m_max",
        "temperature_2m_min",
        "apparent_temperature_max",
        "apparent_temperature_min",
        "precipitation_probability_max",
        "wind_speed_10m_max",
        "uv_index_max",
        "sunrise",
        "sunset"
    ].join(","));
    return url.toString();
}

function validateWeatherData(data) {
    if (!data?.current || !Array.isArray(data?.daily?.time) || data.daily.time.length < 1) {
        throw new Error("Weather response is incomplete");
    }
}

function renderWeather(data) {
    const city = getCity(state.cityId);
    const current = data.current;
    const today = dailyAt(data, 0);
    const outfit = getOutfitAdvice({
        apparent: current.apparent_temperature,
        maximum: today.maximum,
        minimum: today.minimum,
        rain: today.rain,
        wind: current.wind_speed_10m,
        uv: today.uv,
        humidity: current.relative_humidity_2m,
        weatherCode: current.weather_code
    });

    elements.currentTemperature.textContent = formatDegrees(current.temperature_2m);
    elements.conditionName.textContent = getWeatherLabel(current.weather_code);
    elements.feelsLike.textContent = `Feels like ${formatDegrees(current.apparent_temperature)}`;
    elements.outfitTitle.textContent = outfit.title;
    elements.outfitDetail.textContent = outfit.detail;
    renderOutfitLevel(outfit);
    elements.outfitImage.srcset = `${OUTFIT_ASSETS[outfit.type].imageSmall} 400w, ${OUTFIT_ASSETS[outfit.type].image} 800w`;
    elements.outfitImage.src = OUTFIT_ASSETS[outfit.type].image;
    elements.outfitImage.alt = OUTFIT_ASSETS[outfit.type].alt;
    elements.outfitVisual.dataset.outfit = outfit.type;
    elements.outfitCaption.textContent = OUTFIT_ASSETS[outfit.type].caption;
    elements.essentialTip.textContent = getEssentialTip({
        rain: today.rain,
        uv: today.uv,
        wind: current.wind_speed_10m,
        apparent: current.apparent_temperature,
        maximum: today.maximum,
        minimum: today.minimum,
        humidity: current.relative_humidity_2m
    });

    elements.windSpeed.textContent = `${formatWhole(current.wind_speed_10m)} km/h`;
    elements.cloudCover.textContent = formatPercent(current.cloud_cover);
    elements.rainChance.textContent = formatPercent(today.rain);
    elements.uvIndex.textContent = formatOneDecimal(today.uv);
    elements.humidity.textContent = formatPercent(current.relative_humidity_2m);
    elements.dayRange.textContent = `${formatDegrees(today.maximum)} / ${formatDegrees(today.minimum)}`;
    elements.localNote.textContent = city.note;

    renderForecast(data);
    renderLightForecast();
    calculatePlanner();
}

function renderWeatherUnavailable(city) {
    state.weather = null;
    elements.currentTemperature.textContent = "--°";
    elements.conditionName.textContent = "Weather unavailable";
    elements.feelsLike.textContent = "Try again shortly";
    elements.outfitTitle.textContent = "Check local conditions before heading out.";
    elements.outfitDetail.textContent = "Golden hour and shoot planning remain available while the live forecast reconnects.";
    renderOutfitLevel(null);
    elements.outfitImage.srcset = `${OUTFIT_ASSETS.mild.imageSmall} 400w, ${OUTFIT_ASSETS.mild.image} 800w`;
    elements.outfitImage.src = OUTFIT_ASSETS.mild.image;
    elements.outfitImage.alt = OUTFIT_ASSETS.mild.alt;
    elements.outfitVisual.dataset.outfit = "mild";
    elements.outfitCaption.textContent = OUTFIT_ASSETS.mild.caption;
    elements.essentialTip.textContent = "Take a flexible outer layer until the live forecast returns.";
    elements.windSpeed.textContent = "-- km/h";
    elements.cloudCover.textContent = "--%";
    elements.rainChance.textContent = "--%";
    elements.uvIndex.textContent = "--";
    elements.humidity.textContent = "--%";
    elements.dayRange.textContent = "--° / --°";
    elements.localNote.textContent = city.note;
    elements.forecastGrid.innerHTML = `<div class="forecast-error">The seven-day forecast could not be loaded. Your saved city and shoot planner are still available.</div>`;
    renderLightForecast();
}

function renderOutfitLevel(outfit) {
    const level = outfit?.level || 0;
    elements.outfitLevel.textContent = outfit
        ? `Outfit level ${level} of 10 · ${outfit.name}`
        : "Outfit level unavailable";
    elements.outfitRange.textContent = outfit ? `${outfit.range} feels-like` : "Live reading required";
    elements.outfitMeter.querySelectorAll("span").forEach((segment, index) => {
        segment.classList.toggle("active", index < level);
    });
}

function renderForecast(data) {
    elements.forecastGrid.innerHTML = data.daily.time.map((date, index) => {
        const day = dailyAt(data, index);
        const outfit = getOutfitAdvice({
            apparent: average(day.apparentMaximum, day.apparentMinimum),
            maximum: day.maximum,
            minimum: day.minimum,
            rain: day.rain,
            wind: day.wind,
            uv: day.uv,
            weatherCode: day.weatherCode
        });
        const selected = index === state.selectedForecastIndex;
        const dayName = index === 0 ? "Today" : formatWeekday(date);
        return `
            <button class="forecast-card${selected ? " selected" : ""}" type="button" data-forecast-index="${index}" aria-pressed="${selected}">
                <span class="forecast-day">${dayName}</span>
                <span class="visually-hidden">${getWeatherLabel(day.weatherCode)}</span>
                <span class="forecast-icon" aria-hidden="true">${getWeatherSymbol(day.weatherCode)}</span>
                <strong class="forecast-temp">${formatDegrees(day.maximum)} <small>${formatDegrees(day.minimum)}</small></strong>
                <span class="forecast-outfit">L${outfit.level} · ${outfit.short}</span>
                <p class="forecast-rain">Rain ${formatPercent(day.rain)}</p>
            </button>
        `;
    }).join("");
}

function renderForecastSkeletons() {
    elements.forecastGrid.innerHTML = Array.from({ length: 7 }, () => (
        `<div class="forecast-skeleton" aria-hidden="true"></div>`
    )).join("");
}

function selectForecastDay(event) {
    const card = event.target.closest("[data-forecast-index]");
    if (!card || !state.weather) return;

    state.selectedForecastIndex = Number(card.dataset.forecastIndex);
    renderForecast(state.weather);
    renderLightForecast();

    const selectedDate = state.weather.daily.time[state.selectedForecastIndex];
    elements.plannerCity.value = state.cityId;
    elements.plannerDate.value = selectedDate;
    calculatePlanner();
    showToast(`${state.selectedForecastIndex === 0 ? "Today’s" : `${formatWeekday(selectedDate)}’s`} light forecast selected.`);
}

function renderLightForecast() {
    const city = getCity(state.cityId);
    const date = state.weather?.daily?.time?.[state.selectedForecastIndex] || getTodayInZone(city.timezone);
    const solar = calculateSolarTimes(date, city.latitude, city.longitude);
    const selectedDay = state.weather ? dailyAt(state.weather, state.selectedForecastIndex) : null;
    const goldenMidpoint = midpoint(solar.goldenStart, solar.sunset);
    const cloud = state.weather
        ? getHourlyValue(state.weather, date, goldenMidpoint, "cloud_cover", city.timezone)
        : null;
    const sunsetRain = state.weather
        ? getHourlyValue(state.weather, date, solar.sunset, "precipitation_probability", city.timezone)
        : null;
    const advice = getPhotoAdvice(cloud, sunsetRain, selectedDay?.wind);

    const dayName = state.selectedForecastIndex === 0 ? "Today’s" : `${formatWeekday(date)}’s`;
    elements.lightTitle.textContent = `${dayName} best light`;
    elements.goldenHourTime.textContent = `${formatTime(solar.goldenStart, city.timezone)}–${formatTime(solar.sunset, city.timezone)}`;
    elements.sunsetTime.textContent = formatTime(solar.sunset, city.timezone);
    elements.blueHourTime.textContent = formatTime(solar.blueEnd, city.timezone);
    elements.lightIntro.textContent = `${advice.lead} Golden light begins at ${formatTime(solar.goldenStart, city.timezone)} in ${city.name}.`;
    elements.photoScoreLabel.textContent = advice.label;
    elements.photoAdviceTitle.textContent = advice.title;
    elements.photoAdviceCopy.textContent = advice.copy;
    elements.goldenCloud.textContent = cloud === null ? "Forecast pending" : formatPercent(cloud);
    elements.sunsetRain.textContent = sunsetRain === null ? "Forecast pending" : formatPercent(sunsetRain);

    const cloudAmount = cloud === null ? 45 : clamp(cloud, 0, 100);
    const cloudOne = document.querySelector(".cloud-one");
    const cloudTwo = document.querySelector(".cloud-two");
    const sun = document.querySelector(".sun-shape");
    cloudOne.style.opacity = String(0.25 + cloudAmount / 135);
    cloudTwo.style.opacity = String(0.15 + cloudAmount / 180);
    sun.style.opacity = String(1 - cloudAmount / 150);
}

function calculatePlanner() {
    if (!elements.plannerDate.value) return;

    const city = getCity(elements.plannerCity.value) || getCity(state.cityId);
    const date = elements.plannerDate.value;
    const duration = Number(elements.plannerDuration.value);
    const look = document.querySelector('input[name="light-look"]:checked')?.value || "golden";
    const solar = calculateSolarTimes(date, city.latitude, city.longitude);

    let start;
    let finish;
    let typeLabel;
    let summary;

    if (look === "blue") {
        finish = solar.blueEnd;
        start = addMinutes(finish, -duration);
        typeLabel = "Blue hour transition";
        summary = "This schedule crosses sunset and finishes as the cool blue light fades.";
    } else if (look === "soft") {
        finish = addMinutes(solar.goldenStart, 20);
        start = addMinutes(finish, -duration);
        typeLabel = "Soft daylight";
        summary = "Start before golden hour for softer faces, then finish as the warm colour arrives.";
    } else {
        finish = solar.sunset;
        start = addMinutes(finish, -duration);
        typeLabel = "Golden light";
        summary = "The session builds through warm evening light and finishes at sunset.";
    }

    const arrival = addMinutes(start, -20);
    elements.resultLocation.textContent = `${city.name} · ${formatLongDate(date)}`;
    elements.resultLightType.textContent = typeLabel;
    elements.recommendedStart.textContent = formatTime(start, city.timezone);
    elements.resultSummary.textContent = summary;
    elements.arrivalTime.textContent = formatTime(arrival, city.timezone);
    elements.shootTime.textContent = formatTime(start, city.timezone);
    elements.finishTime.textContent = formatTime(finish, city.timezone);

    const matchingIndex = city.id === state.cityId && state.weather
        ? state.weather.daily.time.indexOf(date)
        : -1;

    if (matchingIndex >= 0) {
        const cloud = getHourlyValue(state.weather, date, midpoint(solar.goldenStart, solar.sunset), "cloud_cover", city.timezone);
        const rain = getHourlyValue(state.weather, date, solar.sunset, "precipitation_probability", city.timezone);
        const advice = getPhotoAdvice(cloud, rain, dailyAt(state.weather, matchingIndex).wind);
        elements.resultNote.querySelector("p").textContent = `${advice.title} ${advice.copy}`;
    } else {
        elements.resultNote.querySelector("p").textContent = "Light times are astronomical estimates. A weather-based sky read appears when the date enters the seven-day forecast.";
    }
}

function getOutfitAdvice(values) {
    const apparent = Math.round(numberOr(values.apparent, average(values.maximum, values.minimum)));
    const rain = numberOr(values.rain, 0);
    const wind = numberOr(values.wind, 0);
    const uv = numberOr(values.uv, 0);
    const wetWeather = rain >= 45 || isRainCode(values.weatherCode);
    const band = OUTFIT_BANDS.find((candidate) => apparent <= candidate.max) || OUTFIT_BANDS.at(-1);
    let type = band.type;
    let title = band.title;
    let detail = band.detail;
    let short = band.short;

    if (wetWeather) {
        if (band.level >= 3 && band.level <= 7) {
            type = "wet";
            title = band.level <= 4
                ? "A light waterproof jacket over warm basics."
                : "A light rain shell over breathable basics.";
            short = band.level <= 4 ? "Warm rain layer" : "Light rain layer";
        }

        detail = band.level >= 8
            ? "Keep the base outfit breathable and add only a compact rain shell; avoid heavy waterproof layers."
            : "Make the outer layer water-resistant and choose shoes that can handle wet ground.";
    } else if (wind >= 35) {
        detail = `Choose a wind-resistant version of the outermost layer. ${band.detail}`;
    } else if (uv >= 7 && band.level >= 7) {
        detail = `Add sunscreen, sunnies and reliable shade. ${band.detail}`;
    }

    return {
        level: band.level,
        name: band.name,
        range: band.range,
        apparent,
        type,
        title,
        detail,
        short
    };
}

function getEssentialTip(values) {
    const rain = numberOr(values.rain, 0);
    const uv = numberOr(values.uv, 0);
    const wind = numberOr(values.wind, 0);
    const apparent = numberOr(values.apparent, 20);
    const humidity = numberOr(values.humidity, 50);
    const dayRange = numberOr(values.maximum, apparent) - numberOr(values.minimum, apparent);

    if (rain >= 60) return "Pack a compact umbrella and wear shoes that can handle wet ground.";
    if (uv >= 8) return "UV will be very high. Add sunscreen, a hat and sunnies before heading out.";
    if (wind >= 35) return "Open and coastal areas will feel cooler. A windproof outer layer will help.";
    if (apparent >= 32) return "Carry water and plan shade breaks through the hottest part of the day.";
    if (dayRange >= 10) return "The temperature swings sharply today, so keep one removable layer close.";
    if (humidity >= 75 && apparent >= 23) return "Humidity will hold the warmth. Choose loose, breathable fabrics.";
    return "Conditions are fairly settled; a small layer keeps the evening flexible.";
}

function getPhotoAdvice(cloudValue, rainValue, windValue) {
    const cloud = cloudValue === null ? null : numberOr(cloudValue, 0);
    const rain = rainValue === null ? null : numberOr(rainValue, 0);
    const wind = windValue === null ? 0 : numberOr(windValue, 0);

    if (rain !== null && rain >= 55) {
        return {
            label: "Weather watch",
            title: "Look for the break after rain.",
            lead: "Showers may interrupt the evening window.",
            copy: "Shelter first, then use wet pavement for reflections. Keep a dry cloth ready for the lens."
        };
    }

    if (cloud === null) {
        return {
            label: "Light times ready",
            title: "Sky detail arrives with the forecast.",
            lead: "The sun-angle calculation is ready.",
            copy: "Check back inside the seven-day window for cloud and rain advice."
        };
    }

    if (cloud < 20) {
        return {
            label: "High contrast",
            title: "Use the sun behind your subject.",
            lead: "A clear sky should produce clean, direct colour.",
            copy: wind >= 35
                ? "Backlight portraits and use a sheltered edge to reduce both glare and wind."
                : "Wait for the late window, backlight portraits, or find open shade until the sun drops."
        };
    }

    if (cloud < 60) {
        return {
            label: "Sunset potential",
            title: "Broken cloud could catch colour.",
            lead: "A mixed sky gives you the best chance of texture and warm breaks.",
            copy: "Watch the western horizon. A clear gap beneath higher cloud can produce a short, vivid sunset."
        };
    }

    if (cloud < 88) {
        return {
            label: "Soft portraits",
            title: "Even light should flatter faces.",
            lead: "Cloud should soften the direct light through the evening.",
            copy: "You can shoot in more directions with fewer harsh shadows. Use colour or a clean background for separation."
        };
    }

    return {
        label: "Flat, even light",
        title: "Prioritise portraits over the sky.",
        lead: "Heavy cloud should make the light soft but reduce sunset colour.",
        copy: "Expose carefully for skin, move closer to your subject and look for strong foreground colour."
    };
}

function calculateSolarTimes(dateString, latitude, longitude) {
    const rad = Math.PI / 180;
    const day = new Date(`${dateString}T12:00:00Z`);
    const julian2000 = 2451545;
    const lw = -longitude * rad;
    const phi = latitude * rad;
    const d = toJulian(day) - julian2000;
    const n = Math.round(d - 0.0009 - lw / (2 * Math.PI));
    const solarApprox = 0.0009 + lw / (2 * Math.PI) + n;
    const anomaly = rad * (357.5291 + 0.98560028 * solarApprox);
    const centre = rad * (
        1.9148 * Math.sin(anomaly) +
        0.02 * Math.sin(2 * anomaly) +
        0.0003 * Math.sin(3 * anomaly)
    );
    const eclipticLongitude = anomaly + centre + rad * 102.9372 + Math.PI;
    const declination = Math.asin(Math.sin(eclipticLongitude) * Math.sin(rad * 23.4397));

    function eveningTime(altitudeDegrees) {
        const altitude = altitudeDegrees * rad;
        const numerator = Math.sin(altitude) - Math.sin(phi) * Math.sin(declination);
        const denominator = Math.cos(phi) * Math.cos(declination);
        const hourAngle = Math.acos(clamp(numerator / denominator, -1, 1));
        const transitApprox = 0.0009 + (hourAngle + lw) / (2 * Math.PI) + n;
        const julian = julian2000 + transitApprox + 0.0053 * Math.sin(anomaly) - 0.0069 * Math.sin(2 * eclipticLongitude);
        return fromJulian(julian);
    }

    return {
        goldenStart: eveningTime(6),
        sunset: eveningTime(-0.833),
        blueEnd: eveningTime(-6)
    };
}

function dailyAt(data, index) {
    return {
        date: data.daily.time[index],
        weatherCode: data.daily.weather_code?.[index],
        maximum: data.daily.temperature_2m_max?.[index],
        minimum: data.daily.temperature_2m_min?.[index],
        apparentMaximum: data.daily.apparent_temperature_max?.[index],
        apparentMinimum: data.daily.apparent_temperature_min?.[index],
        rain: data.daily.precipitation_probability_max?.[index],
        wind: data.daily.wind_speed_10m_max?.[index],
        uv: data.daily.uv_index_max?.[index],
        sunrise: data.daily.sunrise?.[index],
        sunset: data.daily.sunset?.[index]
    };
}

function getHourlyValue(data, date, targetDate, key, timezone) {
    const values = data.hourly?.[key];
    const times = data.hourly?.time;
    if (!Array.isArray(values) || !Array.isArray(times)) return null;

    const targetMinutes = getMinutesInZone(targetDate, timezone);
    let bestIndex = -1;
    let bestDistance = Infinity;

    times.forEach((time, index) => {
        if (!time.startsWith(date)) return;
        const hour = Number(time.slice(11, 13));
        const minute = Number(time.slice(14, 16) || 0);
        const distance = Math.abs(hour * 60 + minute - targetMinutes);
        if (distance < bestDistance) {
            bestDistance = distance;
            bestIndex = index;
        }
    });

    return bestIndex >= 0 && Number.isFinite(values[bestIndex]) ? values[bestIndex] : null;
}

function getMinutesInZone(date, timezone) {
    const parts = new Intl.DateTimeFormat("en-AU", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hourCycle: "h23"
    }).formatToParts(date);
    const hour = Number(parts.find((part) => part.type === "hour")?.value || 0);
    const minute = Number(parts.find((part) => part.type === "minute")?.value || 0);
    return hour * 60 + minute;
}

function updateLocalClock() {
    if (!elements.localTime) return;
    const city = getCity(state.cityId);
    elements.localTime.textContent = formatTime(new Date(), city.timezone);
}

function configurePlannerDate() {
    const city = getCity(state.cityId);
    const today = getTodayInZone(city.timezone);
    const maximum = new Date();
    maximum.setUTCMonth(maximum.getUTCMonth() + 18);
    elements.plannerDate.min = today;
    elements.plannerDate.max = maximum.toISOString().slice(0, 10);
    elements.plannerDate.value = today;
}

function useCurrentLocation() {
    if (!navigator.geolocation) {
        showToast("Location is not available in this browser.");
        return;
    }

    elements.locationButton.disabled = true;
    elements.locationButton.lastChild.textContent = " Locating...";

    navigator.geolocation.getCurrentPosition((position) => {
        const nearest = CITIES.reduce((closest, city) => {
            const distance = haversineDistance(
                position.coords.latitude,
                position.coords.longitude,
                city.latitude,
                city.longitude
            );
            return !closest || distance < closest.distance ? { city, distance } : closest;
        }, null);

        selectCity(nearest.city.id, { syncPlanner: true });
        showToast(`${nearest.city.name} is the nearest supported city.`);
        resetLocationButton();
    }, () => {
        showToast("Location permission was not available. Choose a city instead.");
        resetLocationButton();
    }, { timeout: 8000, maximumAge: 10 * 60 * 1000 });
}

function resetLocationButton() {
    elements.locationButton.disabled = false;
    elements.locationButton.lastChild.textContent = " Use my location";
}

function haversineDistance(lat1, lon1, lat2, lon2) {
    const toRadians = (value) => value * Math.PI / 180;
    const earthRadius = 6371;
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) ** 2 +
        Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) ** 2;
    return earthRadius * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function updateActiveCityChip() {
    elements.cityQuickList.querySelectorAll("[data-city]").forEach((button) => {
        const active = button.dataset.city === state.cityId;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
    });
}

function setStatus(type, text) {
    elements.weatherStatus.className = `weather-status page-shell${type ? ` ${type}` : ""}`;
    elements.statusText.textContent = text;
    elements.weatherStatus.setAttribute("aria-busy", String(!type));
}

function toggleNavigation() {
    const open = elements.menuToggle.getAttribute("aria-expanded") !== "true";
    elements.menuToggle.setAttribute("aria-expanded", String(open));
    elements.menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    elements.siteNav.classList.toggle("open", open);
    document.body.classList.toggle("nav-open", open);
}

function closeNavigation() {
    elements.menuToggle.setAttribute("aria-expanded", "false");
    elements.menuToggle.setAttribute("aria-label", "Open navigation");
    elements.siteNav.classList.remove("open");
    document.body.classList.remove("nav-open");
}

function showToast(message) {
    window.clearTimeout(state.toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("visible");
    state.toastTimer = window.setTimeout(() => {
        elements.toast.classList.remove("visible");
    }, 2800);
}

function readStoredCity() {
    try {
        const cityId = localStorage.getItem("ozsnap-city");
        return CITIES.some((city) => city.id === cityId) ? cityId : "brisbane";
    } catch (_) {
        return "brisbane";
    }
}

function readWeatherCache(cityId) {
    try {
        const cached = JSON.parse(localStorage.getItem(`ozsnap-weather-${cityId}`));
        return cached?.data && cached?.fetchedAt ? cached : null;
    } catch (_) {
        return null;
    }
}

function writeWeatherCache(cityId, data) {
    try {
        localStorage.setItem(`ozsnap-weather-${cityId}`, JSON.stringify({
            fetchedAt: Date.now(),
            data
        }));
    } catch (_) {
        // Weather still renders when storage is full or unavailable.
    }
}

function getCity(cityId) {
    return CITIES.find((city) => city.id === cityId);
}

function getWeatherLabel(code) {
    return WEATHER_CODES[code]?.[0] || "Changeable conditions";
}

function getWeatherSymbol(code) {
    return WEATHER_CODES[code]?.[1] || "○";
}

function isRainCode(code) {
    return Number.isFinite(code) && ((code >= 51 && code <= 67) || (code >= 80 && code <= 99));
}

function formatDegrees(value) {
    return Number.isFinite(Number(value)) ? `${Math.round(Number(value))}°` : "--°";
}

function formatPercent(value) {
    return Number.isFinite(Number(value)) ? `${Math.round(Number(value))}%` : "--%";
}

function formatWhole(value) {
    return Number.isFinite(Number(value)) ? Math.round(Number(value)) : "--";
}

function formatOneDecimal(value) {
    return Number.isFinite(Number(value)) ? Number(value).toFixed(1).replace(".0", "") : "--";
}

function formatTime(date, timezone) {
    if (!(date instanceof Date) || Number.isNaN(date.valueOf())) return "--:--";
    return new Intl.DateTimeFormat("en-AU", {
        timeZone: timezone,
        hour: "numeric",
        minute: "2-digit",
        hour12: true
    }).format(date).replace(" am", "am").replace(" pm", "pm");
}

function formatWeekday(dateString) {
    return new Intl.DateTimeFormat("en-AU", {
        weekday: "short",
        timeZone: "UTC"
    }).format(new Date(`${dateString}T12:00:00Z`));
}

function formatLongDate(dateString) {
    return new Intl.DateTimeFormat("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
        timeZone: "UTC"
    }).format(new Date(`${dateString}T12:00:00Z`));
}

function getTodayInZone(timezone) {
    const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: timezone,
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(new Date());
    const values = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
    return `${values.year}-${values.month}-${values.day}`;
}

function toJulian(date) {
    return date.valueOf() / 86400000 - 0.5 + 2440588;
}

function fromJulian(julian) {
    return new Date((julian + 0.5 - 2440588) * 86400000);
}

function addMinutes(date, minutes) {
    return new Date(date.valueOf() + minutes * 60000);
}

function midpoint(first, second) {
    return new Date((first.valueOf() + second.valueOf()) / 2);
}

function average(first, second) {
    const a = Number(first);
    const b = Number(second);
    if (Number.isFinite(a) && Number.isFinite(b)) return (a + b) / 2;
    if (Number.isFinite(a)) return a;
    if (Number.isFinite(b)) return b;
    return 20;
}

function numberOr(value, fallback) {
    if (value === null || value === undefined || value === "") return fallback;
    return Number.isFinite(Number(value)) ? Number(value) : fallback;
}

function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
}
