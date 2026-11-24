
// =====================================
// AGRIVISION - REGIONAL CROP DATA
// =====================================

const regionalCrops = {
    "Bagalkot": ["Jowar", "Maize", "Pulses"],
    "Ballari": ["Cotton", "Jowar", "Groundnut"],
    "Belagavi": ["Sugarcane", "Maize", "Soybean"],
    "Bengaluru Rural": ["Ragi", "Maize", "Groundnut"],
    "Bengaluru Urban": ["Ragi", "Vegetables", "Flowers"],
    "Bidar": ["Tur Dal", "Soybean", "Jowar"],
    "Chamarajanagar": ["Turmeric", "Ragi", "Sugarcane"],
    "Chikkaballapur": ["Ragi", "Groundnut", "Grapes"],
    "Chikkamagaluru": ["Coffee", "Pepper", "Paddy"],
    "Chitradurga": ["Groundnut", "Ragi", "Maize"],
    "Dakshina Kannada": ["Paddy", "Arecanut", "Coconut"],
    "Davanagere": ["Maize", "Paddy", "Cotton"],
    "Dharwad": ["Cotton", "Soybean", "Jowar"],
    "Gadag": ["Jowar", "Bengal Gram", "Cotton"],
    "Hassan": ["Coffee", "Potato", "Paddy"],
    "Haveri": ["Cotton", "Maize", "Soybean"],
    "Kalaburagi": ["Tur Dal", "Jowar", "Bengal Gram"],
    "Kodagu": ["Coffee", "Pepper", "Cardamom"],
    "Kolar": ["Tomato", "Ragi", "Mango"],
    "Koppal": ["Paddy", "Jowar", "Cotton"],
    "Mandya": ["Sugarcane", "Paddy", "Ragi"],
    "Mysuru": ["Ragi", "Paddy", "Sugarcane"],
    "Raichur": ["Paddy", "Cotton", "Tur Dal"],
    "Ramanagara": ["Ragi", "Mango", "Coconut"],
    "Shivamogga": ["Arecanut", "Paddy", "Maize"],
    "Tumakuru": ["Coconut", "Ragi", "Groundnut"],
    "Udupi": ["Paddy", "Arecanut", "Coconut"],
    "Uttara Kannada": ["Arecanut", "Coconut", "Cashew"],
    "Vijayanagara": ["Paddy", "Cotton", "Maize"],
    "Vijayapura": ["Jowar", "Grapes", "Bengal Gram"],
    "Yadgir": ["Tur Dal", "Jowar", "Cotton"]
};


// =====================================
// REGIONAL CROP RECOMMENDATION
// =====================================

function showRegionalCrops() {

    const district =
        document.getElementById("district").value;

    const result =
        document.getElementById("regionalResult");

    if (!district) {
        result.innerHTML = "Please select a district.";
        return;
    }

    const crops = regionalCrops[district];

    if (!crops) {
        result.innerHTML =
            "Crop information is not available.";
        return;
    }

    result.innerHTML = `
        <h3>Recommended Crops for ${district}</h3>
        <ul>
            ${crops.map(crop => `<li>${crop}</li>`).join("")}
        </ul>
    `;
}


// =====================================
// MACHINE LEARNING API CONNECTION
// =====================================

const API_URL =
    "https://sum-hearts-widely-numerous.trycloudflare.com";


// =====================================
// AI CROP PREDICTION
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    const predictButton =
        document.getElementById("predictCrop");

    if (!predictButton) {
        console.error("Predict button not found.");
        return;
    }

    predictButton.addEventListener("click", async function () {

        const district =
            document.getElementById("district").value;

        const fields = [
            "nitrogen",
            "phosphorus",
            "potassium",
            "temperature",
            "humidity",
            "ph",
            "rainfall"
        ];

        const values = {};

        for (const field of fields) {

            const input =
                document.getElementById(field);

            if (!input || input.value.trim() === "") {
                alert("Please enter all soil and climate values.");
                return;
            }

            const number = Number(input.value);

            if (!Number.isFinite(number)) {
                alert("Please enter valid numerical values.");
                return;
            }

            values[field] = number;
        }

        if (!district) {
            alert("Please select your district.");
            return;
        }

        const data = {
            district: district,
            N: values.nitrogen,
            P: values.phosphorus,
            K: values.potassium,
            temperature: values.temperature,
            humidity: values.humidity,
            ph: values.ph,
            rainfall: values.rainfall
        };

        const result =
            document.getElementById("predictionResult");

        result.innerHTML = "Predicting best crop... Please wait.";

        predictButton.disabled = true;

        try {

            const response = await fetch(API_URL + "/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const prediction = await response.json();

            if (!response.ok) {
                throw new Error(
                    prediction.error || "Prediction failed."
                );
            }

            result.innerHTML = `
                <h3>AI Crop Prediction</h3>

                <p>
                    <b>Best Crop:</b>
                    ${prediction.ml_prediction ?? "Not available"}
                </p>

                <p>
                    <b>Regional Crops:</b>
                    ${(prediction.regional_crops || []).join(", ")}
                </p>

                <p>
                    <b>Regional Match:</b>
                    ${prediction.regional_match ?? "Not available"}
                </p>
            `;

        } catch (error) {

            result.innerHTML =
                "Error: " + error.message +
                ". Please check your ML backend connection.";

        } finally {

            predictButton.disabled = false;
        }

    });

});
  
