# vue-fitness-progression

<https://michaeljoy255.github.io/vue-fitness-progression/>

---

## Core Tasks for MVP

**`Doing a final merge to main before adding a test branch for new ideas`**

1. Using currying to make generic store functions

   - Include Factory classes to return concept types and defaults

1. Renaming store modules to match new concept types

   - `exercises.js`
   - `workouts.js`
   - `active-exercise-records.js`
   - `active-workout-record.js`
   - `history-exercise-records.js`
   - `history-workout-records.js`

1. Using the store modules for most of the concept functions (like findById)???

1. ActiveWorkout - Use workout id to find workout and get exerciseIds

1. Display ActiveExercise information and inputs

   - Exercise Name, Equipment, Category
   - Exercise Inputs (heavy lifting here)

1. Save to the state and LS during every input blur most likely

1. Display previous exercise performance by each input

1. Add additional tests

   - Utils
   - Store files

## Additional Tasks

- Use try..catch at component level to provide useful errors for users
- Use Luxon for dates and times
- Add custom Error classes
- Date and timer components / functions?
- DashboardSummaryCard
- Vetur path/dir aliasing with jsconfig.json and Webpack
- Validation of bad values in class constructors at some point?

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
