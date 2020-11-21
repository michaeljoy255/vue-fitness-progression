# vue-fitness-progression

## Use Case Problem Solving (Define core use cases!)

`* Loading app for the first time and then loading the defaults`

- **Storage related services/store, methods/actions**
  - Implement LOAD from storage into STORE (app initialize)
  - Implement SAVE into storage from STORE (eg. saving a workout)
  - Implement SETTING DEFAULTS with button click (store & storage)
- Track a loading state for the apps' overall state
  - Only load initial cards (defaults, resume, etc) once state is ready
- App state finishes loading
  - Display DashboardDefaultsCard if no data found in storage
  - Display Workouts if they are found
  - Display DashboardSummaryCard of key information that was loaded
    - Will be useful if no workouts are found, but exercises or other data is

## Additional Tasks

- Use Luxon for dates and times
- Add custom Error classes
- Add static "is..." instance of methods to certain classes
- Add getArray() and set(data) methods to containers
- Change `Recommendations` to something else (rename sub components)?
- Tests for classes, utils, and services (attempt components later)
- Date and timer components / functions?

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
