// Advertisement statistics

let impressions = 0;
let clicks = 0;


// Count advertisement impression
window.onload = function () {

    impressions++;

    document.getElementById("impressions")
        .textContent = impressions;
};


// Main banner advertisement click

document.getElementById("mainAd")
    .addEventListener("click", function () {

        clicks++;

        document.getElementById("clicks")
            .textContent = clicks;

        alert(
            "Advertisement clicked!\n" +
            "You have viewed our special travel offer."
        );

    });


// Sponsored advertisement click

function sponsoredAdClick() {

    clicks++;

    document.getElementById("clicks")
        .textContent = clicks;

    alert(
        "Sponsored Offer!\n\n" +
        "You are eligible for ₹100 cashback."
    );
}


// Ticket booking

function bookTicket() {

    const from =
        document.getElementById("from").value;

    const to =
        document.getElementById("to").value;

    const date =
        document.getElementById("date").value;

    const passengers =
        document.getElementById("passengers").value;


    // Validate input

    if (from === "" || to === "" || date === "") {

        alert(
            "Please enter From, To and Travel Date."
        );

        return;
    }


    // Ticket price

    const pricePerTicket = 500;

    const totalPrice =
        pricePerTicket * Number(passengers);


    // Display result

    const result =
        document.getElementById("result");

    result.style.display = "block";


    result.innerHTML = `
        <h3>🎫 Booking Summary</h3>

        <p>
            <strong>From:</strong>
            ${from}
        </p>

        <p>
            <strong>To:</strong>
            ${to}
        </p>

        <p>
            <strong>Travel Date:</strong>
            ${date}
        </p>

        <p>
            <strong>Passengers:</strong>
            ${passengers}
        </p>

        <p>
            <strong>Price per Ticket:</strong>
            ₹${pricePerTicket}
        </p>

        <p>
            <strong>Total Price:</strong>
            ₹${totalPrice}
        </p>

        <button onclick="confirmBooking()">
            Confirm Booking
        </button>
    `;
}


// Confirm booking

function confirmBooking() {

    const bookingId =
        "QT" +
        Math.floor(
            Math.random() * 900000 + 100000
        );


    alert(
        "✅ Booking Confirmed!\n\n" +
        "Booking ID: " +
        bookingId
    );

}