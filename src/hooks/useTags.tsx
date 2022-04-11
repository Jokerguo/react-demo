import { createId } from 'lib/createId'
import { useState } from 'react'

const defaultTags = [
  { id: createId(), name: '哈哈' },
  { id: createId(), name: '阿里斯顿' },
]

export const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags)

  const findTag = (id: number) => {
    const result = tags.filter((t) => t.id === id)
    if (result.length > 0) {
      return result[0]
    } else {
      return {
        name: '无效的标签ID',
      }
    }
  }
  return { tags, setTags, findTag }
}
