@echo off
title Jade AI
cd /d "%~dp0"

echo.
echo ===================================================
echo          Uruchamianie Jade AI...
echo ===================================================
echo.

:: Sprawdzanie Node.js
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo Node.js nie jest zainstalowany.
    echo Pobierz Node.js ze strony: https://nodejs.org/
    pause
    exit /b 1
) else (
    echo Node.js jest zainstalowany.
)

:: Sprawdzanie npm
where npm >nul 2>nul
if %errorlevel% neq 0 (
    echo npm nie jest zainstalowany.
    pause
    exit /b 1
) else (
    echo npm jest zainstalowany.
)

:: Sprawdzanie Electron
call npm list -g electron >nul 2>nul
if %errorlevel% neq 0 (
    echo Instalowanie Electron...
    call npm install -g electron
) else (
    echo Electron jest zainstalowany.
)

:: Zawsze tworz nowy plik electron-run.js
if exist "electron-run.js" del "electron-run.js"
echo Tworzenie pliku electron-run.js...

(
echo const { app, BrowserWindow } = require('electron'^);
echo const path = require('path'^);
echo.
echo function createWindow(^) {
echo   const mainWindow = new BrowserWindow({
echo     width: 1200,
echo     height: 800,
echo     webPreferences: {
echo       nodeIntegration: true,
echo       contextIsolation: false
echo     }
echo   }^);
echo.
echo   mainWindow.loadFile('interface.html'^);
echo }
echo.
echo app.whenReady(^).then(^(^) =^> {
echo   createWindow(^);
echo.
echo   app.on('activate', (^) =^> {
echo     if (BrowserWindow.getAllWindows(^).length === 0^) createWindow(^);
echo   }^);
echo }^);
echo.
echo app.on('window-all-closed', (^) =^> {
echo   if (process.platform !== 'darwin'^) app.quit(^);
echo }^);
) > electron-run.js

echo.
echo Uruchamianie aplikacji...
echo.

npx electron electron-run.js

if %errorlevel% neq 0 (
    echo Wystapil blad podczas uruchamiania aplikacji.
) else (
    echo Aplikacja zostala zamknieta.
)

pause
