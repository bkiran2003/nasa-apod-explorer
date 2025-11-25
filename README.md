# 🚀 NASA APOD Explorer - Spring Boot Full Stack Project

This is a **Java Full Stack Interview Project** developed as part of the hiring process for the Engineering Team at **Finfactor Technologies Pvt. Ltd.**  
The project titled **NASA APOD Explorer** is a web-based application for exploring the cosmos using NASA's public APIs, featuring caching, secure API handling, and a futuristic glassmorphism UI.

🔗 **GitHub Repository:** https://github.com/bkiran2003/nasa-apod-explorer

---

## 🏢 Challenge Details

This project was built by **Mr. B Kiran** for the coding challenge for the **Software Engineer (Java)** role at **Finfactor Technologies**.

The challenge required building:

- A **RESTful Web Service**
- A **Frontend Layer**
- A connection to NASA's *Astronomy Picture of the Day (APOD)* API

With emphasis on:

- ⚡ **Performance:** Use caching to optimize API usage  
- 🔐 **Security:** Safe API key management  
- 🎨 **User Experience:** Modern, responsive, animated UI  

---

## 🧑‍💻 Project Overview

The **NASA APOD Explorer** is a full-stack application that enables users to:

- View NASA’s “Astronomy Picture of the Day”
- Explore pictures from any past date
- Browse a gallery of recent space images
- Read NASA’s scientific explanation for each APOD

Designed to be both **production-ready** and **visually immersive**.

---

## 📌 Key Features

- 🌌 **Daily Astronomy Picture** – View high-resolution images & descriptions  
- 📅 **Date Picker Navigation** – Explore APODs from any date since 1995  
- 🖼️ **Recent Gallery** – Auto-fetches the last 10 days of space images  
- ⚡ **High-Performance Caching** – Caffeine Cache (10 min expiry) for instant loads  
- 🎨 **Glassmorphism UI** – CSS-only starfield animations + cosmic theme  
- 📱 **Fully Responsive** – Optimized for desktop, tablet & mobile  

---

## 🧰 Tech Stack Used

### 🖥️ Frontend
- HTML5  
- CSS3 (Animations + Glassmorphism)  
- JavaScript (Vanilla ES6+)  

### 💻 Backend
- Java 17  
- Spring Boot 3  
- Spring Web  
- Spring Caching  
- Caffeine Cache  
- Maven (Build Tool)  

---

## 🏗️ Architecture & Best Practices

The application follows a **Controller → Service → Model** pattern.

### **Controller Layer**
Handles incoming HTTP requests and routes them to services.

### **Service Layer**
Contains the main business logic:
- NASA API calls  
- Caching strategy  
- Error handling  

### **Model Layer**
POJOs for mapping NASA API JSON responses.

---

### **Configuration**

All configuration is handled in `application.properties`:

```properties
nasa.api.key=YOUR_NASA_API_KEY
cache.max-size=100
cache.expire-minutes=10

📷 Snapshots

Below are example static screenshots of the application.

🟢 Dashboard & Hero Section
<img src="screenshots/desktop-view.png" alt="Dashboard View" width="800">
🟢 Gallery View
<img src="screenshots/mobile-view.png" alt="Gallery View" width="800">
🚀 How to Run Locally
1️⃣ Clone the Repository
git clone https://github.com/bkiran2003/nasa-apod-explorer.git
cd nasa-apod-explorer

2️⃣ Add Your NASA API Key

Open:

src/main/resources/application.properties


Add:

nasa.api.key=YOUR_NASA_API_KEY

3️⃣ Run the Application
mvn spring-boot:run

4️⃣ Open Browser
http://localhost:8080

👨‍💻 Developer Info

B Kiran
🔗 LinkedIn: https://linkedin.com/in/kiranshetty23

🌐 Portfolio: https://b-kiran.medicomforts.com



