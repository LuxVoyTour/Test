document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service");
    const additionalFields = document.getElementById("additional-fields");
    const airportFields = document.getElementById("airport-transfer-fields");
    const golfFields = document.getElementById("golf-day-fields");
    const vipFields = document.getElementById("vip-service-fields");

    function hideAllFields() {
        airportFields.classList.add("hidden");
        golfFields.classList.add("hidden");
        vipFields.classList.add("hidden");
        additionalFields.classList.add("hidden");
    }

    serviceSelect.addEventListener("change", function () {
        hideAllFields();
        if (this.value) {
            additionalFields.classList.remove("hidden");
            if (this.value === "airport-transfer") {
                airportFields.classList.remove("hidden");
            } else if (this.value === "golf-day") {
                golfFields.classList.remove("hidden");
            } else if (this.value === "vip-service") {
                vipFields.classList.remove("hidden");
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service");
    const additionalFields = document.getElementById("additional-fields");
    const airportFields = document.getElementById("airport-transfer-fields");
    const golfFields = document.getElementById("golf-day-fields");
    const vipFields = document.getElementById("vip-service-fields");
    const golfCourseSelect = document.getElementById("golf-course");
    const vipOptionSelect = document.getElementById("vip-option");

    function hideAllFields() {
        airportFields.classList.add("hidden");
        golfFields.classList.add("hidden");
        vipFields.classList.add("hidden");
        additionalFields.classList.add("hidden");
    }

    serviceSelect.addEventListener("change", function () {
        hideAllFields();
        if (this.value) {
            additionalFields.classList.remove("hidden");
            if (this.value === "airport-transfer") {
                airportFields.classList.remove("hidden");
            } else if (this.value === "golf-day") {
                golfFields.classList.remove("hidden");
                loadGolfCourses();
            } else if (this.value === "vip-service") {
                vipFields.classList.remove("hidden");
                loadVipOptions();
            }
        }
    });

    function loadGolfCourses() {
        fetch("golf-day.html")
            .then(response => response.text())
            .then(html => {
                const doc = new DOMParser().parseFromString(html, "text/html");
                const options = doc.querySelectorAll(".golf-course-name");
                golfCourseSelect.innerHTML = '<option value="">-- Select a golf course --</option>';
                options.forEach(item => {
                    golfCourseSelect.innerHTML += `<option value="${item.textContent.trim()}">${item.textContent.trim()}</option>`;
                });
            })
            .catch(error => console.error("Error loading golf courses:", error));
    }

    function loadVipOptions() {
        fetch("vip-service.html")
            .then(response => response.text())
            .then(html => {
                const doc = new DOMParser().parseFromString(html, "text/html");
                const options = doc.querySelectorAll(".vip-option-name");
                vipOptionSelect.innerHTML = '<option value="">-- Select a VIP service --</option>';
                options.forEach(item => {
                    vipOptionSelect.innerHTML += `<option value="${item.textContent.trim()}">${item.textContent.trim()}</option>`;
                });
            })
            .catch(error => console.error("Error loading VIP options:", error));
    }
});