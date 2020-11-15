export const UNIT_PREF = Object.freeze({
  imperial: 'Imperial',
  metric: 'Metric',
})

export const UNIT_CONVERT = Object.freeze({
  kmToMi: 0.62137119,
  miToKm: 1.609344,
  lbsToKg: 0.45359237,
  kgToLbs: 2.20462262185,
  cmToIn: null,
  inToCm: null,
})

export const REGEX = Object.freeze({})

export const LIMIT = Object.freeze({
  maxExercises: 5000,
  maxWorkouts: 500,
  maxWorkoutExercises: 100,
  maxExerciseSets: 100,
  nameLength: 50,
  descriptionLength: 300,
  noteLength: 300,
  planLength: 30,
})

export const INPUT_TYPE = Object.freeze({
  confirmation: 'Confirmation',
  sets: 'Sets',
  weight: 'Weight',
  reps: 'Reps',
  duration: 'Duration',
  distance: 'Distance',
})

export const ICON = Object.freeze({
  none: '',
  weight: 'fitness_center',
  reps: 'replay',
  duration: 'history',
  distance: 'place',
  sets: 'list',
})

const layout = 'Layout'

export const LAYOUT = Object.freeze({
  default: 'Default' + layout,
  workout: 'Workout' + layout,
})

const view = 'View'

export const VIEW = Object.freeze({
  test: 'Test' + view,
  notFound: 'NotFound' + view,
  dashboard: 'Dashboard' + view,
  activeWorkout: 'ActiveWorkout' + view,
})

export const COMPONENT = Object.freeze({
  app: 'App',
  defaultAppBar: 'DefaultAppBar',
  workoutAppBar: 'WorkoutAppBar',
  dashboardRecommendations: 'DashboardRecommendations',
  dashboardWorkouts: 'DashboardWorkouts',
  dashboardDefaultsCard: 'DashboardDefaultsCard',
  dashboardWorkoutCard: 'DashboardWorkoutCard',
  DashboardResumeCard: 'DashboardResumeCard',
  staticTimer: 'StaticTimer',
})
