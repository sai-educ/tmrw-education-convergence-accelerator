#!/bin/bash
# Local development server for tmrw Education Convergence Accelerator
# Developed by Sai Gattupalli, PhD

echo "======================================"
echo "Starting local development server..."
echo "======================================"
echo ""
echo "Server will be available at:"
echo "  http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

python3 -m http.server 8000
