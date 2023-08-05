document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input fields and result element
    const loanAmountInput = document.getElementById("loan-amount");
    const downPaymentInput = document.getElementById("down-payment");
    const interestRateInput = document.getElementById("interest-rate");
    const loanTermInput = document.getElementById("loan-term");
    const calculateButton = document.getElementById("calculate-button");
    const resultElement = document.getElementById("result");

    calculateButton.addEventListener("click", function () {
        // Parse input values
        const loanAmount = parseFloat(loanAmountInput.value) - parseFloat(downPaymentInput.value);
        const interestRate = parseFloat(interestRateInput.value) / 100 / 12; // Monthly interest rate
        const loanTerm = parseFloat(loanTermInput.value) * 12; // Convert years to months

        // Calculate monthly mortgage payment
        const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

        // Display result
        resultElement.textContent = `Monthly Payment: £ ${monthlyPayment.toFixed(2)}`;
    });
});
