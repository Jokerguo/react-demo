import { useState } from 'react'

export const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([
    { id: 1, name: '哈哈' },
    { id: 2, name: '阿里斯顿' },
  ])

  return { tags, setTags }
}
