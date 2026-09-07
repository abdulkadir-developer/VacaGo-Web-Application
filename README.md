
# VacaGo 🌍

VacaGo is a full-stack travel listing web application where users can discover travel destinations, view detailed listings, and create and manage their own listings.

## ✨ Features

* 🔐 User authentication and authorization
* ⭐ User reviews & ratings
* 🏠 Create, view, edit and delete travel listings
* 🗺️ Interactive maps with location markers
* 📍 Location-based listing information
* 🖼️ Listing images
* 💾 MongoDB database
* ⚡ Express.js backend
* 🎨 EJS-based frontend
* 🔒 Session-based authentication
* 📱 Responsive user interface

## 🛠️ Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* EJS
* EJS-Mate

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication & Security

* Passport.js
* Express Session
* Connect Flash
* Joi validation

### APIs & Services

* MapTiler
* Cloudinary

## 📂 Project Structure

```text
VacaGo/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── middleware.js
├── app.js
├── schema.js
├── package.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
```

Move into the project directory:

```bash
cd VacaGo
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory and add your environment variables:

```env
ATLASDB_URL=your_mongodb_connection_string
MAP_TOKEN=your_maptiler_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

Start the application:

```bash
node app.js
```

For development, if your project has a suitable npm script:

```bash
npm start
```

The application will run on your local server.

## 🚀 Future Improvements

* Advanced search and filtering
* Wishlist/favorites
* Multiple images per listing
* User profiles
* Improved responsive design
* Better map features
* Notifications
* Messaging between users
* Improved UI/UX

## 👨‍💻 Author

**Abdul Kadir**

This project was built as a major project to practice and demonstrate full-stack web development skills.

## 📄 License

This project is for learning and portfolio purposes.
