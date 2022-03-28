# In-App updates
It is common to find & fix bugs after releasing app to production. However, you need to somehow notify the user about the new update that contain bugs fixes or the new features. Through this new feature, You can push update anytime & can notify users about the new update. It is best for the apps which are not on play-store otherwise, you must consider using [Playcore library](https://developer.android.com/guide/playcore/in-app-updates)

## Key features
- In-app download
- Simple & easy SDK
- Various update modes (comming soon)

### Initializing the class
You just have to initialize the class and rest the library will take care. Its recommanded to initialize this in **Application's** or else in **LAUNCHER** activity `onCreate()`.

Use the static `init(Context,String,String)` method of class `ClorabaseInAppUpdate`.
ClorabaseInAppUpdate.init(this,TOKEN,PROJECT_ID);
```
You can get TOKEN & PROJECT_ID once you have configured in-app updates in console.

### Adding app in clorabase
For this to work, you have to first add the app in clorabase in-app updates. You can do this easily through the console by clicking the floating button. See the picture below:

![add-app-update](add-app-update.png)

### Incrementing app version
When you have published your new update, increment its version from the console. To increment version, click '+' icon & enter new version code. This code should be greater then the older one. Your app will get notified about the new update.

![increment-app](increment-app.png)



### [Example](https://github.com)
*That's all what you need to know about the in-app update*


