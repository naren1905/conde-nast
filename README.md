# conde-nast

Hello World App 🚀
This is a Node.js Express application that provides a simple REST API with Prometheus monitoring. It supports Docker Compose for containerization and deployment, along with GitHub Actions for CI/CD automation.


Features
✅ Simple REST API with Express.js
✅ Prometheus Monitoring for real-time metrics
✅ Docker & Minikube for Containerization
✅ GitHub Actions CI/CD for automated testing & deployment

<> Running the App on Windows
---> npm install
Start the App Without Docker
---> npm start
The app will be available at http://localhost:3000.

<>  Running with Docker Compose
---> docker-compose up -d
---> docker ps
API Endpoint: http://localhost:3000
Prometheus UI: http://localhost:9090

Running GitHub Actions Locally with act
i have given two build name 
---> act -j build-and-test
---> act -j docker-build



