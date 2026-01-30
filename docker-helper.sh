#!/bin/bash
# Docker utility script for Rafeeq AI
# Usage: ./docker-helper.sh [command]

set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

case "${1:-help}" in
  build)
    echo "🔨 Building Docker image..."
    docker-compose build
    ;;
  
  up)
    echo "🚀 Starting containers..."
    docker-compose up -d
    echo "✅ Containers started"
    docker-compose ps
    ;;
  
  dev)
    echo "🚀 Starting in development mode..."
    docker-compose up
    ;;
  
  prod)
    echo "🚀 Starting in production mode..."
    NODE_ENV=production docker-compose up
    ;;
  
  down)
    echo "🛑 Stopping containers..."
    docker-compose down
    echo "✅ Containers stopped"
    ;;
  
  clean)
    echo "🧹 Cleaning up containers and volumes..."
    docker-compose down -v
    echo "✅ Cleanup complete"
    ;;
  
  logs)
    echo "📋 Application logs..."
    docker-compose logs -f app
    ;;
  
  logs-db)
    echo "📋 Database logs..."
    docker-compose logs -f postgres
    ;;
  
  ps)
    echo "📦 Container status..."
    docker-compose ps
    ;;
  
  migrate)
    echo "🗄️  Running database migrations..."
    docker-compose exec app npm run db:push
    echo "✅ Migrations complete"
    ;;
  
  seed)
    echo "🌱 Seeding database..."
    docker-compose exec app npm run db:seed
    echo "✅ Database seeded"
    ;;
  
  bash)
    echo "🔧 Opening app shell..."
    docker-compose exec app sh
    ;;
  
  db-shell)
    echo "🔧 Opening database shell..."
    docker-compose exec postgres psql -U postgres -d rafeeq_db
    ;;
  
  rebuild)
    echo "🔄 Rebuilding containers..."
    docker-compose build --no-cache
    docker-compose up -d
    echo "✅ Containers rebuilt and restarted"
    ;;
  
  health)
    echo "🏥 Checking container health..."
    docker-compose ps
    echo ""
    docker-compose exec postgres pg_isready -U postgres || true
    ;;
  
  *)
    cat << EOF
Rafeeq AI Docker Helper Script

Usage: ./docker-helper.sh [COMMAND]

Commands:
  build        Build Docker image
  up           Start containers in background
  dev          Start containers in foreground (development)
  prod         Start containers in production mode
  down         Stop containers
  clean        Stop containers and remove volumes
  
  logs         View application logs
  logs-db      View database logs
  ps           Show container status
  
  migrate      Run database migrations
  seed         Seed database with test data
  
  bash         Open app container shell
  db-shell     Open database shell
  
  rebuild      Rebuild containers without cache
  health       Check container health status
  
  help         Show this help message

Examples:
  ./docker-helper.sh dev       # Start in dev mode with logs
  ./docker-helper.sh logs      # View app logs in real-time
  ./docker-helper.sh migrate   # Run migrations inside container
EOF
    ;;
esac
