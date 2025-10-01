document.addEventListener("DOMContentLoaded", () => {
    const tradeList = document.getElementById("trade-list");

    fetch("trades.json")
        .then(response => response.json())
        .then(trades => {
            tradeList.innerHTML = ""; // Clear the loading message
            trades.forEach(trade => {
                const tradeItem = document.createElement("div");
                tradeItem.classList.add("trade-item");

                const inputItems = trade.in.map(item => `${item.count}x ${item.name}`).join(", ");
                const outputItems = trade.out.map(item => `${item.count}x ${item.name}`).join(", ");

                tradeItem.innerHTML = `
                    <p><strong>Input:</strong> ${inputItems}</p>
                    <p><strong>Output:</strong> ${outputItems}</p>
                `;
                tradeList.appendChild(tradeItem);
            });
        })
        .catch(error => {
            tradeList.innerHTML = "<p>Error loading trades. Please try again later.</p>";
            console.error("Error fetching trades:", error);
        });
});
