fetch("/api/gamer", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ value })
})
