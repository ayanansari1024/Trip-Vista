# Trip Vista — Airbnb Clone (scaffold)

This is a scaffolded, minimal full-stack project created to match the description:
a travel-listing platform built with HTML, CSS, JavaScript, Bootstrap, EJS, Node.js,
MongoDB (for listings) and optional MySQL example for users.

## What's included
- Express server (server.js)
- EJS views (index, listings, show)
- Mongoose model for `Listing`
- Example MySQL user-auth snippet (commented)
- Public static assets (CSS, minimal JS)
- README with setup instructions

## Quick start (local)
1. Install dependencies:
   ```
   npm install
   ```
2. Create a `.env` file in the project root with:
   ```
   PORT=3000
   MONGO_URI=mongodb://localhost:27017/trip_vista
   SESSION_SECRET=your_secret_here
   ```
   (Optional) Add MySQL connection variables if you want to use the included sample MySQL auth:
   ```
   MYSQL_HOST=localhost
   MYSQL_USER=root
   MYSQL_PASSWORD=
   MYSQL_DATABASE=trip_vista_users
   ```

3. Start the app:
   ```
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser.

## Notes
- This is a minimal scaffold meant to be extended. It includes a simple create/list flow for listings.
- The MySQL authentication example is intentionally simplified and commented; use proper production practices when enabling.
- For production, secure sessions, enable HTTPS, validate and sanitize inputs, and add rate-limiting and CSRF protection.

Enjoy — modify freely!
