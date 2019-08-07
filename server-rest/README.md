# About
REST API to access firebase storage

# REST Endpoint Scheme
https://firebasestorage.googleapis.com/v0/b/[APP_ID]/o/[FOLDER_NAME]%[FOLDER_NAME]%2F[FILENAME]?alt=media

http[s]://firebasestorage.googleapis.com/<api-version>/b/<bucket>/o/<object-path>

# Examples

## Download
### Single File Without Token
https://firebasestorage.googleapis.com/v0/b/my-app-id-007.appspot.com/o/files%2F1563386930278.png?alt=media

### Single File With Token
https://firebasestorage.googleapis.com/v0/b/my-app-id-007.appspot.com/o/files%2F1563386930278.png?alt=media&token=98c02bdf-4cfc-4e0f-abb9-27299c165ba8

### Storage Bucket With Token
https://firebasestorage.googleapis.com/v0/b/my-app-id-007.appspot.com/o?token=98c02bdf-4cfc-4e0f-abb9-27299c165ba8

### Storage Bucket Without Token
https://firebasestorage.googleapis.com/v0/b/my-app-id-007.appspot.com/o

## Upload

### Upload  file with token
https://firebasestorage.googleapis.com/v0/b/my-app-id-007.appspot.com/o?uploadType=multipart&name=picture2&token=98c02bdf-4cfc-4e0f-abb9-27299c165ba8

### Upload file with token 2
https://firebasestorage.googleapis.com/v0/b/my-app-id-007.appspot.com/o/?token=98c02bdf-4cfc-4e0f-abb9-27299c165ba8&uploadType=multipart&name=picture2

# References
- [List Files on Web](https://firebase.google.com/docs/storage/web/list-files)
- [How to Store “direct link” to an image using Firebase Storage](https://stackoverflow.com/a/50428634/773257)
- [Is it possible to get the firebase storage download url without the token at the end?](https://www.reddit.com/r/Firebase/comments/b1bcz3/is_it_possible_to_get_the_firebase_storage/)
- [Firebase: Get Started with Storage Security Rules](https://firebase.google.com/docs/storage/security/start#sample-rules)
- [using postman to access firebase REST API](https://stackoverflow.com/questions/38661839/using-postman-to-access-firebase-rest-api/56308328#56308328)
- [UPLOAD to FIREBASE storage with REST API](https://gist.github.com/tonis2/9f87420a12e409009761a45b5787e156)
- [Error on uploading file to firebase cloud storage: “Listing objects in a bucket is disallowed for rules_version = 1”](https://stackoverflow.com/a/56169820/773257)
- [Firebase: Firebase Security Rules for Cloud Storage Reference](https://firebase.google.com/docs/reference/security/storage)
- [What Bearer token should I be using for Firebase Cloud Messaging testing?](https://stackoverflow.com/a/56308388/773257)
- [Access to Firebase Storage with Firebase Authentication](https://marcus-obst.de/blog/firebase-storage-and-firebase-auth#tldr)
- [Firebase Storage and Firebase Authentication supported? #1582](https://github.com/googleapis/google-api-php-client/issues/1582#issuecomment-455876157)
- [API workbench](http://apiworkbench.com/docs/)
- [Uploading files to Firebase Storage using REST API](https://stackoverflow.com/a/37692252/773257)
- [How to upload the files to firebase storage with uid using Post Url?](https://stackoverflow.com/a/54887580/773257)
- [How to upload objects to Firebase Storage using Postman for testing?](https://stackoverflow.com/a/46842973/773257)
- [How to upload the files to firebase storage with uid using Post Url?](https://stackoverflow.com/a/54887580/773257)
- [JSON API: Performing a multipart upload](https://cloud.google.com/storage/docs/json_api/v1/how-tos/multipart-upload)
- [Firebase Auth REST API](https://firebase.google.com/docs/reference/rest/auth/)
- [JSON API: Performing a resumable upload](https://cloud.google.com/storage/docs/json_api/v1/how-tos/resumable-upload)
- [Uploading objects](https://cloud.google.com/storage/docs/uploading-objects)
- [Firebase REST API for cofundie](http://bit.ly/CofundieFirebaseRestApi)