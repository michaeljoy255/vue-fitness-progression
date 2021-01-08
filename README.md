# vue-fitness-progression

<https://michaeljoy255.github.io/vue-fitness-progression/>

---

## Core Tasks for MVP

1. Load ActiveExerciseRecords data into exercise inputs when you resume

1. Save ActiveExerciseRecords to ExerciseRecords in LS when you finish workout

1. Save ActiveWorkoutRecord to WorkoutRecrods in LS when you finish workout

1. Display date you last did a workout on Dashboard

1. Display previous exercise performance by each input

   - Functions (utils, store) to get previous record by id for an exercise

## Additional Tasks

- Stop using expansion panels for active exercises
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
- exerciseRecords
- workoutRecords
- activeWorkoutRecords
- activeExerciseRecords

## App Store (Vuex, Redux, etc.)

- Combination of Database and Active Data
- Only load data into store as needed

## Class Relationship Lists

- ExerciseInput
- ExerciseSet
- \_Entity
  - \_Record
    - WorkoutRecord
    - ExerciseRecord
  - \_Activity
    - Exercise
    - Workout

## Components that may be needed

- Response (for storage, promises, and more?)
- Storage Adapters (classes?)
- Timer
- WorkoutTimer
- StaticTime
- WorkoutSummary

## Unimplemented

- Distance
- Height
- Weight
- Exporter
- ExporterSummary
- Importer
- MeasurementRecord

## Exporter Output

```javascript
{
  exporterSummary: {
    appVersion: Number,
    exporterVersion: Number,
    createdAt: Date,
    totalCategories: Number,
    totalEquipment: Number,
    totalWorkouts: Number,
    totalWorkoutRecords: Number,
    totalExercises: Number,
    totalExerciseRecords: Number,
    totalMeasurementRecords: Number,
  },
  categories: [],
  equipment: [],
  workouts: [],
  workoutRecords: [],
  exercises: [],
  exerciseRecords: [],
  measurementRecords: [],
}
```
