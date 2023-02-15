const teams = [
    { name: "Team 1", players: ["Player 1", "Player 2"] },
    { name: "Team 2", players: ["Player 3", "Player 4"] },
    { name: "Team 3", players: ["Player 1", "Player 2"] },
    { name: "Team 4", players: ["Player 3", "Player 4"] },
    { name: "Team 5", players: ["Player 1", "Player 2"] },
    { name: "Team 6", players: ["Player 3", "Player 4"] },
    { name: "Team 7", players: ["Player 3", "Player 4"] },
    { name: "Team 8", players: ["Player 1", "Player 2"] },
    { name: "Team 9", players: ["Player 3", "Player 4"] },
    { name: "Team 10", players: ["Player 19", "Player 20"] }
  ];
  
  const schedule = [];
  const startDate = new Date("2023-04-03");
  
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      schedule.push({
        date: new Date(startDate.getTime() + 7 * schedule.length * 24 * 60 * 60 * 1000),
        teams: [teams[i], teams[j]]
      });
    }
  }
  
  console.log(schedule);