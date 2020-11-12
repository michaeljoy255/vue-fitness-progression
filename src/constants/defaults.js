import { INPUT_TYPE } from './globals.js'

export const DEFAULT_CATEGORY = Object.freeze({
  arms: 'Arms',
  back: 'Back',
  biceps: 'Biceps',
  cardio: 'Cardio',
  chest: 'Chest',
  core: 'Core',
  legs: 'Legs',
  shoulders: 'Shoulders',
  triceps: 'Triceps',
  compound: 'Compound',
  misc: 'Miscellaneous',
  upperBody: 'Upper Body',
  lowerBody: 'Lower Body',
  fullBody: 'Full Body',
})

export const DEFAULT_EQUIPMENT = Object.freeze({
  none: 'None',
  barbell: 'Barbell',
  dumbbell: 'Dumbbell',
  kettlebell: 'Kettlebell',
  plate: 'Plate',
  pullupBar: 'Pull-up Bar',
  machine: 'Machine',
  cableMachine: 'Cable Machine',
  cardioMachine: 'Cardio Machine',
  weightMachine: 'Weight Machine',
  weightVest: 'Weight Vest',
  bands: 'Resistance Bands',
  chains: 'Chains',
})

export const DEFAULT_EXERCISE = Object.freeze({
  farmersWalkDumbbell: {
    name: "Farmer's Walk",
    description:
      'Brace your core. Walk with weights in each hand at your sides.',
    category: DEFAULT_CATEGORY.compound,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hint: '1-2' },
      { inputType: INPUT_TYPE.weight, hint: '30+' },
      { inputType: INPUT_TYPE.duration, hint: '1+' },
    ],
  },
  farmersWalkPlate: {
    name: "Farmer's Walk",
    description:
      'Brace your core. Walk with weights in each hand at your sides.',
    category: DEFAULT_CATEGORY.compound,
    equipment: DEFAULT_EQUIPMENT.plate,
    inputs: [
      { inputType: INPUT_TYPE.sets, hint: '1-2' },
      { inputType: INPUT_TYPE.weight, hint: '30+' },
      { inputType: INPUT_TYPE.duration, hint: '1+' },
    ],
  },
  warmup: {
    name: 'Warm-up',
    description: 'Warm up your body using any combination of cardio exercises.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.confirmation, hint: null }],
  },
  cooldown: {
    name: 'Cool-down',
    description: 'Cool down your body by doing some light cardio exercises.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.confirmation, hint: null }],
  },
  jumpingJacks: {
    name: 'Jumping Jacks',
    description:
      'Alternate jumping your legs wide to narrow and arms wide then back to your side.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '50-100' }],
  },
  mountainClimbers: {
    name: 'Mountain Climbers',
    description:
      'Alternate bringing your knees close to your chin while in plank position.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '50-100' }],
  },
  highKnees: {
    name: 'High Knees',
    description: 'Alternate bringing your knees up quickly while standing.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '50-100' }],
  },
  burpees: {
    name: 'Burpees',
    description:
      'Starting from plank, do a push-up, jump your legs forward, then jump with high knees, and return to plank position.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '10-20' }],
  },
  highArmsAlternatingKnees: {
    name: 'High Arms Alternating Knees',
    description:
      'With arms in the air, alternate one knee up to your waist as you crunch down with your arms.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '50-100' }],
  },
  highArmsAlternatingKneesDumbbell: {
    name: 'High Arms Alternating Knees',
    description:
      'With arms in the air, alternate one knee up to your waist as you crunch down with your arms.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.reps, hint: '50-100' },
      { inputType: INPUT_TYPE.weight, hint: '5+' },
    ],
  },
  treadmill: {
    name: 'Treadmill',
    description: 'Walking, jogging, running, or sprints.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.cardioMachine,
    inputs: [{ inputType: INPUT_TYPE.duration, hint: '20-60' }],
  },
  elliptical: {
    name: 'Elliptical',
    description: 'Standard elliptical machine.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.cardioMachine,
    inputs: [{ inputType: INPUT_TYPE.duration, hint: '20-60' }],
  },
  stairStepper: {
    name: 'Stair Stepper',
    description: 'Standard stair stepper machine.',
    category: DEFAULT_CATEGORY.cardio,
    equipment: DEFAULT_EQUIPMENT.cardioMachine,
    inputs: [{ inputType: INPUT_TYPE.duration, hint: '20-60' }],
  },
  straightLunges: {
    name: 'Straight Lunges',
    description: 'Standing or walking straight lunges.',
    category: DEFAULT_CATEGORY.misc,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '25-50' }],
  },
  straightLungesDumbbell: {
    name: 'Straight Lunges',
    description: 'Standing or walking straight lunges with weights.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '25-50' }],
  },
  sideLunges: {
    name: 'Side Lunges',
    description: 'Standing alternating side lunges.',
    category: DEFAULT_CATEGORY.misc,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '25-50' }],
  },
  stretching: {
    name: 'Stretching',
    description:
      'Spend a few minutes stretching muscles you have or plan to use.',
    category: DEFAULT_CATEGORY.misc,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.confirmation, hint: null }],
  },
  benchPress: {
    name: 'Bench Press',
    description: 'Brace your core. Push weight from chest to above neck.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hint: '100+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  chestPress: {
    name: 'Chest Press',
    description: 'Push weight from chest to above neck.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hint: '20+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  inclineBenchPress: {
    name: 'Incline Bench Press',
    description:
      'Brace your core. Push weight above chest while at an incline.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hint: '40+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  inclineChestPress: {
    name: 'Incline Chest Press',
    description: 'Push weight above chest while at an incline.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hint: '15+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  declineBenchPress: {
    name: 'Decline Bench Press',
    description: 'Brace your core. Push weight above chest while at a decline.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hint: '100+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  declineChestPress: {
    name: 'Decline Chest Press',
    description: 'Push weight above chest while at a decline.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hint: '20+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  chestFlyes: {
    name: 'Bench Chest Flyes',
    description:
      'Start with arms wide and slightly lower than chest and push up and touch weights together high above chest.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hint: '15+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
    plan: {
      sets: '3-5',
      weight: '15-30',
      reps: '8-12',
      duration: null,
      distance: null,
    },
  },
  diamondPushups: {
    name: 'Diamond Push-ups',
    description:
      'Place hands next to eachother under chest while in plank position and push up.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.reps, hint: '10-20' },
    ],
  },
  militaryPushups: {
    name: 'Military Push-ups',
    description:
      'Place hands under shoulders while in plank position and push up keeping the elbows next to your body.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.reps, hint: '15-25' },
    ],
  },
  standardPushups: {
    name: 'Standard Push-ups',
    description:
      'Place hands slightly outside of shoulders while in plank position and push up.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.reps, hint: '15-25' },
    ],
  },
  widePushups: {
    name: 'Wide Push-ups',
    description:
      'Place hands wide outside of shoulders while in plank position and push up.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.reps, hint: '15-25' },
    ],
  },
  pikePushups: {
    name: 'Pike Push-ups',
    description:
      'Push up and down with the arms while in downward dog position.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.reps, hint: '10-20' },
    ],
  },
  layingOverheadStraightArms: {
    name: 'Laying Overhead Straight Arms',
    description:
      'Extend weight behind head and bring back above head in arc motion while laying upper back on a bench.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '2-3' },
      { inputType: INPUT_TYPE.weight, hints: '12+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  chestSidePulls: {
    name: 'Chest Side Pulls',
    description:
      'Stand and pull weight to stomach while keeping elbow locked to your side.',
    category: DEFAULT_CATEGORY.chest,
    equipment: DEFAULT_EQUIPMENT.cableMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '2-3' },
      { inputType: INPUT_TYPE.weight, hints: '12+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  overheadPress: {
    name: 'Overhead Press',
    description: 'Press weight above head while seated or standing.',
    category: DEFAULT_CATEGORY.shoulders,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '45+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  overheadPressDumbbell: {
    name: 'Overhead Press',
    description: 'Press weight above head while seated or standing.',
    category: DEFAULT_CATEGORY.shoulders,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '20+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  diagonalArmRaises: {
    name: 'Diagonal Arm Raises',
    description: 'Raise straight arms up at an angle from your body.',
    category: DEFAULT_CATEGORY.shoulders,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '2-3' },
      { inputType: INPUT_TYPE.weight, hints: '5+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  sideArmRaises: {
    name: 'Side Arm Raises',
    description: 'Raise straight arms up from the sides of your body.',
    category: DEFAULT_CATEGORY.shoulders,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '2-3' },
      { inputType: INPUT_TYPE.weight, hints: '5+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  frontArmRaises: {
    name: 'Front Arm Raises',
    description: 'Raise straight arms up in front of your body.',
    category: DEFAULT_CATEGORY.shoulders,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '2-3' },
      { inputType: INPUT_TYPE.weight, hints: '5+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  shoulderShrugs: {
    name: 'Shoulder Shrugs',
    description:
      'Brace your core. Lift with your shoulders while standing with arms extended.',
    category: DEFAULT_CATEGORY.shoulders,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '100+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  shoulderShrugsDumbbell: {
    name: 'Shoulder Shrugs',
    description: 'Lift with your shoulders while standing with arms extended.',
    category: DEFAULT_CATEGORY.shoulders,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '30+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  tricepKickbacks: {
    name: 'Tricep Kickbacks',
    description: 'Bend at waist while standing and extend arms backward.',
    category: DEFAULT_CATEGORY.triceps,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '10+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  tricepPulldowns: {
    name: 'Tricep Pulldowns',
    description: 'Pull cables directly down and hold briefly while standing.',
    category: DEFAULT_CATEGORY.triceps,
    equipment: DEFAULT_EQUIPMENT.cableMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '20+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  tricepOverheadExt: {
    name: 'Tricep Overhead Extentions',
    description: 'Face away from cable machine and pull weight overhead.',
    category: DEFAULT_CATEGORY.triceps,
    equipment: DEFAULT_EQUIPMENT.cableMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '15+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  layingTricepExt: {
    name: 'Laying Tricep Extension',
    description:
      'Hold weight above head while laying down and bend elbows to lower weight behind head.',
    category: DEFAULT_CATEGORY.triceps,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '15+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  dips: {
    name: 'Dips',
    description: 'Hold body up by arms and lower yourself down and back up.',
    category: DEFAULT_CATEGORY.triceps,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.reps, hint: '15+' },
    ],
  },
  bentOverBackFlyes: {
    name: 'Bent Over Back Flyes',
    description:
      'Lean over with arms hanging down and pull arms up and slightly wider while bringing your shoulder blades together.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '2-4' },
      { inputType: INPUT_TYPE.weight, hints: '12+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  bentOverRows: {
    name: 'Bent Over Rows',
    description:
      'Bend over with chest above weight and arms fully extended. Pull weight up to bottom of ribcage.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '65+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  bentOverRowsDumbbell: {
    name: 'Bent Over Rows',
    description:
      'Bend over with chest above weight and arms fully extended. Pull weight up to bottom of ribcage.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '20+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  stiffLegDeadlift: {
    name: 'Stiff Leg Deadlift',
    description:
      'Brace your core. Stand slightly away from weight and lift with your back while keeping your legs nearly straight.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '100+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  stiffLegDeadliftDumbbell: {
    name: 'Stiff Leg Deadlift',
    description:
      'Lift with your back while keeping your legs nearly straight and the weights in front of your legs.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '30+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  deadlift: {
    name: 'Deadlift',
    description:
      'Brace your core. Stand slightly away from weight and lift while keeping your knees behind your toes.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '100+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  deadliftDumbbell: {
    name: 'Deadlift',
    description:
      'With weights in front of you lift while keeping your knees behind your toes.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '30+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  widePullups: {
    name: 'Wide Overhand Pull-ups',
    description: 'Wide overhand grip. Get your chin above the bar.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.pullupBar,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '0' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  chinups: {
    name: 'Chin-ups',
    description: 'Close underhand grip. Get your chin above the bar.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.pullupBar,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '0' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  hammerPullups: {
    name: 'Hammer Grip Pull-ups',
    description: 'Close hammer grip. Get your chin above the bar.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.pullupBar,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '0' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  facePulls: {
    name: 'Face Pulls',
    description: 'Pull directly towards your face.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.cableMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '15+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  tRows: {
    name: 'T-Rows',
    description:
      'Brace your core. Lift with weight in front of you with your arms and elbows higher than it. Bring the weight up to your neck.',
    category: DEFAULT_CATEGORY.back,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '45+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  overhandCurls: {
    name: 'Overhand Bicep Curls',
    description: 'Bicep curl with overhand grip.',
    category: DEFAULT_CATEGORY.biceps,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '10+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  underhandCurls: {
    name: 'Underhand Bicep Curls',
    description: 'Standard bicep curl.',
    category: DEFAULT_CATEGORY.biceps,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '15+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  hammerCurls: {
    name: 'Hammer Bicep Curls',
    description: 'Bicep curl with hammer grip.',
    category: DEFAULT_CATEGORY.biceps,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '15+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  squats: {
    name: 'Squats',
    description:
      'Brace your core. Hold weight on your upper back and squat down.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '100+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  squatsDumbbell: {
    name: 'Squats',
    description: 'Hold weights on your sides or shoulders and squat down.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '25+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  squatsAir: {
    name: 'Air Squats',
    description: 'Quick air squats.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.reps, hint: '50-100' },
    ],
  },
  legCurls: {
    name: 'Leg Curls',
    description: 'Lay stomach down on bench and curl legs up.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.weightMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '25+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  legExt: {
    name: 'Leg Extensions',
    description: 'Lay back down on bench and extend legs out. ',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.weightMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '25+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  calfRaisesCable: {
    name: 'Calf Raises',
    description:
      'Hold the weight and pull as you lift onto the balls of your feet and back down again.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.cableMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '25+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  calfRaisesDumbbell: {
    name: 'Calf Raises',
    description:
      'Hold a weight at your side or on your shoudler and lift onto the balls of your feet and back down again.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '25+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  hipThrusters: {
    name: 'Hip Thrusters',
    description:
      'Brace your core. Prop your upper back on a bench while holding the weight at your waist. Thrust upward to tabletop position.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.barbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '45+' },
      { inputType: INPUT_TYPE.reps, hint: '5-8' },
    ],
  },
  hipThrustersDumbbell: {
    name: 'Hip Thrusters',
    description:
      'Prop your upper back on a bench while holding the weight at your waist. Thrust upward to tabletop position.',
    category: DEFAULT_CATEGORY.legs,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '3-5' },
      { inputType: INPUT_TYPE.weight, hints: '30+' },
      { inputType: INPUT_TYPE.reps, hint: '8-12' },
    ],
  },
  plank: {
    name: 'Plank',
    description: 'Stand plank position.',
    category: DEFAULT_CATEGORY.core,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.duration, hints: '1+' }],
  },
  obliqueSideBend: {
    name: 'Oblique Side Bends',
    description:
      'Hold weight at your side with arms extended. Lean down and back up with the weight.',
    category: DEFAULT_CATEGORY.core,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '2-4' },
      { inputType: INPUT_TYPE.weight, hints: '30+' },
      { inputType: INPUT_TYPE.reps, hint: '20-30' },
    ],
  },
  abdominalCrunch: {
    name: 'Abdominal Crunch',
    description: 'Standard ab crunch while laying down.',
    category: DEFAULT_CATEGORY.core,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [{ inputType: INPUT_TYPE.reps, hint: '25-50' }],
  },
  abdominalCrunchCable: {
    name: 'Abdominal Crunch',
    description:
      'Kneel facing away from machine and crunch to pull the weight.',
    category: DEFAULT_CATEGORY.core,
    equipment: DEFAULT_EQUIPMENT.cableMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '30+' },
      { inputType: INPUT_TYPE.reps, hint: '20-30' },
    ],
  },
  torsoTwistCable: {
    name: 'Alternating Torso Twist',
    description:
      'Hold cable handle with both hands and twist away from machine like you are swinging a baseball bat.',
    category: DEFAULT_CATEGORY.core,
    equipment: DEFAULT_EQUIPMENT.cableMachine,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '20+' },
      { inputType: INPUT_TYPE.reps, hint: '20-30' },
    ],
  },
  russianTwist: {
    name: 'Russian Twist',
    description:
      'Sit with feet off the ground while you twist and tap the ground on each side of you.',
    category: DEFAULT_CATEGORY.core,
    equipment: DEFAULT_EQUIPMENT.none,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.reps, hint: '50-100' },
    ],
  },
  russianTwistDumbbell: {
    name: 'Russian Twist',
    description:
      'Sit with feet off the ground while you twist and tap the ground with the weight on each side of you.',
    category: DEFAULT_CATEGORY.core,
    equipment: DEFAULT_EQUIPMENT.dumbbell,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '10+' },
      { inputType: INPUT_TYPE.reps, hint: '25-50' },
    ],
  },
  russianTwistPlate: {
    name: 'Russian Twist',
    description:
      'Sit with feet off the ground while you twist and tap the ground with the weight on each side of you.',
    category: DEFAULT_CATEGORY.core,
    equipment: DEFAULT_EQUIPMENT.plate,
    inputs: [
      { inputType: INPUT_TYPE.sets, hints: '1-3' },
      { inputType: INPUT_TYPE.weight, hints: '10+' },
      { inputType: INPUT_TYPE.reps, hint: '25-50' },
    ],
  },
})
