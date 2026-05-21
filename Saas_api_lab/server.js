const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

const PORT = 3000;

/*
Fake SaaS users
*/

const users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@company.com",
        role: "admin",
        internal_id: "INT-001"
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@company.com",
        role: "user",
        internal_id: "INT-002"
    }
];

/*
Public endpoint
*/

app.get("/", (req, res) => {
    res.json({
        status: "SaaS API Running"
    });
});

/*
Users endpoint
No authentication
Intentional security weakness
*/

app.get("/api/users", (req, res) => {
    res.json(users);
});

/*
Single user endpoint
*/

app.get("/api/users/:id", (req, res) => {

    const user = users.find(
        u => u.id == req.params.id
    );

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    res.json(user);
});

/*
Health endpoint
*/

app.get("/health", (req, res) => {
    res.json({
        api: "healthy"
    });
});

app.listen(PORT, () => {
    console.log(
        `Server running on port ${PORT}`
    );
});
