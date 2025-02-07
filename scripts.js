document.addEventListener("DOMContentLoaded", function () {
    const serviceSelect = document.getElementById("service");
    const dynamicFields = document.getElementById("dynamic-fields");

    serviceSelect.addEventListener("change", function () {
        const selectedService = serviceSelect.value;
        dynamicFields.innerHTML = ""; // Clear previous content

        if (selectedService === "airport-transfer") {
            dynamicFields.innerHTML = `
                <label for="pickup">Pick Up:</label>
                <input type="text" id="pickup" name="pickup" required>

                <label for="destination">Destination:</label>
                <input type="text" id="destination" name="destination" required>

                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>

                <label for="time">Time:</label>
                <input type="time" id="time" name="time" required>

                <label for="pay-method">Pay Method:</label>
                <select id="pay-method" name="pay-method" required>
                    <option value="credit-card">Credit Card</option>
                    <option value="crypto">Crypto</option>
                    <option value="cash">Cash</option>
                </select>
            `;
        } else if (selectedService === "golf-day") {
            dynamicFields.innerHTML = `
                <label for="pickup">Pick Up:</label>
                <input type="text" id="pickup" name="pickup" required>

                <label for="golf-course">Select Golf Course:</label>
                <select id="golf-course" name="golf-course" required>
                    <option value="St Andrews Links (Old Course)">St Andrews Links (Old Course)</option>
                    <option value="Royal Dornoch Golf Club">Royal Dornoch Golf Club</option>
                    <option value="Muirfield">Muirfield</option>
                    <option value="Carnoustie Golf Links">Carnoustie Golf Links</option>
                    <option value="Royal Troon Golf Club">Royal Troon Golf Club</option>
                    <option value="Turnberry (Ailsa Course)">Turnberry (Ailsa Course)</option>
                    <option value="Kingsbarns Golf Links">Kingsbarns Golf Links</option>
                </select>

                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>

                <label for="time">Time:</label>
                <input type="time" id="time" name="time" required>

                <label for="pay-method">Pay Method:</label>
                <select id="pay-method" name="pay-method" required>
                    <option value="credit-card">Credit Card</option>
                    <option value="crypto">Crypto</option>
                    <option value="cash">Cash</option>
                </select>
            `;
        } else if (selectedService === "vip-service") {
            dynamicFields.innerHTML = `
                <label for="pickup">Pick Up:</label>
                <input type="text" id="pickup" name="pickup" required>

                <label for="destination">Destination:</label>
                <input type="text" id="destination" name="destination" required>

                <label for="date">Date:</label>
                <input type="date" id="date" name="date" required>

                <label for="time">Time:</label>
                <input type="time" id="time" name="time" required>

                <label for="vip-service">Select VIP Service:</label>
                <select id="vip-service" name="vip-service" required>
                    <option value="Hourly VIP Service">Hourly VIP Service</option>
                    <option value="Half Day Rate">Half Day Rate</option>
                    <option value="Full Day Rate">Full Day Rate</option>
                    <option value="Extended Day Rate">Extended Day Rate</option>
                </select>

                <label for="pay-method">Pay Method:</label>
                <select id="pay-method" name="pay-method" required>
                    <option value="credit-card">Credit Card</option>
                    <option value="crypto">Crypto</option>
                    <option value="cash">Cash</option>
                </select>
            `;
        }
    });
});