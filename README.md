# 🌅 Good Morning Page

A simple full-stack application that displays a personalized "Good Morning" experience.  
This project is built using:
 
- ⚙️ Backend: Spring Boot (Java)
- 🌐 Frontend: Angular
- 🗄️ Database: (configured via `application.properties`)

---

## 📁 Project Structure

```
📦Good-Morning-Page
 ┣ 📂backend (Spring Boot API)
 ┣ 📂frontend (Angular App)
```

---

## 🚀 Getting Started

Follow these steps to run the project locally.

---

## 🔧 Prerequisites

Make sure you have installed:

- Java (JDK 17+ recommended)
- Maven
- Node.js (v18+ recommended)
- Angular CLI  

```bash
npm install -g @angular/cli
```

---

## ⚙️ Backend Setup (Spring Boot)

1. Navigate to backend folder:
```bash
cd backend/good-morning-backend
```

2. Configure database in:
```
src/main/resources/Application.properties
```

3. Build the project:
```bash
mvn clean install
```

4. Run the application:
```bash
mvn spring-boot:run
```

5. Backend will start at:
```
http://localhost:8080
```

---

## 🌐 Frontend Setup (Angular)

1. Navigate to frontend folder:
```bash
cd frontend/good_morning_frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the Angular app:
```bash
ng serve
```

4. Open in browser:
```
http://localhost:4200
```

---

## 🔗 API Integration

- Ensure backend is running on port `8080`
- Update API URLs in Angular service files if needed

---

## 📸 Screenshots

Add screenshots here:

```
![Home Page](./screenshots/home.png)
```

---

## ✨ Features

- User data handling via REST API
- Clean Angular UI
- Full-stack integration
- Simple and extendable architecture

---

## 🧠 Future Improvements

- Add authentication (JWT)
- Improve UI/UX
- Deploy to cloud (AWS / Vercel / Render)
- Add logging & monitoring

---

## 🤝 Contribution

Feel free to fork and improve the project.

---

## 📄 License

This project is open-source and available under the MIT License.
