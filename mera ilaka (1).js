const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let residents = [];

app.get("/", (req, res) => {
    res.send("Welcome to Meta Ilaka API");
});

app.post("/register", (req, res) => {

    const resident = {
        id: residents.length + 1,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        houseNo: req.body.houseNo
    };

    residents.push(resident);

    res.json({
        message: "Resident Registered Successfully",
        resident
    });

});

app.get("/residents", (req, res) => {
    res.json(residents);
});

app.listen(3000, () => {
    console.log("Server Running on Port 3000");
});