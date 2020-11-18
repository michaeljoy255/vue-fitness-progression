# vue-fitness-progression

## Use Case Problem Solving (Define core use cases!)

`* Loading app for the first time and then loading the defaults`

- During state initialization pull data from storage if any
- Track a loading state for the apps' overall state
  - Only load initial cards (defaults, resume, etc) once state is ready
- App state finishes loading
  - Display DashboardDefaultsCard if no data found in storage
  - Display Workouts if they are found
  - Display DashboardSummaryCard of key information that was loaded
    - Will be useful if no workouts are found, but exercises or other data is

## Additional Tasks

- Make DefaultsGenerator use static methods???
- Add custom Error classes (check Luxon project for examples)
- Add static "is..." instance of methods to certain classes
- Change `Recommendations` to something else (rename sub components)?
- Tests for classes, utils, and services (attempt components later)
- Date and timer components / functions?

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
