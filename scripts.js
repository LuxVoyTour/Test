document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service");
    const airportFields = document.getElementById("airport-transfer-fields");
    const golfFields = document.getElementById("golf-day-fields");
    const vipFields = document.getElementById("vip-service-fields");

    function hideAllFields() {
        airportFields.classList.add("hidden");
        golfFields.classList.add("hidden");
        vipFields.classList.add("hidden");
    }

    serviceSelect.addEventListener("change", function () {
        hideAllFields();
        if (this.value === "airport-transfer") {
            airportFields.classList.remove("hidden");
        } else if (this.value === "golf-day") {
            golfFields.classList.remove("hidden");
        } else if (this.value === "vip-service") {
            vipFields.classList.remove("hidden");
        }
    });
});