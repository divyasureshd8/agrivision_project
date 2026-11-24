const regionalCrops = {
    "Chikkamagaluru": ["Coffee", "Arecanut", "Pepper", "Rice"],
    "Kodagu": ["Coffee", "Pepper", "Cardamom"],
    "Hassan": ["Ragi", "Rice", "Coconut"],
    "Mysuru": ["Ragi", "Rice", "Sugarcane"],
    "Mandya": ["Sugarcane", "Rice", "Coconut"],
    "Shivamogga": ["Arecanut", "Rice", "Maize"],
    "Dakshina Kannada": ["Coconut", "Arecanut", "Cashew"],
    "Udupi": ["Coconut", "Arecanut", "Rice"],
    "Uttara Kannada": ["Arecanut", "Coconut", "Pepper"],
    "Belagavi": ["Sugarcane", "Maize", "Soybean"],
    "Bagalkot": ["Jowar", "Maize", "Pulses"],
    "Ballari": ["Cotton", "Jowar", "Groundnut"],
    "Bengaluru Urban": ["Ragi", "Vegetables", "Flowers"],
    "Bengaluru Rural": ["Ragi", "Maize", "Vegetables"],
    "Tumakuru": ["Coconut", "Ragi", "Groundnut"],
    "Chitradurga": ["Groundnut", "Ragi", "Maize"],
    "Davanagere": ["Maize", "Rice", "Cotton"],
    "Dharwad": ["Cotton", "Soybean", "Jowar"],
    "Gadag": ["Jowar", "Groundnut", "Pulses"],
    "Haveri": ["Cotton", "Maize", "Chilli"],
    "Bidar": ["Red gram", "Soybean", "Jowar"],
    "Kalaburagi": ["Red gram", "Jowar", "Cotton"],
    "Kolar": ["Ragi", "Tomato", "Mango"],
    "Chikkaballapur": ["Ragi", "Groundnut", "Grapes"],
    "Chamarajanagar": ["Turmeric", "Ragi", "Sugarcane"],
    "Koppal": ["Jowar", "Cotton", "Paddy"],
    "Raichur": ["Rice", "Cotton", "Pulses"],
    "Vijayapura": ["Jowar", "Grapes", "Pomegranate"],
    "Vijayanagara": ["Rice", "Maize", "Cotton"],
    "Yadgir": ["Red gram", "Jowar", "Cotton"],
    "Ramanagara": ["Ragi", "Mango", "Coconut"]
};

function showRegionalCrops() {
    const district = document.getElementById("district").value;
    const result = document.getElementById("regionalResult");

    if (!district) {
        result.innerHTML = "Please select a district.";
        return;
    }

    const crops = regionalCrops[district] || [];
    result.innerHTML = "<h3>Recommended Regional Crops</h3><p>" +
        crops.join(", ") + "</p>";
}

const API_URL = "https://sum-hearts-widely-numerous.trycloudflare.com";

document.getElementById("predictCrop").addEventListener("click", async function () {
    const district = document.getElementById("district").value;

    const fields = [
        "nitrogen", "phosphorus", "potassium",
        "temperature", "humidity", "ph", "rainfall"
    ];

    const values = {};

    for (const field of fields) {
        const value = document.getElementById(field).value;

        if (value === "") {
            alert("Please enter all soil and climate values.");
            return;
        }

        values[field] = Number(value);
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

    const result = document.getElementById("predictionResult");
    result.innerHTML = "Predicting crop... Please wait.";
pplication/json"
            },
            body: JSON.stringify(data)
        });

        const prediction = await response.json();

        if (!response.ok) {
            throw new Error(prediction.error || "Prediction failed");
        }

        result.innerHTML =
            "<h3>AI Crop Prediction</h3>" +
            "<p><b>Best Crop:</b> " + prediction.ml_prediction + "</p>" +
            "<p><b>Regional Crops:</b> " +
            prediction.regional_crops.join(", ") + "</p>" +
            "<p><b>Regional Match:</b> " +
            prediction.regional_match + "</p>";

    } catch (error) {
        result.innerHTML = "Error: " + error.message +
            ". Please check that your backend is running.";
    }
});
