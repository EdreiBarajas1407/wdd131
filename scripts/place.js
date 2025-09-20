document.addEventListener("DOMContentLoaded", function () {
    const temperature = 17;
    const conditions = "Cloudy";
    const windSpeed = 12;

    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    function isWindChillApplicable(temp, wind) {
        return temp <= 10 && wind > 4.8;
    }

    const tempRow = document.createElement("tr");
    tempRow.innerHTML = `<td class="label"><b>Temperature:</b></td><td>${temperature} °C</td>`;

    const condRow = document.createElement("tr");
    condRow.innerHTML = `<td class="label"><b>Conditions:</b></td><td>${conditions}</td>`;

    const windRow = document.createElement("tr");
    windRow.innerHTML = `<td class="label"><b>Wind:</b></td><td>${windSpeed} km/h</td>`;

    const windChillRow = document.createElement("tr");
    let windChillValue = "N/A";
    if (isWindChillApplicable(temperature, windSpeed)) {
        windChillValue = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
    }
    windChillRow.innerHTML = `<td class="label"><b>Wind Chill:</b></td><td>${windChillValue}</td>`;

    const table = document.querySelector(".weather table");
    table.appendChild(tempRow);
    table.appendChild(condRow);
    table.appendChild(windRow);
    table.appendChild(windChillRow);
});