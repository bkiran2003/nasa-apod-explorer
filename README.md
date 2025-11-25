🌌 NASA APOD Explorer

A High-Performance Spring Boot Application for Exploring the Cosmos.

Developed by B KIRAN as part of the Engineering Team Interview Process for Finfactor Technologies.

🚀 Project Overview

NASA APOD Explorer is a full-stack web application that interacts with NASA's Astronomy Picture of the Day (APOD) API. It allows users to explore daily astronomical imagery, view details, and browse a historical gallery of space missions.

This project demonstrates production-grade engineering practices, including:

Secure API Key Management (No hardcoded secrets).

Server-Side Caching (Caffeine) to optimize performance and handle rate limits.

Responsive UI/UX with a custom "Glassmorphism" design system.

Resilient Error Handling for external API failures.

📸 Screenshots

💻 Desktop View

An immersive, dark-themed dashboard featuring today's APOD and a 10-day history gallery.

📱 Mobile View

Fully responsive layout optimized for mobile devices with touch-friendly controls.

🛠️ Tech Stack

Component

Technology

Reason for Choice

Backend

Java 17 + Spring Boot 3

Industry standard for scalable, robust REST APIs.

Build Tool

Maven

Dependency management and build automation.

Caching

Caffeine

High-performance, in-memory caching with expiry & eviction policies.

Frontend

HTML5, CSS3, Vanilla JS

Lightweight, fast loading, and dependency-free UI.

API

NASA APOD API

Source of astronomical data.

✨ Key Features (Evaluation Criteria)

1. 🏗️ Extensible Architecture

Separation of Concerns: The project follows a strict Controller -> Service -> Model architecture.

Scalability: Adding new features (like Mars Rover photos) would require minimal changes to existing code.

2. ⚡ Performance & Caching

Problem: The NASA API has rate limits. Frequent requests slow down the user experience.

Solution: Implemented Caffeine Cache with the following policy:

Max Size: 100 entries (Prevents Out-Of-Memory errors).

Expiry: 10 minutes (Ensures data freshness while reducing API calls).

Benefit: Subsequent requests load in 0ms from RAM instead of waiting for the network.

3. 🎨 UI/UX & Design

Immersive Theme: Custom CSS-only star field animation (no heavy image assets).

Glassmorphism: Modern, translucent UI cards for a futuristic feel.

Interactive Feedback: Loading spinners and hover effects provide immediate user feedback.

Responsive: Grid layouts adapt seamlessly from 4K desktops to mobile screens.

4. 🛡️ Security Best Practices

Secret Management: The API Key is not hardcoded in Java classes. It is injected via application.properties (and can be overridden by environment variables in production).

🚀 How to Run Locally

Prerequisites

Java 17 or higher

Maven (optional, wrapper included)

Steps

Clone the Repository

git clone [https://github.com/bkiran2003/nasa-apod-explorer.git](https://github.com/bkiran2003/nasa-apod-explorer.git)
cd nasa-apod-explorer


Configure API Key
Open src/main/resources/application.properties and add your NASA API Key:

nasa.api.key=YOUR_KEY_HERE


Run the Application

mvn spring-boot:run


Access the App
Open your browser and navigate to:
http://localhost:8080

👨‍💻 Author

B Kiran

LinkedIn: linkedin.com/in/kiranshetty23

Portfolio: b-kiran.medicomforts.com

This project was built for the Finfactor Technologies coding challenge.
