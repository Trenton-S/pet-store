# pet-store
Pet store project for SituSystems
I wasn't sure if the front end should just talk directly to the PetStoreApi or use the endpoint I created. 
Currently it's pointed at `https://petstore.swagger.io` , but if you replace line in `src/app/services/pet-store.service.ts:12` with line 13, it will instead point to the local backend. 
I used a CORS policy in the backend to make the endpoint functional.

##backend

`cd ./back-end/PetStoreApi`

`dotnet run --launch-profile https`

##front-end

I normally use WSL for angular dev work, so these are all linux-based commands:
`cd ./front-end/pet-store`

install latest node version (should be version 22)

`nvm install --lts `

`nvm use --lts`
get node packages required to run app

`npm i`

run app

`ng serve`
