# Mupi - API Integrated

Mupi is movie app integrated with IMDB API.

[Link Demo APK](https://drive.google.com/file/d/15gkKR84c-j68MyucpKMJkwp2Vzi7iiaW/view?usp=sharing)

## Thanks To

- [Design Source Figma](https://www.figma.com/community/file/1054431643740926668) - By Syahidina Alif
- [Design Modified](<https://www.figma.com/file/upXCn5lVTSkpzYAA0lzvBV/Movie-Mobile-App-UI-Design-(Community)?node-id=0%3A1>) - By Garry
- [Source API](https://imdb-api.com) - IMDB API

## Getting Started

Cloning this repo use SSH

```
git clone git@github.com:GarryLaly/Mupi.git
```

Cloning this repo use HTTPS:

```
git clone https://github.com/GarryLaly/Mupi.git
```

Open the directory:

```
cd Mupi
```

### Prerequisites

You need to install node.js to run npm package and install react native for run this project

https://howtonode.org/how-to-install-nodejs

https://facebook.github.io/react-native/

### Installing

First time you need to install all of package json

```
npm install or yarn install
react native link
```

Waiting until finish

## Running the tests

Running for android

```
react-native run-android
```

Running for iOS

```
react-native run-ios
```

## Deployment

To make it standalone compile without development mode. You need to run npm like this for debug standalone

```
(cd android && ./gradlew app:assembleDebug)
```

For release standalone version, but you need keystore. If you want upload to playstore

```
(cd android && ./gradlew app:assembleRelease)
```

## Contributing

Feel free for submitting pull requests to us.

## Authors

- **Garry Priambudi** - _Apps Developer_ - [GarryLaly](https://github.com/GarryLaly)

## License

This project is licensed under the MIT License
