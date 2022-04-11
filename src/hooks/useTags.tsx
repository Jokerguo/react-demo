import { createId } from 'lib/createId'
import { useState } from 'react'

const defaultTags = [
  { id: createId(), name: '哈哈' },
  { id: createId(), name: '阿里斯顿' },
]

export const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags)

  const findTag = (id: number) => tags.filter((t) => t.id === id)[0]
  const updateTag = (id: number, newTagName: string) => {
    setTags(tags.map((t) => (t.id === id ? { id, name: newTagName } : t)))
  }
  const delTag = (id: number) => {
    setTags(tags.filter((t) => t.id !== id))
  }
  return { tags, setTags, findTag, updateTag, delTag }
}
