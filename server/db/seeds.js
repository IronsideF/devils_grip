use leaderboard;
db.dropDatabase();

db.scores.insertMany([
    {
        name: "bill",
        score: 60
    },
    {
        name: "bob",
        score: 50
    },
    {
        name: "brian",
        score: 40
    }
])