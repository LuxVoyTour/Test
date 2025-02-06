document.addEventListener("DOMContentLoaded", function () {
    // Dynamiczne pokazywanie/ukrywanie pól w formularzu rezerwacji
    const serviceType = document.getElementById("serviceType");
    const dateTimeFields = document.getElementById("dateTimeFields");

    if (serviceType) {
        serviceType.addEventListener("change", function () {
            const selectedService = serviceType.value;

            if (selectedService === "vip" || selectedService === "airport" || selectedService === "golf") {
                dateTimeFields.classList.remove("hidden");
            } else {
                dateTimeFields.classList.add("hidden");
            }
        });
    }
});