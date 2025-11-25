🚀 NASA APOD Explorer – Spring Boot Full Stack Project

This is a Java Spring Boot Full Stack Project developed as part of the Engineering Team interview process for Finfactor Technologies.
The project titled NASA APOD Explorer is a high-performance, API-driven application that fetches and displays NASA’s Astronomy Picture of the Day with modern caching, secure API handling, and a futuristic UI.

🌌 Project Overview

The NASA APOD Explorer allows users to:

View the Astronomy Picture of the Day (APOD)

Explore historical images with date selection

Browse a responsive gallery of recent images

Read NASA-provided scientific explanations

Enjoy a smooth, space-themed animated UI

It demonstrates clean architecture, secure configuration, caching optimization, and production-ready engineering practices.

✨ Key Features

🔐 Secure API Key Handling
No hardcoded secrets — keys injected via application.properties or environment variables.

⚡ High-Performance Caching (Caffeine Cache)
Reduces NASA API calls and speeds up repeat requests instantly.

🛰️ APOD Retrieval for Any Date
Users can choose any date since 1995.

🎞️ 10-Day Gallery View
Auto-fetches recent APOD history.

🎨 Glassmorphism UI + CSS Starfield Animation
Space-themed immersive interface.

📱 Fully Responsive Frontend
Compatible with mobile, tablet, and desktop.

🛡️ Resilient Error Handling
Friendly fallback UI when external APIs fail.

🧰 Tech Stack Used
🖥️ Frontend

HTML5

CSS3 (Glassmorphism + Starfield Animation)

Vanilla JavaScript

💻 Backend

Java 17

Spring Boot 3

Spring Web (REST APIs)

Caffeine Cache (In-memory caching)

🗄️ Database

Not required (NASA API-driven system)

🧱 Architecture

The system follows a clean layered structure:

Controller Layer – Handles REST endpoints

Service Layer – API communication + caching + error handling

Model Layer – DTOs for mapping NASA API responses

Config Layer – API config + Caffeine cache config

Advantages:

Easy to extend (e.g., add NASA Mars Rover API)

Maintains scalability and clean code separation

🗂️ Configuration (application.properties)
# secure: do not commit your real key to git
nasa.api.key=YOUR_NASA_API_KEY

# optional cache config overrides
cache.max-size=100
cache.expire-minutes=10

🧪 Performance Optimization

The NASA API has strict rate limits.
To solve this:

⚡ Caffeine Cache Policy

Max Size: 100 items

Expiry: 10 minutes

Hit Time: ~0ms (RAM level)

This ensures:

Faster response times

Fewer NASA API calls

Reliability even under network delays

📁 Project Structure
nasa-apod-explorer/
├── src/
│   ├── main/
│   │   ├── java/com/nasa/apod/
│   │   │   ├── controller/
│   │   │   ├── service/
│   │   │   ├── model/
│   │   │   ├── config/
│   │   │   └── exception/
│   │   └── resources/
│   │       ├── static/ (HTML, CSS, JS)
│   │       └── application.properties
├── pom.xml
└── README.md

🚀 How to Run the Project
1️⃣ Clone the Repository
git clone https://github.com/bkiran2003/nasa-apod-explorer.git
cd nasa-apod-explorer

2️⃣ Add Your NASA API Key

Open src/main/resources/application.properties:

nasa.api.key=YOUR_NASA_API_KEY

3️⃣ Run the Application
mvn spring-boot:run

4️⃣ Open in Browser
http://localhost:8080

📷 Screenshots

Note: UI screenshots will be displayed here once uploaded.

🟣 Home Page (APOD View)
<img src="INSERT_IMAGE_PATH_HERE" width="800">
🟣 Gallery View
<img src="INSERT_IMAGE_PATH_HERE" width="800">
🟣 Details Section
<img src="INSERT_IMAGE_PATH_HERE" width="800">
👨‍💻 Author

B Kiran
LinkedIn: linkedin.com/in/kiranshetty23

Portfolio: b-kiran.medicomforts.com

Developed as part of the Finfactor Technologies Engineering Evaluation
Focused on clean code, scalability, speed, and real-world API resilience.
