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


---

# 🏁 Conclusion

The Complaint Management System demonstrates a practical implementation of a MERN-based web application that simplifies institutional grievance handling.

By using:

- Node.js & Express for backend
- MongoDB for data storage
- Role-based authentication
- Clean separation of complaints and solutions

The system ensures structured, efficient, and scalable complaint resolution.

