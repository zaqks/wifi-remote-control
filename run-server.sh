#!/bin/bash
# python3 -m uvicorn _main_app.asgi:application --host 127.0.0.1 --port 8000 --reload --reload-include="*.html"
python3 -m uvicorn _main_app.asgi:application --host 0.0.0.0 --port 8000 --reload --reload-include="*.html"