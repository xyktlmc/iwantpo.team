document.addEventListener("DOMContentLoaded", () => {
    const tradeList = document.getElementById("trade-list");

    fetch("trades.json")
        .then(response => response.json())
        .then(trades => {
            tradeList.innerHTML = ""; // Clear the loading message
            trades.forEach(trade => {
                const tradeItem = document.createElement("div");
                tradeItem.classList.add("trade-item");

                const inputItems = trade.in.map(item => `<div class="item"><img src="${item.src}" alt="${item.name}"  /><p>${item.count}</p></div>`).join("\n");
                const outputItems = trade.out.map(item => `<div class="item"><img src="${item.src}" alt="${item.name}"  /><p>${item.count}</p></div>`).join("\n");

                tradeItem.innerHTML = `
                    <div id="in-items">${inputItems}</div>
                    <img
                    <div id="out-items">${outputItems}</div>
                `;
                tradeList.appendChild(tradeItem);
            });
        })
        .catch(error => {
            tradeList.innerHTML = "<p>Error loading trades. Please try again later.</p>";
            console.error("Error fetching trades:", error);
        });
});

