use leaderboard;
db.dropDatabase();

db.scores.insertMany([
    {
        name: "bill",
        score: 60,
        difficulty: "colours"
    },
    {
        name: "bob",
        score: 50,
        difficulty: "normal"
    },
    {
        name: "brian",
        score: 40,
        difficulty: "normal"
    }
])