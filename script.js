// Funkcja do pokazywania/ukrywania pól w zależności od wybranej usługi
document.getElementById('serviceType').addEventListener('change', function() {
    const serviceType = this.value;
    const locationFields = document.getElementById('locationFields');
    const dateTimeFields = document.getElementById('dateTimeFields');
    const vipOptions = document.getElementById('vipOptions');
    const drinkOptions = document.getElementById('drinkOptions');

    // Pokazuj/ukryj pola lokalizacji i daty/czasu dla VIP i Airport Transfer
    if (serviceType === 'vip' || serviceType === 'airport') {
        locationFields.classList.remove('hidden');
        dateTimeFields.classList.remove('hidden');
    } else {
        locationFields.classList.add('hidden');
        dateTimeFields.classList.add('hidden');
    }

    // Pokazuj/ukryj opcje VIP i napojów tylko dla VIP Service
    if (serviceType === 'vip') {
        vipOptions.classList.remove('hidden');
        drinkOptions.classList.remove('hidden');
    } else {
        vipOptions.classList.add('hidden');
        drinkOptions.classList.add('hidden');
    }
});

// Funkcja do obsługi formularza
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zapobiega domyślnej wysyłce formularza

    // Zbierz dane z formularza
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Wyświetl dane w konsoli (można zastąpić wysyłką na serwer)
    console.log('Form Data:', data);

    // Wyświetl komunikat o sukcesie
    alert('Thank you for your booking! We will contact you shortly.');
    this.reset(); // Resetuj formularz po wysłaniu
});