# 🔐 Auth0 Auth with React & Node.js Backend

This project demonstrates authentication using **Auth0** on a **React (Vite)** frontend with a **Node.js + Express** backend. After successful login, an access token is sent to the backend, which verifies the token and sends it to the user’s email address.

---

## 🧩 Tech Stack

- Frontend: React (with Vite)
- Auth Provider: Auth0
- Backend: Node.js + Express
- Email Service: Nodemailer (SMTP / SendGrid optional)

---

## 📦 Folder Structure


---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/auth0-react-node.git
cd auth0-react-node
```
2. Setup Auth0

Go to Auth0 Dashboard:
✅ Application

    Create an Application → type: Single Page Application

    Allowed Callback URL: http://localhost:5173

    Allowed Logout URL: http://localhost:5173

    Allowed Web Origins: http://localhost:5173

✅ API

    Create a new API

        Name: My API

        Identifier: https://myapi.example.com (Use this as audience)

        Signing Algorithm: RS256

3. Setup Frontend (Client)

```bash
cd client
npm install
```
Create a .env file:

``` .env
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-client-id
VITE_AUTH0_AUDIENCE=https://myapi.example.com
```
Run the app:

Always show details

npm run dev

4. Setup Backend (Server)

Always show details

cd server
npm install

Create a .env file:

```
PORT=5000
AUTH0_DOMAIN=your-auth0-domain
AUTH0_AUDIENCE=https://myapi.example.com
EMAIL_FROM=your@email.com
EMAIL_PASS=your-email-password
EMAIL_SERVICE=gmail # or smtp, sendgrid, etc.
```
Run the server:

Always show details

npm run start

✅ How It Works

    User logs in using Auth0 on the frontend.

    After login, the access token is fetched using getAccessTokenSilently().

    The token is sent to the backend via /auth/callback.

    Backend verifies the token using Auth0's public keys.

    An email is sent to the authenticated user's email containing the token.

📽️ Demo

A screen recording demonstrating the complete flow is included in /demo.
🌐 Deployment (Optional)

    Frontend: Vercel / Netlify

    Backend: Render / Railway / AWS Lightsail

    Don’t forget to update Auth0 Callback URLs with the deployed domains!

🔒 Bonus: Role-Based Auth (Optional)

In Auth0:

    Enable RBAC (Role Based Access Control)

    Create roles like Admin, User

    Assign roles to users in the Auth0 dashboard

    Use accessToken.claims to check roles in backend routes

🛠️ Troubleshooting

    Callback URL mismatch: Make sure your callback URL is added to the Allowed Callback URLs in Auth0.

    Token not valid: Ensure audience is set properly and matches your API identifier.

    Emails go to spam: Use a trusted SMTP provider like SendGrid and set up SPF/DKIM/DMARC records.

👨‍💻 Author

Made with ❤️ by Tanya Singhal
