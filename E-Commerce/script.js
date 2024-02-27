<script>
    // Function to calculate and update the total price
    function updateTotal() {
        // Get all the rows of the table except the header row
        var rows = document.querySelectorAll(".cart-page table tr:not(:first-child)");

        var totalPrice = 0;

        // Iterate through each row to calculate the total price
        rows.forEach(function(row) {
            var quantity = parseInt(row.querySelector("input[type='number']").value);
            var price = parseFloat(row.querySelector("td:nth-child(3)").textContent.replace("$", ""));
            totalPrice += quantity * price;
        });

        // Update the total price in the "Grand Total" section
        document.querySelector(".total-price table tr:last-child td:last-child").textContent = "$" + totalPrice.toFixed(2);
    }

    // Add event listener to input fields to recalculate total when quantity changes
    var quantityInputs = document.querySelectorAll(".cart-page input[type='number']");
    quantityInputs.forEach(function(input) {
        input.addEventListener("change", updateTotal);
    });

    // Call the updateTotal function initially to display the initial total
    updateTotal();
</script>
