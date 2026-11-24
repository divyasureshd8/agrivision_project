
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgriVision - Regional Crop Recommendation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <header>
        <h1>🌱 AgriVision</h1>
        <p>Smart Agriculture and Crop Recommendation System</p>
    </header>

    <main>
        <section id="regionalCrops">
            <h2>🌾 Regional Crop Recommendation</h2>

            <label for="district">Select Karnataka District:</label>

            <select id="district">
                <option value="">Select District</option>
                <option value="Bagalkot">Bagalkot</option>
                <option value="Ballari">Ballari</option>
                <option value="Belagavi">Belagavi</option>
                <option value="Bengaluru Rural">Bengaluru Rural</option>
                <option value="Bengaluru Urban">Bengaluru Urban</option>
                <option value="Bidar">Bidar</option>
                <option value="Chamarajanagar">Chamarajanagar</option>
                <option value="Chikkaballapur">Chikkaballapur</option>
                <option value="Chikkamagaluru">Chikkamagaluru</option>
                <option value="Chitradurga">Chitradurga</option>
                <option value="Dakshina Kannada">Dakshina Kannada</option>
                <option value="Davanagere">Davanagere</option>
                <option value="Dharwad">Dharwad</option>
                <option value="Gadag">Gadag</option>
                <option value="Hassan">Hassan</option>
                <option value="Haveri">Haveri</option>
                <option value="Kalaburagi">Kalaburagi</option>
                <option value="Kodagu">Kodagu</option>
                <option value="Kolar">Kolar</option>
                <option value="Koppal">Koppal</option>
                <option value="Mandya">Mandya</option>
                <option value="Mysuru">Mysuru</option>
                <option value="Raichur">Raichur</option>
                <option value="Ramanagara">Ramanagara</option>
                <option value="Shivamogga">Shivamogga</option>
                <option value="Tumakuru">Tumakuru</option>
                <option value="Udupi">Udupi</option>
                <option value="Uttara Kannada">Uttara Kannada</option>
                <option value="Vijayanagara">Vijayanagara</option>
                <option value="Vijayapura">Vijayapura</option>
                <option value="Yadgir">Yadgir</option>
            </select>

            <button onclick="showRegionalCrops()">
                Show Regional Crops
            </button>

            <div id="regionalCropResult">
                Select a district to view suitable regional crops.
            </div>
        </section>
    </main>

    <footer>
        <p>© 2026 AgriVision</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
  
function showRegionalCrops() {
    const district = document.getElementById("district").value;
    const result = document.getElementById("regionalCropResult");

    if (!district) {
        result.innerHTML = "Please select a district.";
        return;
    }

    const crops = regionalCrops[district];

    if (!crops) {
        result.innerHTML = "No crop data available.";
        return;
    }

    result.innerHTML =
        "<h3>Suitable crops for " + district + "</h3><ul>" +
        crops.map(crop => "<li>" + crop + "</li>").join("") +
        "</ul>";
    }

