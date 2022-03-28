# Clorabase Database
Clorabase Database is an open-source, flexible, scalable database for android apps. It offers offline support for android apps so you can build responsive apps that work regardless of network latency or Internet connectivity. It is NoSql key-value typed database. See [CloremDB](https://github.com/ErrorxCode/CloremDB) for more info about the database.

## Key features
- No account needed
- Simple & easy SDK
- NoSql key-value relationships

### Initializing the class.
*First of all, add your app to clorabase from the console. Goto "Database" section and click '+' icon to add a new app*.
To use any method of the class, first you have to initialize it. Just create its reference from the default constructor and it will automatically be initialized.

```java
ClorabaseDatabase clorabase = new ClorabaseDatabase(this,YOUR_TOKEN,YOUR_PROJECT_ID);
```
You can get token and project id from the "Credentials section" of the console.

### Working with database
Clorabase database is different from all other databases. There is no seperate read/write operation on database, instead you perform that operations on your local database and it is synced with our server by a method call. See the below **example**:
#### Asyncronously
It is recommanded to use this approch when your data is big or taking time to fetch/push data.
```java
clorabase.getDatabaseAsync(new ClorabaseDatabase.DatabaseCallback() {  // Fetches data from the server
    @Override
    public void onCreated(Node db) {
        db.put("foo","bar");
        String bar = db.getString("foo", null);
        ...          // Your database operation here
        db.commit(); // This is important to save the data
        clorabase.syncServer(new DriveHelper.Callback() {  // Sends back the new data
            @Override
            public void onSuccess() {
                // Success
            }
            
            @Override
            public void onError(Exception e) {
                // Error
            }
        });
    }
    @Override
    public void onError(Exception e) {
        // Error
    }
});
```
#### Syncronously
You should generally make use of this approch. Make sure it is not making your UI unresponsive.
```java
try {
    clorabase.syncDatabase();  // Blocks until the sync is complete.
    Node db = clorabase.getDatabase();
    ...                         // Do something with the database.
    db.commit();                // Commit the changes to the database.
    clorabase.syncServer(null);  // This is async call
} catch (Exception e) {
   // Error occured on first line
}
```
As you have seen, here we work with our local database and syncs it with our server. the workflow is as follows :
- We fetch data from the server through `syncDatabase()` (Optional)
- We work on our database usually as we do in local database (`getDatabase()`)
- We push that changed data to the server using `syncServer()` (Optional)

What actually clorabase does is that it just download & upload your database. When we call `syncDatabase()`, it sync our local database with the server so that our local database now has data which server also has. Once we make changes to the local database, calling `syncServer()` will sync the server database with our local database thus mantaining the balance & equality in data in both client and server. Althought, it is not necessary to fetch & push data everytime. Do it only when required.

For example an online TODO app should fetch data `syncDatabase()` only on the fisrt-time starting or loggin of the app and can push `syncServer()` data on button click or rearly.

### Managing database
You can manage your database from the console. Just goto 'Database' & add your app.
**Note :** You can add upto 10 apps in public drive

![add-app](add-app.png)

After that, you can see few info of your database. You can only delete the database from here.

![apps-list](https://user-images.githubusercontent.com/65817230/160416188-15447fa5-c5ff-4413-b61b-02c834341d90.png)



### [Example](https://github.com/ErrorxCode/clorabase-sample)
*That's all what you need to know about the database.*
