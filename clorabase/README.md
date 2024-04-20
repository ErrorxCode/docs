# Clorabase
> Turn your GitHub into a backend



### What it is
Clorabase is a free backend alternative (BaaS) for Android apps that uses GitHub API to facilitate backend features. Clorabase is mostly made for small apps which has small backend/server/database requirements. If your app scales large or you need more database storage or bandwidth, Clorabase may not serve you. You should consider using [Firebase](https://firebase.google.com). Clorabase AIMS provides a money-free production-ready backend for building Android apps as a hobby or start-up. It is for those who don't earn money from their apps and build apps just for learning or non-profit use.

### Features
- No account needed
- Unlimited usage & quota
- Absolutely Free, No paid plans
- Serverless database
- In-app messaging
- In-app updates
- Cloud storage for apps
- Push messaging


### Implementation
#### To add SDK
In your project **build.gradle**
```
allprojects {
		repositories {
			...
			maven { url 'https://jitpack.io' }
		}
	}
```
In module **build.gradle**
```
	dependencies {
	               implementation 'com.github.Clorabase:Clorabase:Tag'
	}
```
[![](https://jitpack.io/v/Clorabase/Clorabase.svg)](https://jitpack.io/#Clorabase/Clorabase)

### Documentation
- [User guide](https://[docs.clorabase.tk](https://clorabase-docs.netlify.app/)

### When to use this instead of Firebase
See the table below to compare Clorabase and Firebase with their features.

| Usage                     | Clorabase | Firebase |
| -----------               |-----------|----------|
| Large storage (>10GB)       | Yes       | No      |
| Large database (>512MB)         | Yes        | Yes      |
| Unlimited push notification| Yes        | No      |
| In-app messaging         | Yes        | Yes      |
| In-app update             | Yes        | Absent   |
| Authentication             | Absent | Yes|

The rule of thumb is, if you’re building a small project or dedicated mobile application, and you don’t mind the high bandwidth or database storage, Clorabase is a great place to start. If you’re looking for a more general-purpose data solution, value performance at scale and advanced querying, Firebase is going to serve your needs best.

#### Example project
[Clorabase start-up]()

## BETA TESTING
**This is currently in beta testing and does not represent final quality. You may find bugs, crashes or other issues. Please report it to us.**
To participate in beta testing, email us at [participate@itsrahil.me]() or DM [@x0.rahil](https://www.instagram.com/x0.rahil/) on Instagram.
We will put your name in beta contributors and testers.

### Console
You can download the console from the assets of the latest release.
