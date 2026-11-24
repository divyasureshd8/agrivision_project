
function showRegionalCrops() {
    const district = document.getElementById("district").value;
    const result = document.getElementById("regionalCropResult");

    if (!district) {
        result.innerHTML = "Please select a district.";
        return;
    }

    const crops = {
        "Bagalkot": ["Jowar", "Maize", "Pulses"],
        "Ballari": ["Cotton", "Paddy", "Groundnut"],
        "Belagavi": ["Sugarcane", "Soybean", "Maize"],
        "Bengaluru Rural": ["Ragi", "Maize", "Groundnut"],
        "Bengaluru Urban": ["Vegetables", "Ragi", "Flowers"],
        "Bidar": ["Tur Dal", "Soybean", "Jowar"],
        "Chamarajanagar": ["Ragi", "Turmeric", "Sugarcane"],
        "Chikkaballapur": ["Ragi", "Groundnut", "Grapes"],
        "Chikkamagaluru": ["Coffee", "Pepper", "Paddy"],
        "Chitradurga": ["Groundnut", "Maize", "Ragi"],
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
        "Uttara Kannada": ["Arecanut", "Paddy", "Cashew"],
        "Vijayapura": ["Jowar", "Grapes", "Bengal Gram"],
        "Vijayanagara": ["Paddy", "Cotton", "Maize"],
        "Yadgir": ["Tur Dal", "Jowar", "Cotton"]
    };

    const recommended = crops[district];

    if (recommended) {
        result.innerHTML = `
            <h3>Recommended Crops for ${district}</h3>
            <ul>
                ${recommended.map(crop => `<li>${crop}</li>`).join("")}
            </ul>
        `;
    } else {
        result.innerHTML = "Crop information is not available.";
    }
}

