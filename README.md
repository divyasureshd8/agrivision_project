# 🌱 Agrivision

A simple web app that recommends a suitable crop based on temperature, humidity, rainfall and soil pH. It can also fill in the weather values automatically from your location.

🔗 **Live demo:** https://divyasureshd8.github.io/agrivision_project/

## Features
- 📍 **Use my location** to auto-fill temperature, humidity and rainfall
- Enter soil pH and get the best crop match
- Shows 2 backup suggestions
- Covers 33 crops, including rice, wheat, maize, coffee, tea, cotton, sugarcane, banana, mango and more
- Works on mobile and desktop

## How it works
Each crop has an ideal range for temperature, humidity, rainfall and pH. The app scores every crop by how close your inputs are to its ideal ranges and shows the top 3.

Weather data comes from the free [Open-Meteo](https://open-meteo.com/) API. Rainfall is the total for the last 30 days.

## Built with
- HTML, CSS and JavaScript
- Open-Meteo weather API
- Hosted on GitHub Pages

## How to use
1. Open the live demo
2. Tap **Use my location** and allow access, or type the values yourself
3. Enter your soil pH
4. Tap **Suggest crop**

## Limitations
- Crop ranges are approximate and rule-based
- Soil pH can't be found from location, so you enter it yourself
- This is a learning project, not professional agricultural advice

## Future work
- Add nitrogen, phosphorus and potassium (N, P, K) inputs
- Train a machine learning model on a real crop dataset
- Add regional crop data

## Author
Made by [divyasureshd8](https://github.com/divyasureshd8)

