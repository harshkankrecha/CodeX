Coding Contest Platform

A full-stack coding contest platform built using Python and Django, enabling users to participate in real-time programming competitions. The platform features live leaderboards, Google Sign-In authentication, and asynchronous background task processing for smooth performance and scalability.

Features

Real-time Coding Contests – Host contests with dynamic score updates and a live leaderboard.
Google Sign-In Integration – Secure and convenient user authentication using OAuth2.
Asynchronous Task Handling – Used Celery to schedule and execute background tasks such as result computation and notifications.
Caching & Message Brokering – Leveraged Redis for caching leaderboard data and managing Celery task queues.
Containerized Deployment – Fully containerized application with Docker for consistent environment setup.
Production-Ready Setup – Configured Nginx as a reverse proxy and Gunicorn as the WSGI server for efficient request handling.
