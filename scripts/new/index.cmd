@echo off
rem echo "Printing "
rem echo %1 
echo === Package root directory ===
echo %cd%
rem csc %cd%\scripts\new\app.cs
rem dotnet build  %cd%\scripts\new
echo(
echo Running dotnet application using project file...
dotnet run --project %cd%\scripts\new %1 %cd%