# 🚨 Complaint Management System (MERN Stack)

> A Simple and Efficient Student-to-Department Grievance Handling System  
> Built using MERN Stack

---

## 👨‍💻 Project Team

| Name | Roll Number |
|------|------------|
| R. Greeshmanth | 24B11CS523 |
| G. Chandan | 24B11CS518 |
| R. Likhith | 24B11CS382 |
| N. Charan | 24B11CS296 |

**Faculty Guide:** R. Padma Sri  
**Branch:** Computer Science & Engineering  

---

# 📌 Project Overview

The Complaint Management System is a full-stack MERN web application that enables students to directly submit complaints to departments and receive solutions digitally.

The system follows a simple workflow:

- Students submit complaints.
- Complaints are stored in the database.
- Departments log in and view relevant complaints.
- Departments submit solutions.
- Once resolved, the complaint is removed from active records.

This ensures a clean and efficient grievance handling system.

---

# 🎯 Project Objectives

- Provide secure login for departments.
- Allow students to submit complaints.
- Enable departments to view complaints by department.
- Allow departments to provide solutions.
- Automatically remove complaints after resolution.
- Maintain resolved solutions separately in the database.

---

# 🏗 Tech Stack

| Layer | Technology |
|--------|------------|
| Frontend | EJS |
| Backend | Node.js + Express.js |
| Database | MongoDB |
| Tools | MongoDB Compass, Nodemon, NPM |

---

# 👥 System Roles

## 🎓 Student
- Submit complaint
- Specify department
- Provide issue description

## 🏢 Department
- Login using credentials
- View complaints related to their department
- Provide solution
- Complaint gets deleted after solution submission

> There is no Admin role and no complaint tracking system in this implementation.

---

# 🔄 System Workflow

```
Student Submits Complaint
          ↓
Complaint Stored in "student" Collection
          ↓
Department Logs In
          ↓
Department Views Complaints
          ↓
Department Writes Solution
          ↓
Solution Stored in "solution" Collection
          ↓
Complaint Deleted from "student" Collection
```

---

# 🗄 Database Design (MongoDB)

The system uses MongoDB with three collections.

## 📂 Collections Used

### 1️⃣ Student Collection (`student.js`)

Stores active complaints.

Fields:
- username : String
- dept : String
- complaint : String

---

### 2️⃣ Role Collection (`role.js`)

Stores department login credentials.

Fields:
- username : String
- password : String
- role : String

---

### 3️⃣ Solution Collection (`solution.js`)

Stores resolved complaints.

Fields:
- username : String
- solution : String
- dept : String

---

# 🖥 User Interface Pages

- Login Page
- Student Complaint Submission Page
- Department Dashboard
- Solution Submission Page

---

# ✨ Key Features

- Direct Student-to-Department Communication
- Simple MongoDB Schema Design
- Clean Complaint Removal After Resolution
- Separate Storage of Resolved Solutions
- Lightweight and Efficient Workflow
- Role-Based Access Control
---

# The visual proofs
# Admin page
-Admin page
<img width="2880" height="5922" alt="screencapture-localhost-3000-admin-2026-03-01-21_46_51" src="https://github.com/user-attachments/assets/c9c3e524-21f1-4fd3-ba67-b7bd85c09306" />
-Add products section
<img width="1048" height="549" alt="Screenshot 2026-03-01 at 9 35 56 PM" src="https://github.com/user-attachments/assets/d6a53374-24b2-483c-bd2e-e58344612c59" />
-Products section
<img width="1371" height="801" alt="Screenshot 2026-03-01 at 9 36 44 PM" src="https://github.com/user-attachments/assets/fa4cacbb-69ef-49a0-807d-f75e256b580f" />
-Orders section

# User side
-Header and dashboard
<img width="2880" height="3914" alt="screencapture-localhost-3000-user-2026-03-01-21_39_56" src="https://github.com/user-attachments/assets/728574d0-b973-4726-b24c-4f3c28545876" />
-Products page
<img width="2880" height="1960" alt="screencapture-localhost-3000-userproducts-2026-03-01-21_40_55" src="https://github.com/user-attachments/assets/707b1fac-dd67-4602-a3f9-da41ec5ab902" />
-Cart
<img width="1400" height="778" alt="Screenshot 2026-03-01 at 9 42 30 PM" src="https://github.com/user-attachments/assets/bf3b1358-dc16-4cbd-9233-c6e83f742d13" />
-Orders page
<img width="2880" height="3834" alt="screencapture-localhost-3000-orders-2026-03-01-21_44_16" src="https://github.com/user-attachments/assets/22e6955a-12df-4c02-8ad0-1f36060f655e" />

---

# ✨ Project is live on

```

https://complaint-management-v5za.onrender.com

```

---

# 🏁 Conclusion

The Complaint Management System demonstrates a practical implementation of a MERN-based web application that simplifies institutional grievance handling.

By using:

- Node.js & Express for backend
- MongoDB for data storage
- Role-based authentication
- Clean separation of complaints and solutions

The system ensures structured, efficient, and scalable complaint resolution.

