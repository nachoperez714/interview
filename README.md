# How to run

To run the app run the following commands in the terminal on the root of the project
- npm i
- cd ios
- pod install
- cd ..
- react-native run-ios OR react-native run-android

# Design considerations

The project's structure was divided in 3 folders. Api for anything related to external services, Component for reusable visual componets, Screens to house the screens. Each service/component/screen has a folder where it has the component itself, it's hook, it's corresponding types and styles.

In App.tsx we defined the navigation container and navigation stack defining all the screens in the app. We are using @react-navigation/native.

For connection the external service we are using Axios. A consideration was made for @tanstack/react-query since it has more funtionalities but it was decided that it would have been overkill for a project this size. We are also accessing the API usin the uri prop of the native Image component.
