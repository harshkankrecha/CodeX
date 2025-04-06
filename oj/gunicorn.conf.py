import os

bind = f"0.0.0.0:{os.environ.get('PORT', '8000')}"  # Railway provides PORT
workers = 3
