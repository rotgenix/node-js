const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));

const users = require("./MOCK_DATA.json")

app.get("/users", (req, res) => {
    const html = `
        <ul>
            ${users.map((user) => `<li>${user?.first_name}</li>`).join("")}
        </ul>`
    return res.send(html);
});

// REST API
app.get("/api/users", (req, res) => {
    return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
});

app.post("/api/users", (req, res) => {
    const body = req.body;
    console.log(body);
    users.push({ ...body, id: users?.length + 1 });
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({ status: "success", id: users?.length + 1 });
    });
});

app.patch("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
    return res.json({ status: "pending" });
});

// OR

app.route("/api/users/:id")
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = users.find((user) => user.id === id);
        return res.json(user);
    })
    .patch((req, res) => {
        // console.log(object)
        return res.json({ status: "pending" });
    })
    .delete((req, res) => {
        // console.log(object)
        return res.json({ status: "pending" });
    })

const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running")
});