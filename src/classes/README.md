# Class Relationship Lists

## General

- ExerciseInput
- ExerciseSet
- \_Id
  - User **(postponed)**
  - \_Record
    - WorkoutRecord
    - ExerciseRecord
    - MeasurementRecord **(postponed)**
  - \_Descriptors
    - Exercise
    - Workout

## Containers

- \_IdContainer
  - ExerciseSetContainer (may not need, handle in ExerciseRecord class?)
  - \_RecordContainer
    - WorkoutRecordContainer
    - ExerciseRecordContainer
    - MeasurementRecordContainer **(postponed)**
  - \_DescriptorsContainer
    - ExerciseContainer
    - WorkoutContainer

## Other

- Response (for storage, promises, and more?)
- Storage Adapters (classes?)
- Timer
- WorkoutTimer
- StaticTime
- WorkoutSummary

## Postponed

- Distance
- Exporter
- ExporterSummary
- Height
- Importer
- StringContainer
- Weight

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

## Storage Adapters

- Use CRUD interface

```javascript
const ADAPTERS = Object.freeze({
  sessionStorage: 'Session Storage',
  localStorage: 'Local Storage',
  indexedDB: 'Indexed DB',
  firebase: 'Firebase',
})
```
