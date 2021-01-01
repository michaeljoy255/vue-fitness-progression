# vue-fitness-progression

<https://michaeljoy255.github.io/vue-fitness-progression/>

---

## Core Tasks for MVP

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

## Database (Firebase, IndexedDB, Local Storage, etc.)

- exercises
- workouts
- historyExerciseRecords
- historyWorkoutRecords
- activeWorkoutRecords
- activeExerciseRecords

## App Store (Vuex, Redux, etc.)

- Combination of Database and Active Data
- Only load data into store as needed

## Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
