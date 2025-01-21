# pet-store
Pet store project for SituSystems

I noticed a bug with the findByStatus endpoint - it accepts status as a list, but only returns pets for the first status in the list. 

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


#More time
## front-end
- move backend url to an environment.ts to allow for better configuration.
- clean up the aesthetics. A pet shopper would really be looking for a photo, name, species ( horse dog cat...etc ), breed, temperament ( active, lazy, ...etc) and age. So these should be displayed on the pet cards.
- could create an app shell for faster initial load
##back-end
- move logic out of the controller to a service layer
- Add error handling for the HTTPClient call, and return appropriate messages. 
- Create proper models for the pet, tag, and category data structures
- fix CORS issue ( when using local front-end )
