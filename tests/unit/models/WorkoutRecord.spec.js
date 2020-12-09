import WorkoutRecord from '../../../src/models/WorkoutRecord.js'

describe('WorkoutRecord', () => {
  it('initializes correctly', () => {
    const obj = new WorkoutRecord()
    expect(obj).toBeInstanceOf(WorkoutRecord)
    expect(typeof obj.id).toBe('string')
    expect(typeof obj.createdAt).toBe('object') // May store as string later
    expect(obj.note).toEqual('')
    expect(obj.duration).toEqual(0)
    expect(obj.workoutId).toBeNull()
  })
})
