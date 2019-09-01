interface entry {
  className: string
  id: string
  index: number
  rules: string
}

const keys = {
  GLOBAL: "global",
  KEYFRAMES: "keyframes",
  UTILITIES: "utilities",
  CSS: "css",
}

function findInsertionIndex(
  index: number,
  array: entry[],
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
  newUtility: entry,
  utilities: entry[]
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

function createRegistry(fromRegistry: any = {}) {
  const { global = [], keyframes = [], utilities = [], css = [] } = fromRegistry
  const _registry: { [key: string]: any } = {
    global,
    keyframes,
    utilities,
    css,
  }

  const _listeners: any[] = []

  function broadcast(key: any, entry: any, index?: number) {
    _listeners.forEach((l) => l(key, entry, index))
  }

  function addEntry(key: string, entry: entry): void {
    if (key === keys.UTILITIES) {
      addUtilityEntry(entry)
      return
    }

    const { id } = entry

    // See if entry already exists
    const existingEntry = _registry[key].find((u: any) => u.id === id)

    // No entry? add it in
    if (!existingEntry) {
      _registry[key].push(entry)
      broadcast(key, entry)
    }
  }

  function addUtilityEntry(entry: entry) {
    const { id, index } = entry

    // See if entry already exists by index
    const existingEntryIndex = _registry[keys.UTILITIES]
      .map((u: any) => u.index)
      .indexOf(index)

    // If there is one, check the id hash
    if (existingEntryIndex > -1) {
      const existingEntry = _registry[keys.UTILITIES][existingEntryIndex]

      if (existingEntry.id !== id) {
        // This is a different hash, assume the content has changed and update that local index
        _registry[keys.UTILITIES][existingEntryIndex] = entry
        broadcast(keys.UTILITIES, entry, existingEntryIndex)
      }
    } else {
      // We couldn't find a global index, so assume this is a new value that needs to be inserted at the right place
      const newIndex = findInsertionIndex(index, _registry[keys.UTILITIES])
      _registry[keys.UTILITIES] = insertUtility(
        newIndex,
        entry,
        _registry[keys.UTILITIES]
      )
      broadcast(keys.UTILITIES, entry, newIndex)
    }
  }

  return {
    add(key: string, entry: entry) {
      addEntry(key, entry)
    },
    addListener(cb: any) {
      _listeners.push(cb)
    },
    getRegistry() {
      return _registry
    },
  }
}

const registry = (function() {
  let instance: any

  function create() {
    if (typeof window !== "undefined") {
      console.log("Attempting to create from global...")
      return createRegistry(window.benefit)
    }
    return createRegistry()
  }

  return {
    getInstance() {
      if (!instance) {
        instance = create()
      }
      return instance
    },
  }
})()

export default registry
