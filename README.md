# CodeX

A coding platform built with Python and Django that enables users to participate in real-time coding contests.
The platform supports live leaderboards, secure authentication with Google OAuth2, asynchronous task processing using Celery and Redis, and production-ready deployment with Docker, Nginx, and Gunicorn.

## 🚀 Features
- **Real-Time Contests**: Participate in coding competitions with dynamically updating leaderboards.
- **Live Leaderboards**: Contest rankings update instantly based on submissions and scores.
- **Google OAuth2 Authentication**: Secure and seamless login using Google Sign-In.
- **Asynchronous Task Processing**: Background jobs such as scoring, contest scheduling, and notifications are handled efficiently using Celery.
- **Redis Integration**: Used for caching leaderboard data and managing Celery task queues.
- **Dockerized Setup**: Fully containerized using Docker and Docker Compose for simplified development and deployment.
- **Production-Ready Deployment**: Configured with Nginx as a reverse proxy and Gunicorn as the WSGI application server.
