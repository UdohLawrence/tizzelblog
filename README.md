# Tizzel Blog

A server-rendered blog website built with **AdonisJS**, **Edge.js**, and **MySQL**. Users can _sign up_, _log in_, _create posts_, and _view posts_ on a responsive interface. This project showcases a fullstack application with server-side rendering, authentication, and a mobile-friendly navbar.

## Features

- **User Authentication**: Sign up, log in, and log out using JWT-based authentication.
- **Post Management**: Logged-in users can create posts; all users can view posts.
- **Server-Side Rendering**: Templates rendered with Edge.js for fast, SEO-friendly pages.
- **Responsive Design**: Mobile-friendly navbar with a hamburger menu, styled with Tailwind CSS.
- **Database**: MySQL for storing users and posts.

## Tech Stack

- **Backend: AdonisJS v6** - A Node.js framework with MVC architecture.
- **Templating: Edge.js** - Server-side templating engine for AdonisJS.
- **Database: MySQL** - Relational database with Lucid ORM integration.
- **Styling: Tailwind CSS** - Utility-first CSS framework.
- **Authentication:** JWT (JSON Web Tokens) via AdonisJS Auth.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v20 or later)
- npm (comes with Node.js)
- MySQL (v8 or later)
- Git (optional, for cloning the repository)

## Project Structure

my-first-blog/
├── app/                 # Core application logic
│   ├── Controllers/     # HTTP controllers (e.g., AuthController, PostController)
│   ├── Middleware/      # Custom middleware
│   ├── Models/          # Lucid ORM models (e.g., User, Post)
├── config/              # Configuration files
│   ├── app.js           # App settings
│   ├── database.js      # Database config
├── database/            # Database migrations and seeds
│   ├── migrations/      # Schema migrations
├── public/              # Static assets
│   ├── assets/          # CSS, JS, images
│   │   ├── css/         # Compiled Tailwind CSS
│   │   └── js/          # Custom JavaScript (e.g., nav.js)
├── resources/           # Edge.js templates
│   ├── views/           # Template files
│   │   ├── auth/        # Auth-related templates (login.edge, signup.edge)
│   │   ├── posts/       # Post-related templates (index.edge, create.edge)
│   │   └── layouts/     # Layout templates (main.edge)
├── start/               # Startup files
│   ├── routes.js        # Route definitions
│   └── kernel.js        # Middleware setup
├── .env                 # Environment variables
├── ace                  # Adonis CLI tool
├── package.json         # Dependencies and scripts
└── README.md            # This file

## Installation

1. Clone the Repository

git clone <https://github.com/UdohLawrence/tizzelblog>
cd tizzelblog

2. Install Dependencies

npm install

3. 
