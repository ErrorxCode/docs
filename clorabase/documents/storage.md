# Clorabase storage
Storage for Clorabase is built for app developers who need to store and serve user-generated content, such as photos or videos, or any other files. It is like a cloud bucket where you can upload files that are required by the app. You can use SDK to upload, download and delete the file.

## Key features
- Max file size is 2GB
- Simple & easy SDK
- Unlimited storage & uploads


### Uploading file to storage
To upload a file to the storage, use the `upload(String,File,Callback)` method.

?> Tip: First move the file to your app external files directory and then pass the file from there to get read permission.

```java
ClorabaseStorage.upload(projectId, file, new ClorabaseStorageCallback() {  
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
?> **Pro Tip**: To organize your files, you can save each file name in database with respective collection and documents. 
For example, If I wanna save all images from `user1`. I will create a list in this document which will hold all the images uploaded by this user.
Then you can retrieve them later.

### Downloading file from storage
To download a file from clorabase storage, use `download(String,File,Callback)` method.
```java
ClorabaseStorage.download(projectId, "filename",downloadDir, new ClorabaseStorageCallback() {  
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


### Deleting file
Deleting file is also as easy as pie.
```java
ClorabaseStorage.delete(projectId, "filename", new ClorabaseStorageCallback() {  
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

## Listing all the files.
```java
ClorabaseStorage.list(projectId, iterator -> {  
    while (iterator.hasNext()) {  
        ClorabaseStorage.File[] files = iterator.next();  
  // do something with files  
  }  
});
```
The `iterator` is a paginated iterator which return a single page of files in every request made using `next()` call.


#### That's all what you need to know about the storage :)

