@echo off
REM Docker utility script for Rafeeq AI (Windows)
REM Usage: docker-helper.bat [command]

setlocal enabledelayedexpansion

set "COMMAND=%1"
if "%COMMAND%"=="" set "COMMAND=help"

if /i "%COMMAND%"=="build" (
    echo 🔨 Building Docker image...
    docker-compose build
    goto :end
)

if /i "%COMMAND%"=="up" (
    echo 🚀 Starting containers...
    docker-compose up -d
    echo ✅ Containers started
    docker-compose ps
    goto :end
)

if /i "%COMMAND%"=="dev" (
    echo 🚀 Starting in development mode...
    docker-compose up
    goto :end
)

if /i "%COMMAND%"=="prod" (
    echo 🚀 Starting in production mode...
    set "NODE_ENV=production"
    docker-compose up
    goto :end
)

if /i "%COMMAND%"=="down" (
    echo 🛑 Stopping containers...
    docker-compose down
    echo ✅ Containers stopped
    goto :end
)

if /i "%COMMAND%"=="clean" (
    echo 🧹 Cleaning up containers and volumes...
    docker-compose down -v
    echo ✅ Cleanup complete
    goto :end
)

if /i "%COMMAND%"=="logs" (
    echo 📋 Application logs...
    docker-compose logs -f app
    goto :end
)

if /i "%COMMAND%"=="logs-db" (
    echo 📋 Database logs...
    docker-compose logs -f postgres
    goto :end
)

if /i "%COMMAND%"=="ps" (
    echo 📦 Container status...
    docker-compose ps
    goto :end
)

if /i "%COMMAND%"=="migrate" (
    echo 🗄️  Running database migrations...
    docker-compose exec app npm run db:push
    echo ✅ Migrations complete
    goto :end
)

if /i "%COMMAND%"=="seed" (
    echo 🌱 Seeding database...
    docker-compose exec app npm run db:seed
    echo ✅ Database seeded
    goto :end
)

if /i "%COMMAND%"=="bash" (
    echo 🔧 Opening app shell...
    docker-compose exec app sh
    goto :end
)

if /i "%COMMAND%"=="db-shell" (
    echo 🔧 Opening database shell...
    docker-compose exec postgres psql -U postgres -d rafeeq_db
    goto :end
)

if /i "%COMMAND%"=="rebuild" (
    echo 🔄 Rebuilding containers...
    docker-compose build --no-cache
    docker-compose up -d
    echo ✅ Containers rebuilt and restarted
    goto :end
)

if /i "%COMMAND%"=="health" (
    echo 🏥 Checking container health...
    docker-compose ps
    echo.
    docker-compose exec postgres pg_isready -U postgres
    goto :end
)

REM Default: show help
echo Rafeeq AI Docker Helper Script
echo.
echo Usage: docker-helper.bat [COMMAND]
echo.
echo Commands:
echo   build        Build Docker image
echo   up           Start containers in background
echo   dev          Start containers in foreground (development)
echo   prod         Start containers in production mode
echo   down         Stop containers
echo   clean        Stop containers and remove volumes
echo.
echo   logs         View application logs
echo   logs-db      View database logs
echo   ps           Show container status
echo.
echo   migrate      Run database migrations
echo   seed         Seed database with test data
echo.
echo   bash         Open app container shell
echo   db-shell     Open database shell
echo.
echo   rebuild      Rebuild containers without cache
echo   health       Check container health status
echo.
echo   help         Show this help message
echo.
echo Examples:
echo   docker-helper.bat dev       # Start in dev mode with logs
echo   docker-helper.bat logs      # View app logs in real-time
echo   docker-helper.bat migrate   # Run migrations inside container

:end
endlocal
