# Sanjay Scan Centre

A responsive website for **Sanjay Scans**, built to make the centre's services easy to find and appointments easy to book. Patients can browse services, book an appointment, and contact the centre from any device.

**Live site:** [sanjayscans.in](https://www.sanjayscans.in/)
**Used by:** 100+ active users

![Sanjay Scan Centre home page](docs/screenshots/home.png)

## Features

- **Responsive design:** works smoothly on phones, tablets, and desktops.
- **Appointment booking:** patients request an appointment online, and the details are sent by email.
- **Contact form:** a simple way to send questions to the centre.
- **Service showcase:** clear sections for the scans and services offered.
- **Smooth, modern UI:** animated sections, image carousels, and counters that highlight key numbers.
- **Fast navigation:** client-side routing between pages without full reloads.

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | React 18, React Router 6, Tailwind CSS, Framer Motion |
| UI components | React Slick, React Responsive Carousel, React CountUp, React Icons, Heroicons |
| Backend | Node.js, Express |
| Email | Nodemailer |
| Tooling | Create React App (react-scripts), PostCSS, Autoprefixer, dotenv |

## Screenshots

| Home | Services | Appointment |
|---|---|---|
| ![Home](docs/screenshots/home.png) | ![Services](docs/screenshots/services.png) | ![Appointment](docs/screenshots/appointment.png) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)
- An email account (such as Gmail with an app password) for sending appointment and contact emails

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/somesh-v/Sanjay-Scan.git
cd Sanjay-Scan

# 2. Install dependencies
npm install
```

### Environment variables

Create a `.env` file in the project root. Adjust the names to match your code.

```env
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_app_password
RECEIVER_EMAIL=where_to_receive_bookings@example.com
PORT=5000
```

> Never commit your `.env` file. Keep it listed in `.gitignore`.

### Run the app

```bash
# Start the backend server (email handling)
node <your-server-file>.js

# Start the React development server (in a second terminal)
npm start
```

The site opens at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode |
| `npm run build` | Creates an optimized production build in `build/` |
| `npm test` | Runs the test runner in watch mode |

## Project Structure

Update this to match your folders.

```
Sanjay-Scan/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-level pages
│   └── App.js          # Routes and app shell
├── index.html
├── tailwind.config.js  # Tailwind theme and content paths
├── postcss.config.js
└── package.json
```

## Deployment

Create a production build with `npm run build` and host the `build/` folder on your hosting provider. The Express email server needs a Node.js host, and the frontend must point to its URL.

## Roadmap

- [ ] Online report downloads for patients
- [ ] Appointment confirmation emails to patients
- [ ] Multilingual support
- [ ] Automated tests

## Author

**Somesh V**
[LinkedIn](https://www.linkedin.com/in/somesh-venkatesh-053982247/) · [GitHub](https://github.com/somesh-v) · [LeetCode](https://leetcode.com/u/Somesh_V/)
