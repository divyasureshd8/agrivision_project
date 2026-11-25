
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
// Approximate typical values per district (sample data, verify before real use)
const districtData = {
  "Bagalkot":        {nitrogen:70, phosphorus:40, potassium:35, temperature:27, humidity:58, ph:7.8, rainfall:570},
  "Ballari":         {nitrogen:65, phosphorus:38, potassium:35, temperature:28, humidity:55, ph:7.6, rainfall:580},
  "Belagavi":        {nitrogen:85, phosphorus:48, potassium:45, temperature:24, humidity:72, ph:6.5, rainfall:810},
  "Bengaluru Rural": {nitrogen:75, phosphorus:45, potassium:40, temperature:24, humidity:68, ph:6.3, rainfall:830},
  "Bengaluru Urban": {nitrogen:75, phosphorus:45, potassium:40, temperature:24, humidity:70, ph:6.3, rainfall:890},
  "Bidar":           {nitrogen:75, phosphorus:42, potassium:40, temperature:26, humidity:62, ph:7.2, rainfall:850},
  "Chamarajanagar":  {nitrogen:80, phosphorus:45, potassium:42, temperature:25, humidity:66, ph:6.4, rainfall:700},
  "Chikkaballapur":  {nitrogen:75, phosphorus:44, potassium:40, temperature:24, humidity:66, ph:6.3, rainfall:750},
  "Chikkamagaluru":  {nitrogen:90, phosphorus:50, potassium:50, temperature:22, humidity:80, ph:5.8, rainfall:1925},
  "Chitradurga":     {nitrogen:65, phosphorus:38, potassium:35, temperature:26, humidity:58, ph:6.6, rainfall:580},
  "Dakshina Kannada":{nitrogen:95, phosphorus:50, potassium:55, temperature:27, humidity:85, ph:5.5, rainfall:3800},
  "Davanagere":      {nitrogen:80, phosphorus:45, potassium:42, temperature:26, humidity:64, ph:6.8, rainfall:650},
  "Dharwad":         {nitrogen:80, phosphorus:46, potassium:42, temperature:24, humidity:68, ph:7.0, rainfall:770},
  "Gadag":           {nitrogen:68, phosphorus:40, potassium:36, temperature:26, humidity:58, ph:7.6, rainfall:620},
  "Hassan":          {nitrogen:88, phosphorus:48, potassium:48, temperature:23, humidity:76, ph:6.0, rainfall:1030},
  "Haveri":          {nitrogen:80, phosphorus:46, potassium:42, temperature:25, humidity:68, ph:6.8, rainfall:830},
  "Kalaburagi":      {nitrogen:70, phosphorus:40, potassium:38, temperature:27, humidity:56, ph:7.8, rainfall:750},
  "Kodagu":          {nitrogen:95, phosphorus:52, potassium:55, temperature:21, humidity:82, ph:5.6, rainfall:2700},
  "Kolar":           {nitrogen:72, phosphorus:44, potassium:40, temperature:25, humidity:66, ph:6.3, rainfall:750},
  "Koppal":          {nitrogen:66, phosphorus:38, potassium:35, temperature:27, humidity:56, ph:7.4, rainfall:600},
  "Mandya":          {nitrogen:90, phosphorus:42, potassium:43, temperature:26, humidity:70, ph:6.8, rainfall:700},
  "Mysuru":          {nitrogen:80, phosphorus:45, potassium:40, temperature:25, humidity:66, ph:6.5, rainfall:785},
  "Raichur":         {nitrogen:66, phosphorus:38, potassium:36, temperature:28, humidity:54, ph:7.6, rainfall:620},
  "Ramanagara":      {nitrogen:76, phosphorus:45, potassium:40, temperature:25, humidity:68, ph:6.3, rainfall:830},
  "Shivamogga":      {nitrogen:90, phosphorus:50, potassium:50, temperature:24, humidity:78, ph:5.9, rainfall:1800},
  "Tumakuru":        {nitrogen:75, phosphorus:44, potassium:40, temperature:25, humidity:64, ph:6.4, rainfall:690},
  "Udupi":           {nitrogen:95, phosphorus:50, potassium:55, temperature:27, humidity:85, ph:5.5, rainfall:4100},
  "Uttara Kannada":  {nitrogen:90, phosphorus:50, potassium:52, temperature:26, humidity:80, ph:5.8, rainfall:2800},
  "Vijayanagara":    {nitrogen:65, phosphorus:38, potassium:35, temperature:28, humidity:55, ph:7.4, rainfall:600},
  "Vijayapura":      {nitrogen:66, phosphorus:38, potassium:35, temperature:27, humidity:54, ph:7.8, rainfall:580},
  "Yadgir":          {nitrogen:68, phosphorus:40, potassium:37, temperature:28, humidity:55, ph:7.6, rainfall:700}
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
document.getElementById("district").addEventListener("change", function () {
  const d = districtData[this.value];
  if (!d) return;
  for (const id in d) {
    document.getElementById(id).value = d[id];
  }
});
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
  
