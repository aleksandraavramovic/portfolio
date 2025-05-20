let q;

function setTheme(grad) {
    document.body.className = grad;
}

function sati(grad) {
    if (q) clearInterval(q);
    setTheme(grad);
    let zona = "";
    let naziv = "";

    if (grad === 'tokio') {
        zona = 'Asia/Tokyo';
        naziv = 'Tokio';
    } else if (grad === 'london') {
        zona = 'Europe/London';
        naziv = 'London';
    } else if (grad === 'beograd') {
        zona = 'Europe/Belgrade';
        naziv = 'Beograd';
    } else if (grad === 'moskva') {
        zona = 'Europe/Moscow';
        naziv = 'Moskva';
    } else if (grad === 'peking') {
        zona = 'Asia/Shanghai';
        naziv = 'Peking';
    } else if (grad === 'la') {
        zona = 'America/Los_Angeles';
        naziv = 'Los Anđeles';
    } else if (grad === 'nyc') {
        zona = 'America/New_York';
        naziv = 'Nju Jork';
    }

    function tik() {
        const sada = new Date();
        const vreme = new Intl.DateTimeFormat('en-US', {
            timeZone: zona,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        }).format(sada);
        document.getElementById("vreme").innerHTML = naziv + ": " + vreme;
    }

    q = setInterval(tik, 1000);
    tik();
}
