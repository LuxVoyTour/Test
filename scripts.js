// Dynamiczne pokazywanie/ukrywanie pól w zależności od wybranej usługi
document.getElementById('serviceType').addEventListener('change', function() {
    const serviceType = this.value;
    const airportFields = document.getElementById('airportFields');
    const vipFields = document.getElementById('vipFields');
    const golfFields = document.getElementById('golfFields');

    // Ukryj wszystkie sekcje
    airportFields.classList.add('hidden');
    vipFields.classList.add('hidden');
    golfFields.classList.add('hidden');

    // Pokaż odpowiednie sekcje
    if (serviceType === 'airport') {
        airportFields.classList.remove('hidden');
    } else if (serviceType === 'vip') {
        vipFields.classList.remove('hidden');
    } else if (serviceType === 'golf') {
        golfFields.classList.remove('hidden');
    }
});