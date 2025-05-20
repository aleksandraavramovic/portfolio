document.getElementById('calculateDiscounts').addEventListener('click', function() {
    // Unos podataka
    const months = parseInt(document.getElementById('months').value);
    const price = parseFloat(document.getElementById('price').value);
    const newMembers = parseInt(document.getElementById('newMembers').value);
    const membershipMonths = parseInt(document.getElementById('membershipMonths').value);
    const trainings = parseInt(document.getElementById('trainings').value);

    // Popust za dovodjenje novih vežbača
    let referralDiscount = 0;
    if (newMembers >= 2 && newMembers <= 3) {
        referralDiscount = 0.50 * price;  // 50% popusta
    } else if (newMembers >= 4) {
        referralDiscount = price;  // 100% popusta
    }

    // Popust za aktivnost
    let activityDiscount = 0;
    if (trainings >= 15 && trainings <= 19) {
        activityDiscount = trainings * 0.05;  // 5% po treningu
    } else if (trainings >= 20) {
        activityDiscount = trainings * 0.1;  // 10% po treningu
    }

    // Popust za lojalnost
    let loyaltyDiscount = membershipMonths * 0.005;  // 0.5% po mesecu članstva
    if (loyaltyDiscount > 1) loyaltyDiscount = 1;  // Maksimalni popust je 100%

    // Prikazivanje rezultata
    document.getElementById('referralDiscount').textContent = `Popust za dovodjenje novih vežbača: ${referralDiscount.toFixed(2)} RSD`;
    document.getElementById('activityDiscount').textContent = `Popust za aktivnost: ${activityDiscount.toFixed(2)} RSD`;
    document.getElementById('loyaltyDiscount').textContent = `Popust za lojalnost: ${(loyaltyDiscount * 100).toFixed(2)}%`;

    // Ukupni popust
    let totalDiscount = referralDiscount + activityDiscount + (loyaltyDiscount * price);
    document.getElementById('totalDiscount').textContent = `Ukupni popust: ${totalDiscount.toFixed(2)} RSD`;
    
});