const names = ['Alice', 'Bob', 'Charlie', 'David', 'Frank']

export function generateId(): string {
  return Date.now().toString()
}

export function getRandomIndex(length: number): number {
  return Math.floor(Math.random() * length)
}

export function getRandomUserName(): string {
  return names[getRandomIndex(names.length)]
}
