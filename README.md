# vue-fitness-progression

## Use Case Problem Solving (Define core use cases!)

`Needed additions and corrections before continuing!`

- **Add Tests:**

  - Static class methods
  - Util functions
  - Store file tests

```javascript
// limit-validators.spec.js
DATA, LIMIT=10  | isWithinTypeLimit()
------------------------------------
null            |   false
0               |   true
9               |   true
10              |   false
NaN             |   false

// various class files
DATA       | isTypeArray()  | isTypeArrayWithData()
---------------------------------------------------
null       |    false       |     false
[]         |    true        |     false
[Type]     |    true        |     true
['X']      |    false       |     false
['X', Type]|    false       |     false

DATA        | isType()
----------------------
null        | false
Type        | true
'X'         | false

```

- Need to clean up store actions as they relate to the UI components

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
- Date and timer components / functions?
- DashboardSummaryCard
- Vetur path/dir aliasing with jsconfig.json and Webpack
- Validation of bad values in class constructors at some point?
- Implement manifest.json and images for PWA (ref ZtM videos on subject)
- Create validator functions for LIMIT constants

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
