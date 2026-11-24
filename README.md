# Kubernetes Microservices Project 🚀

A microservices-based application built using **Node.js, Express.js, Docker, and Kubernetes**. This project demonstrates how to develop, containerize, deploy, and manage multiple independent services.

## 📌 Project Overview

This project contains two independent microservices:

1. **Task Service** – Manages task-related operations.
2. **User Service** – Provides user-related information.

Both services are containerized using Docker and deployed locally using Kubernetes (Minikube) and separately on Render.

## 🛠️ Technologies Used

- Node.js
- Express.js
- Docker
- Kubernetes
- Minikube
- Git & GitHub
- Render

## 📂 Project Structure

```text
k8s-microservices/
│
├── task-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── user-service/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── k8s/
│   ├── task-deployment.yaml
│   ├── task-service.yaml
│   ├── user-deployment.yaml
│   └── user-service.yaml
│
└── README.md
```

## ⚙️ Features

- Two independent Node.js microservices.
- REST API endpoints.
- Docker containerization.
- Kubernetes deployments and services.
- Multiple replicas for both services.
- Health-check endpoints.
- Cloud deployment using Render.

## 🐳 Docker Setup

Build Docker images:

```bash
docker build -t task-service:v1 ./task-service

docker build -t user-service:v1 ./user-service
```

## ☸️ Kubernetes Deployment

Start Minikube:

```bash
minikube start --driver=docker
```

Load Docker images into Minikube:

```bash
minikube image load task-service:v1

minikube image load user-service:v1
```

Apply Kubernetes configurations:

```bash
kubectl apply -f k8s/
```

Check deployments:

```bash
kubectl get deployments
```

Check pods:

```bash
kubectl get pods
```

Check services:

```bash
kubectl get services
```

## 🌐 Live Deployment

Both microservices are deployed separately on Render.

| Service | Live URL |
|---|---|
| Task Service | https://task-service-rfbi.onrender.com |
| User Service | https://user-service-kkwm.onrender.com |

### API Endpoints

**Task Service**
- `/` – Service status
- `/health` – Health check
- `/tasks` – Get tasks
- `POST /tasks` – Add a task

**User Service**
- `/` – Service status
- `/health` – Health check
- `/users` – Get users

## 📊 Deployment Status

- Task Service: Successfully deployed.
- User Service: Successfully deployed.
- Kubernetes: Successfully running locally using Minikube.
- Docker images: Successfully built and loaded.

## 🎯 Learning Outcomes

- Understanding microservices architecture.
- Building REST APIs using Express.js.
- Creating and managing Docker containers.
- Deploying applications using Kubernetes.
- Managing Kubernetes Deployments, Pods, and Services.
- Deploying applications to a cloud platform.

## 👨‍💻 Author

**Lalit Khode**

Third-Year B.Tech – Information Technology

GitHub: [@khodelalit36](https://github.com/khodelalit36)

LinkedIn: [Lalit Khode](https://linkedin.com/in/lalit-khode-787528316)

---

⭐ If you find this project useful, feel free to explore the repository!
