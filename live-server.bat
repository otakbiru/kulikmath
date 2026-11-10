@echo off
title KulikMath Live Server
cd /d "%~dp0"
node live-server.js %*
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo Gagal menjalankan Live Server. Pastikan Node.js sudah terinstal.
    pause
)
