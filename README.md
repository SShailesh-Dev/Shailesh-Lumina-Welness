<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://raw.githubusercontent.com/SShailesh-Dev/Shailesh-Lumina-Welness/refs/heads/main/homepage%20hero.png" />
</div>

# Lumina Wellness Spa

A premium holistic sanctuary for body and mind rejuvenation, offering massage therapy, facial treatments, and more. This application is tailored for the Indian market with localized currency, contact details, and a seamless booking experience.

## ✨ Features

- **Indian Context**: Prices in ₹ (INR), Indian phone numbers (+91), and localized address (Bangalore).
- **Multi-Step Booking**: A smooth 5-step booking process including service selection, date/time picking, customer details, and a final review card.
- **Backend Integration**: Powered by Firebase Firestore for real-time data storage.
- **Contact Management**: Integrated contact form that stores messages directly in the database.
- **Responsive Design**: Fully responsive UI built with Tailwind CSS, optimized for both desktop and mobile.
- **Smooth Animations**: Page transitions and interactive elements powered by Framer Motion.

## 🚀 Tech Stack

- **Frontend**: React 19, Vite, TypeScript
- **Styling**: Tailwind CSS 4
- **Backend**: Firebase (Firestore)
- **Icons**: Lucide React
- **Animations**: Motion (Framer Motion)
- **Routing**: React Router Dom 7

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/SShailesh-Dev/Shailesh-Lumina-Welness.git
   cd Shailesh-Lumina-Welness
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure Firebase:
   Create a `firebase-applet-config.json` file in the root directory with your Firebase credentials:
   ```json
   {
     "apiKey": "YOUR_API_KEY",
     "authDomain": "YOUR_AUTH_DOMAIN",
     "projectId": "YOUR_PROJECT_ID",
     "storageBucket": "YOUR_STORAGE_BUCKET",
     "messagingSenderId": "YOUR_MESSAGING_SENDER_ID",
     "appId": "YOUR_APP_ID",
     "firestoreDatabaseId": "(default)"
   }
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
src/
├── components/     # Reusable UI components (Layout, Header, Footer)
├── contexts/       # React Contexts (Auth, etc.)
├── pages/          # Page components (Home, Booking, Contact, etc.)
├── lib/            # Utility functions and library configs
├── firebase.ts     # Firebase initialization and exports
├── App.tsx         # Main application component & routing
└── main.tsx        # Entry point
```

## 🔒 Database Schema (Firestore)

The application uses the following collections:

- `bookings`: Stores appointment details (service, date, time, customer info).
- `contact_messages`: Stores inquiries from the contact form.

Security rules are configured to allow public creation of bookings and messages while restricting read access to authorized administrators.

## 📄 License

This project is licensed under the Apache-2.0 License.

