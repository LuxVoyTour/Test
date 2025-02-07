<script>
        // Dynamiczne pokazywanie/ukrywanie pól w zależności od wybranej usługi
        document.getElementById('serviceType').addEventListener('change', function() {
            const serviceType = this.value;
            const vipOptions = document.getElementById('vipOptions');
            const golfOptions = document.getElementById('golfOptions');

            // Ukryj wszystkie opcje
            vipOptions.classList.add('hidden');
            golfOptions.classList.add('hidden');

            // Pokaż odpowiednie opcje
            if (serviceType === 'vip') {
                vipOptions.classList.remove('hidden');
            } else if (serviceType === 'golf') {
                golfOptions.classList.remove('hidden');
            }
        });
    </script>
</body>
</html>
```