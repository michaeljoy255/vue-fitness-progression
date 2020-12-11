import _Id from './_Id.js'

export default class _Record extends _Id {
  constructor({ id, createdAt = new Date(), note = '' } = {}) {
    super({ id })
    this.createdAt = createdAt
    this.note = note
  }

  static findByDate(items, date) {
    return items.find((i) => i.createdAt === date)
  }

  static findByNewest(items) {
    return items[0] // WIP
  }

  static findByOldest(items) {
    return items[0] // WIP
  }

  static findBetweenDates(items, date1, date2) {
    console.log(date1, date2)
    return items[0] // WIP
  }

  static filterByNoteKeyword(items, keyword) {
    return items.filter((i) =>
      i.note.toLowerCase().includes(keyword.toLowerCase())
    )
  }
}
