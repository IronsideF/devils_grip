use leaderboard;
db.dropDatabase();

db.scores.insertMany([
    {
        name: "bill",
        score: 60,
        difficulty: "Colours"
    },
    {
        name: "bob",
        score: 50,
        difficulty: "Normal"
    },
    {
        name: "brian",
        score: 40,
        difficulty: "Normal"
    }
])