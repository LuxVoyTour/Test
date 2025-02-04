document.addEventListener("DOMContentLoaded", function () {
    const serviceType = document.getElementById("serviceType");
    const locationFields = document.getElementById("locationFields");
    const vipOptions = document.getElementById("vipOptions");
    const tourOptions = document.getElementById("tourOptions");
    const drinkOptions = document.getElementById("drinkOptions");

    serviceType.addEventListener("change", function () {
        const selectedService = serviceType.value;

        // Show location fields for VIP and Airport Transfer
        if (selectedService === "vip" || selectedService === "airport") {
            locationFields.classList.remove("hidden");
        } else {
            locationFields.classList.add("hidden");
        }

        // Show VIP options
        if (selectedService === "vip") {
            vipOptions.classList.remove("hidden");
            drinkOptions.classList.remove("hidden");
        } else {
            vipOptions.classList.add("hidden");
        }

        // Show Tour options
        if (selectedService === "tour") {
            tourOptions.classList.remove("hidden");
            drinkOptions.classList.remove("hidden");
        } else {
            tourOptions.classList.add("hidden");
        }

        // Hide drink options for Airport Transfer
        if (selectedService === "airport") {
            drinkOptions.classList.add("hidden");
        }
    });
});