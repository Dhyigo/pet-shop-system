 #Backend initialization
 Start-Process powershell -ArgumentList "-noexit", "-noprofile", "-command & {
    Write-Output '------------------------------------------'
    Write-Output 'Inicializando BACKEND'
    Write-Output '------------------------------------------'
    cd ./backend;
    dotnet build 
    cd ./backend.Api
    dotnet watch
 }"

#Frontend initialization
Write-Output '------------------------------------------'
Write-Output 'Inicializando FRONTEND'
Write-Output '------------------------------------------'
cd ./frontend
npm install
npm run dev
