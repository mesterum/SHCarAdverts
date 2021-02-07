# SHCarAdverts _[run on Expo](https://expo.io/@mihai-manole77/projects/SHCarAdverts)_

## A part of a mobile app for managing submissions of second-hand car adverts to a newspaper

This is a managed Expo app with a simple page, a _ScrollView_ with input controls and a 'Post' button that only sends to the console the gathered data. Before that, performs a validation of the data, display the errors on the form and only if there are no validation errors logs the data, mocking a raw post request, and resets the form.

Used dependencies:

- to manage the form components and validation: `formik` and `yup`
- drop down box on Android and Picker on iOS: `react-native-picker-select` which depends on `@react-native-picker/picker` and `@react-native-community/picker`
- to select a local image: `expo-image-picker`

For the color picker I made a simple modal with 9 colors to choose from. I wanted to use `react-native-color-picker` in the modal but I let it for the end considering it an easy task.

I tested the app on Android emulator and device and also on a iOS device but is working now only on Android.
