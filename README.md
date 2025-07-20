# Orange RDC FTTH Dashboard

This project is a Semi functional internal dashboard built to monitor and manage FTTH (Fiber to the Home) client data. The dashboard is designed for internal use only and allows the user to track client status, outages and technician responses.

## 🛠 Technologies Used

- React (with Vite)
- Tailwind CSS
- React Router DOM
- JavaScript (ES6)
- HTML5 / JSX
- Node.js / npm

## 📋 Features

- Secure login with hardcoded credentials (username: `JeanK`, password: `123456`)
- Sidebar navigation with:
  - Language toggle (English / French)(" Mostly to facilitate my own work environment")
  - Client list management (Add / Remove)
  - Outage simulation (generates "simulated" reports)
  - Logout with confirmation
- Live Feed placeholder section(simply a template)
- Interactive UI using Tailwind CSS
- All functionalities work offline locally

## 🧪 Installation & Execution

1. Clone or Download the Project
2. Open the folder in VS Code
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Visit: `http://localhost:5174` or the port shown in terminal.

## 🧩 Login Credentials

- Username: JeanK  
- Password: 123456

## 💡 Notes

- The dashboard does not use a database or backend. All data is simulated within the app.
- The language toggle updates all interface text between English and French dynamically.
- The app is built to be realistic for demonstration during a job interview or internal showcase.

## ⚠️ Issues I Faced

- React Router misconfigurations early on caused blank screens.
- Image asset imports threw errors due to incorrect paths.
- Dynamic import conflicts with Vite required code adjustments.
- Google Maps integration failed due to key/security complications, so I replaced it with a simple "Live Feed" section.
- Fine-tuning button functionality like random simulations and dropdown deletion required trial and error.

---
Being primarily a web developer, i used my strengths in order to complete this to the best of my ability. 

This project helped reinforce my understanding of modern React workflows and UI state management, and it's designed to be easily updated and reflect a semi professional internal tool for telecom use. 
