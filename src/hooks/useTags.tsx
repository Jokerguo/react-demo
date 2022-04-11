import { createId } from 'lib/createId'
import { useUpdate } from 'lib/useUpdate'
import { useEffect, useState } from 'react'

export const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([])

  useEffect(() => {
    const localTags = JSON.parse(localStorage.getItem('tags') || '[]')
    setTags(
      localTags.length === 0
        ? [
            { id: createId(), name: '衣服' },
            { id: createId(), name: '吃火锅' },
            { id: createId(), name: '租房' },
          ]
        : localTags
    )
  }, [])
  useUpdate(() => {
    localStorage.setItem('tags', JSON.stringify(tags))
  }, [tags])
  const findTag = (id: number) => tags.filter((t) => t.id === id)[0]
  const updateTag = (id: number, newTagName: string) => {
    setTags(tags.map((t) => (t.id === id ? { id, name: newTagName } : t)))
  }
  const delTag = (id: number) => {
    setTags(tags.filter((t) => t.id !== id))
  }
  const addTag = () => {
    const tagName = window.prompt('请输入标签')
    if (tagName) {
      setTags([...tags, { id: createId(), name: tagName }])
    }
  }
  return { tags, setTags, findTag, updateTag, delTag, addTag }
}
