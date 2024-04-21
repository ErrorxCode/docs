# Clorabase storage
Storage for Clorabase is built for app developers who need to store and serve user-generated content, such as photos or videos, or any other files. It is like a cloud bucket where you can upload files that are required by the app. You can use SDK to upload, download and delete the file.

## Key features
- Max file size is 2GB
- Simple & easy SDK
- Unlimited storage & uploads

### Initialize the class
```java
ClorabaseStorage storage = clorabase.getStorage();
```
then with this object, we can:

### Upload file to storage
To upload a file to the storage, use the `upload(String,File,Callback)` method.

?> Tip: Take care of the read/write permission, specually if you are targeting higher android versions

```java
storage.upload(projectId, file, new ClorabaseStorageCallback() {  
    @Override  
  public void onFailed(@NonNull Exception e) {  
        // check the error  
  }  
  
    @Override  
  public void onProgress(int percent) {  
        // progress in percentage  
  }  
  
    @Override  
  public void onComplete() {  
        // file uploaded  
  }  
});
```
?> **Pro Tip**: To organize your files, you can save each file name in the database with the respective collection and documents. 
For example, If I wanna save all images from `user1`. I will create a list in a document in database, that will hold referenfce (name/download_link) of the images uploaded by this user.
Then you can retrieve them later.

### Downloading files from storage
To download a file from clorabase storage, use the `download(String,File,Callback)` method.
```java
storage.download(projectId, "filename",downloadDir, new ClorabaseStorageCallback() {  
    @Override  
  public void onFailed(@NonNull Exception e) {  
        // check the error  
  }  
  
    @Override  
  public void onProgress(int percent) {  
        // progress in percentage  
  }  
  
    @Override  
  public void onComplete() {  
        // file uploaded  
  }  
});
```


### Delete file
Deleting file is also as easy as pie.
```java
storage.delete("filename", new ClorabaseStorageCallback() {  
    @Override  
  public void onFailed(@NonNull Exception e) {  
        // check the error  
  }  
  
    @Override  
  public void onProgress(int percent) {  
        // will not be called in this case  
  }  
  
    @Override  
  public void onComplete() {  
        // file deleted  
  }  
});
```

## List all the files.
```java
storage.list(iterator -> {  
    while (iterator.hasNext()) {  
        ClorabaseStorage.File[] files = iterator.next();  
  // do something with files  
  }  
});
```
The `iterator` is a paginated iterator which return a single page of files in every request made using `next()` call.


#### That's all what you need to know about the storage :)

