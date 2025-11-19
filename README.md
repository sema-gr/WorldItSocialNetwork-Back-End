# 🌐 WorldItSocialNetwork – Back-End

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

This repository contains the server-side application for **WorldItSocialNetwork**, a social media platform designed for connectivity and interaction. Built with a modern tech stack, it provides robust APIs for user management, real-time messaging, posts, and media handling.

---

## 🚀 Technologies Used

-   **Core:** Node.js, TypeScript, Express.js
-   **Database:** SQLite (via Prisma ORM)
-   **Authentication:** JWT, Bcrypt
-   **File Handling:** Multer
-   **Communication:** Nodemailer

---

## 📁 Project Structure

```text
WorldItSocialNetwork-Back-End/
├── prisma/
│   └── schema.prisma
├── public/
│   └── uploads/
├── src/
│   ├── index.ts
│   ├── socket.ts
│   ├── config/
│   ├── middlewares/
│   ├── types/
│   ├── utils/
│   ├── userApp/
│   ├── postApp/
│   ├── friendshipApp/
│   ├── chatsApp/
│   ├── messagesApp/
│   └── albumApp/
├── .env
├── package.json
└── tsconfig.json
```

---

# 🛠️ Getting Started

## 1️⃣ Install Dependencies

```bash
npm install
```

## 2️⃣ Environment Configuration

```env
PORT=3000
DATABASE_URL="file:./dev.db"
JWT_SECRET="your_super_secret_key"
```

## 3️⃣ Run Migrations

```bash
npm run prisma:migrate
```

## 4️⃣ Start the Server

```bash
npm run dev
```

---

# 📡 API Endpoints

## 👤 Users (/users)

| Method | Endpoint  | Description                           |
| ------ | --------- | ------------------------------------- |
| POST   | /reg      | Register a new user                   |
| POST   | /log      | Login user                            |
| POST   | /sendCode | Send code by email                    |
| GET    | /me       | Get information about user from token |
| PUT    | /:id      | Update user by id                     |
| GET    | /all      | Get all users                         |
| GET    | /:id      | Get user by id                        |

## 📝 Posts (/posts)

| Method | Endpoint | Description  |
| ------ | -------- | ------------ |
| GET    | /        | Get all post |
| POST   | /create  | Create post  |
| PUT    | /:id     | Update post  |
| DELETE | /:id     | Delete post  |

## 🖼️ Albums (/albums)

| Method | Endpoint | Description    |
| ------ | -------- | -------------- |
| GET    | /        | Get all albums |
| POST   | /create  | Create album   |
| PUT    | /:id     | Update album   |
| DELETE | /:id     | Delete album   |

## 👥 Friends (/friendship)

| Method | Endpoint          | Description    |
| ------ | ----------------- | -------------- |
| GET    | /all              | Get friends    |
| POST   | /create           | Send request   |
| POST   | /acceptFriendship | Accept request |
| DELETE | /deleteFriendship | Remove friend  |

## 💬 Chat (/chats)

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | /        | Get conversations |
| POST   | /create  | Start chat        |
| GET    | /:id     | Get messages      |

## 🗨️ Messages (/messages)

| Method | Endpoint | Description    |
| ------ | -------- | -------------- |
| DELETE | /:id     | Delete message |
| POST   | /create  | Send message   |
| GET    | /:id     | Get message    |

---

# 🖼️ File Uploads

Images stored in:

```
public/uploads/
```

---

# 📜 NPM Scripts

| Command                | Description            |
| ---------------------- | ---------------------- |
| npm run start          | Run project            |
| npm run prisma:format  | Format prisma's models |
| npm run prisma:migrate | Run migrations         |
| npm run prisma:seed    | Run seeds              |
