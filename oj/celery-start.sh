#!/bin/sh

# Optional: Apply migrations before starting Celery
python manage.py migrate

# Start the Celery worker
celery -A oj worker --loglevel=info
