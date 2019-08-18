function findInsertionIndex(
  index: number,
  array: Array<{ index: number }>,
  low: number = 0,
  high: number = array.length - 1
): number {
  if (!array.length) {
    return 0
  }

  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    const value = array[mid].index

    if (index < value) {
      high = mid - 1
    } else if (index > value) {
      low = mid + 1
    } else {
      return mid
    }
  }

  return low
}

function insertUtility(
  insertAtIndex: number,
  newUtility: any,
  utilities: any[]
) {
  let newUtilities

  if (insertAtIndex <= 0) {
    newUtilities = [newUtility, ...utilities]
  } else if (insertAtIndex >= utilities.length) {
    newUtilities = [...utilities, newUtility]
  } else {
    newUtilities = [
      ...utilities.slice(0, insertAtIndex),
      newUtility,
      ...utilities.slice(insertAtIndex),
    ]
  }

  return newUtilities
}

export default function createCache(initialUtilities: any = []) {
  let utilities: any = [].concat(initialUtilities)

  return {
    addUtility(utility: { id: string; index: number }) {
      if (!utilities.map((u: any) => u.id).includes(utility.id)) {
        const newIndex = findInsertionIndex(utility.index, utilities)
        utilities = insertUtility(newIndex, utility, utilities)
        return newIndex
      }

      return -1
    },
    getUtilities() {
      return utilities
    },
  }
}
