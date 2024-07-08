import { CategoryKey } from '../types'
import { Categories } from './constants'

export const getImageByPath = (path: string): string | null => {
  const invalidPath = path.replace('%20', ' ')
  for (const key in Categories) {
    if (Categories[key as CategoryKey].path === invalidPath) {
      return Categories[key as CategoryKey].image
    }
  }
  return 'defautl image'
}
