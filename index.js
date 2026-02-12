const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    const hari = req.body.queryResult.parameters.hari;

    const jadwal = {
        senin: "08:00 - Matematika, 10:00 - Bahasa Indonesia",
        selasa: "08:00 - IPA, 10:00 - IPS",
        rabu: "08:00 - Bahasa Inggris, 10:00 - Seni Budaya",
        kamis: "08:00 - PJOK, 10:00 - PPKn",
        jumat: "08:00 - Agama, 09:30 - Prakarya"
    };

    let jawaban = jadwal[hari.toLowerCase()] || "Jadwal tidak ditemukan";

    res.json({
        fulfillmentText: `Jadwal hari ${hari} adalah ${jawaban}`
    });
});

app.get("/", (req, res) => {
    res.send("Webhook aktif");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server berjalan di port " + PORT);
});
