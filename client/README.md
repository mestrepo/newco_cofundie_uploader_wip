# cofundie uploader WIP(Work In Progress)

Upload images and videos and display them Work In Progress. Requires a basic authentication with e-mail and password.

# Technology Stack
Technologies used in the product.

## Frontend
- VueJS

## Backend
- Firebase

# Features
- Authentication (Email, password), 
- Realtime Database, 
- Storage.

# Technology Setup
Steps on getting the project setup up and running.

## firebase setup
- Create a project on firebase
- Enable e-mail/password authentication method on firebase console
- Still at console, enable realtime database and storage (both on test mode, change it later if you want it)

## VueJS application setup and deployment
- `cd /path/to/root/of/project`
- setup environment variables
>>>`.env.local.example` -->  `.env.local`
- install dependencies: 
>>> `npm install`
- Run development server
>>>`npm run serve` 

## Production deployment

### initial one-time setup

```bash
cd /path/to/root/of/project/client
```

```bash
firebase login
```

```bash
firebase init
```

## Production deployment

### initial one-time setup

```bash
cd /path/to/root/of/project/client
```

```bash
firebase login
```

```bash
firebase init
```

### deployment

```bash
npm run build
```

```bash
firebase deploy
```

# References
- [Upload Files on Web](https://firebase.google.com/docs/storage/web/upload-files)

- [Vue.js integration with firebase storage and realtime database](https://github.com/arthurzeras/vue-firebase)


# License
Creative Commons License or most restrictive license of constituent software. Attribution required.
