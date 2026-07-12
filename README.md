# ☁️ Cloud Expense Tracker

![AWS](https://img.shields.io/badge/AWS-Cloud-orange?logo=amazonaws)
![Docker](https://img.shields.io/badge/Docker-Container-blue?logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Amazon ECS](https://img.shields.io/badge/Amazon-ECS-yellow)
![Amazon ECR](https://img.shields.io/badge/Amazon-ECR-blue)
![CloudWatch](https://img.shields.io/badge/CloudWatch-Monitoring-orange)

A cloud-native expense tracking application developed using **Node.js** and deployed on **Amazon Web Services (AWS)** using **Docker**, **Amazon Elastic Container Registry (ECR)**, and **Amazon Elastic Container Service (ECS Fargate)**.

This project demonstrates containerization, cloud deployment, monitoring, and DevOps fundamentals.

---

# 🚀 Features

- Add Expense
- Delete Expense
- Expense Categories
- Total Expense Calculation
- Total Records Counter
- Responsive User Interface
- Cloud Deployment on AWS
- Docker Containerization
- CloudWatch Log Monitoring

---

# 🛠 Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Backend

- Node.js
- Express.js

### Cloud & DevOps

- AWS EC2
- Amazon ECR
- Amazon ECS (Fargate)
- Docker
- IAM
- CloudWatch
- Git
- GitHub

---

# 📁 Project Structure

```
Cloud-Expense-Tracker/

│

├── public/

│ ├── index.html

│ ├── style.css

│ └── script.js

│

├── server.js

├── package.json

├── Dockerfile

├── README.md

└── screenshots/
```

---

# ☁ AWS Architecture

```
Developer

↓

GitHub Repository

↓

Docker Build

↓

Amazon ECR

↓

Amazon ECS (Fargate)

↓

Container Running

↓

CloudWatch Logs

↓

Web Application
```

---

# 🔄 Deployment Workflow

1. Developed application using Node.js

2. Created Docker image

3. Pushed Docker image to Amazon ECR

4. Created ECS Cluster

5. Created Task Definition

6. Launched ECS Task using Fargate

7. Configured IAM Roles

8. Verified logs in CloudWatch

9. Accessed deployed application

---

# 📸 Screenshots

## Home Page

![Home](screenshots/home.png)

---

## Expense Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Docker Container Running

![Docker](screenshots/docker.png)

---

## Amazon EC2 Instance

![EC2](screenshots/ec2.png)

---

## Amazon Elastic Container Registry (ECR)

![ECR](screenshots/ecr.png)

---

## Amazon ECS Cluster

![ECS](screenshots/ecs.png)

---

## CloudWatch Logs

![CloudWatch](screenshots/cloudwatch.png)

---

## IAM Roles

![IAM](screenshots/iam.png)

---

# 💻 Installation

Clone repository

```bash
git clone https://github.com/YourUsername/Cloud-Expense-Tracker.git
```

Go to project folder

```bash
cd Cloud-Expense-Tracker
```

Install dependencies

```bash
npm install
```

Run application

```bash
node server.js
```

Application runs on

```
http://localhost:8000
```

---

# 🐳 Docker

Build Docker Image

```bash
docker build -t expense-tracker .
```

Run Container

```bash
docker run -d -p 8000:8000 expense-tracker
```

---

# ☁ AWS Services Used

- Amazon EC2
- Amazon ECS (Fargate)
- Amazon ECR
- IAM
- CloudWatch
- Docker

---

# 📚 Learning Outcomes

Through this project I learned:

- Docker Containerization
- Cloud Deployment
- Amazon ECS
- Amazon ECR
- IAM Role Management
- CloudWatch Monitoring
- Node.js Backend Deployment
- GitHub Version Control

---

# 📌 Future Improvements

- User Authentication
- Database Integration (MongoDB)
- Expense Charts
- Monthly Reports
- AWS RDS Integration
- CI/CD Pipeline using GitHub Actions

---

# 👩‍💻 Author

## Saloni Bhosale

Computer Engineering Student

### 📧 Connect with Me

- 💼 LinkedIn: https://www.linkedin.com/in/saloni-bhosale-039642346
- 💻 GitHub: https://github.com/salonii2002

### 📂 Project Repository

https://github.com/salonii2002/cloud-expense-tracker

---

⭐ If you found this project useful, please consider giving it a Star!
