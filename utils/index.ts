export function generateId(): string {
  return Date.now().toString()
}

export function getRandomIndex(length: number): number {
  return Math.floor(Math.random() * length)
}
