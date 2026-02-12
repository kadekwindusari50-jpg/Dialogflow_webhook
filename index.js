const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    const hari = req.body.queryResult.parameters.hari;

    const jadwal = {
        senin: `
08:10 - 10:10 Agama
10:40 - 15:00 Dasar dasar akuntansi`,

        selasa: `
07:30 - 09:30 Pjok
09:30 - 11:20 Matematika
11:20 - 15:40 Ipas`,

        rabu: `
07:30 - 08:50 Sejarah
08:50 - 13:20 Dasar dasar akuntansi
13:40 - 15:00 Kka`,

        kamis: `
07:30 - 08:50 Bahasa indonesia
08:50 - 12:00 Informatika
12:00 - 15:00 Bahasa inggris
15:00 - 15:40 Bk`,

        jumat: `
08:10 - 09:30 Seni budaya
09:30 - 11:20 Ppkn
11:20 - 12:40 Bahasa indonesia
12:40 - 14:20 Bahasa bali
14:20 - 15:40 Matematika
    };

    let jawaban = jadwal[hari?.toLowerCase()] || "Jadwal tidak ditemukan";

    res.json({
        fulfillmentText: `Jadwal hari ${hari} adalah:\n${jawaban}`
    });
});

app.get("/", (req, res) => {
    res.send("Webhook aktif");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server berjalan di port " + PORT);
});
