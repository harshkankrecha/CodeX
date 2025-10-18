# Coding Contest Platform

A full-stack **coding contest platform** built using **Python** and **Django**, enabling users to participate in **real-time programming competitions**.  
Features include **live leaderboards**, **Google Sign-In authentication**, and **asynchronous task processing** powered by **Celery** and **Redis**.  
The system is fully **containerized with Docker**, production-ready with **Nginx + Gunicorn**.


## Features

**Real-time Contests** – Dynamic leaderboard updates during ongoing contests.  
**Google OAuth2 Login** – Quick and secure authentication using Google Sign-In.  
**Celery for Background Tasks** – Handles scoring, scheduling, and notifications asynchronously.  
**Redis Caching** – Speeds up leaderboard updates and queues Celery tasks.  
**Containerized Deployment** – Simplified setup using Docker and Docker Compose.  
**Production Ready** – Configured Nginx (reverse proxy) and Gunicorn (application server).  
