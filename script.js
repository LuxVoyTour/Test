document.addEventListener("DOMContentLoaded", function () {
    const serviceType = document.getElementById("serviceType");
    const locationFields = document.getElementById("locationFields");
    const dateTimeFields = document.getElementById("dateTimeFields");
    const vipOptions = document.getElementById("vipOptions");
    const drinkOptions = document.getElementById("drinkOptions");

const golfOptions = document.getElementById("golfOptions");
    ;
    serviceType.addEventListener("change", function () {
        const selectedService = serviceType.value;

        // Show location and date/time fields for VIP and Airport Transfer
        if (selectedService === "vip" || selectedService === "airport" || seledtedService === "golf") {
            locationFields.classList.remove("hidden");
            dateTimeFields.classList.remove("hidden");
        } else {
            locationFields.classList.add("hidden");
            dateTimeFields.classList.add("hidden");
        }

        // Show VIP options
        if (selectedService === "vip") {
            vipOptions.classList.remove("hidden");
            drinkOptions.classList.remove("hidden");
        } else {
            vipOptions.classList.add("hidden");
            drinkOptions.classList.add("hidden");
        }
    });
});
// Show golf options
        if (selectedService === "vip") {
            golfOptions.classList.remove("hidden");
            
        } else {
            golfOptions.classList.add("hidden");
            
});