import subprocess
import os
from pathlib import Path

#Inicializando Backend
print("------------------------------------------")
print("Inicializando BACKEND")
print("------------------------------------------")
subprocess.call(['xterm', '-e', """cd ./backend && dotnet build && cd ./backend.Api && dotnet watch"""])


#Inicializando Frontend
print("------------------------------------------")
print("Inicializando FRONTEND")
print("------------------------------------------")
subprocess.run("""cd ./frontend && npm install && npm run dev""", shell=True)
