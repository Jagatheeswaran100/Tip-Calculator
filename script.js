document.addEventListener("DOMContentLoaded", () => {
    const billAmountInput = document.getElementById("billAmount");
    const numPeopleInput = document.getElementById("numPeople");
    const tipButtons = document.querySelectorAll(".tip-btn");
    const tipAmountDisplay = document.getElementById("tipAmount");
    const totalAmountDisplay = document.getElementById("totalAmount");

    let billAmount = 0;
    let tipPercentage = 0.15; // default to 15%
    let numPeople = 1;

    function calculateTip() {
        if (numPeople < 1) numPeople = 1;
        const tipAmount = billAmount * tipPercentage;
        const totalAmount = (billAmount + tipAmount) / numPeople;
        tipAmountDisplay.textContent = `Tip Amount: $${tipAmount.toFixed(2)}`;
        totalAmountDisplay.textContent = `Total Amount per Person: $${totalAmount.toFixed(2)}`;
    }

    billAmountInput.addEventListener("input", (e) => {
        billAmount = parseFloat(e.target.value) || 0;
        calculateTip();
    });

    numPeopleInput.addEventListener("input", (e) => {
        numPeople = parseInt(e.target.value) || 1;
        calculateTip();
    });

    tipButtons.forEach(button => {
        button.addEventListener("click", () => {
            tipPercentage = parseFloat(button.getAttribute("data-tip"));
            tipButtons.forEach(btn => btn.classList.remove("selected"));
            button.classList.add("selected");
            calculateTip();
        });
    });

    tipButtons[1].classList.add("selected");
    calculateTip();
});
