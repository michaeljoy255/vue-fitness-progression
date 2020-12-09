# vue-fitness-progression

## Use Case Problem Solving (Define core use cases!)

`Needed additions and corrections before continuing!`

- **Add Tests:**

  - Static class methods
  - Certian class public methods
  - Class construction with good/bad values
  - Util functions
  - Routes file

- **Local Storage:**

  - Have a storage version constant
  - Append the constant to Local Storage access

    ```javascript
    localstorage.setItem(`exercises:${localStorageAdapterVersion}`, exercises)
    ```

`Dashboard Defaults Card`

- Show card if store is loading and data is empty

`Dashboard Resume Card`

- Show card is store active workout record is found

`Workout Cards`

- Loaded from workouts if they are found

`Active Workout Page`

- Custom nav bar (no timer right now)
- Design how exercises will appear
- Create active workout record local storage data

## Additional Tasks

- Use try..catch at component level to provide useful errors for users
- Use Luxon for dates and times
- Add custom Error classes
- Tests for classes, utils, and services (attempt components later)
- Date and timer components / functions?
- DashboardSummaryCard
- Vetur path/dir aliasing with jsconfig.json and Webpack

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
