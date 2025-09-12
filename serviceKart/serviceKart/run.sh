#!/bin/bash

echo "Starting ServiceKart backend..."
cd backend
node server.js &

sleep 2

echo "Opening frontend..."
xdg-open ../frontend/pages/index.html  # For Linux
# open ../frontend/pages/index.html   # For macOS
