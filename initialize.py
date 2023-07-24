import subprocess

#Inicializando Backend
# WIP: TESTAR EM UM AMBIENTE LINUX (existem varios "tipos" de terminais no linux, temos que ver como o comando abaixo de se comporta em um ambiente linux)

print("------------------------------------------")
print("Inicializando BACKEND")
print("------------------------------------------")
subprocess.call(['xterm', '-e', """cd ./backend && dotnet build && cd ./backend.Api && dotnet watch"""])


#Inicializando Frontend
print("------------------------------------------")
print("Inicializando FRONTEND")
print("------------------------------------------")
subprocess.run("""cd ./frontend && npm install && npm run dev""", shell=True)
