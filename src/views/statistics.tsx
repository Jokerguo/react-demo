import Layout from 'components/Layout'
import { useRecords, RecordItem } from 'hooks/useRecords'
import { useTags } from 'hooks/useTags'
import { useState, ReactNode } from 'react'
import styled from 'styled-components'
import { Category } from './money/Category'
import day from 'dayjs'

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  > .note {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

const Statistics = () => {
  const [category, setCategory] = useState<'-' | '+'>('-')
  const { records } = useRecords()
  const { getName } = useTags()
  const hash: { [K: string]: RecordItem[] } = {} // {'2020-05-11': [item, item], '2020-05-10': [item, item], '2020-05-12': [item, item, item, item]}
  const selectedRecords = records.filter((r) => r.category === category)

  selectedRecords.map((r) => {
    const key = day(r.createdAt).format('YYYY年MM月DD日')
    if (!(key in hash)) {
      hash[key] = []
    }
    hash[key].push(r)
  })

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0
    if (a[0] > b[0]) return -1
    if (a[0] < b[0]) return 1
    return 0
  })

  return (
    <Layout>
      <Category value={category} onChange={(value) => setCategory(value)} />
      {array.map(([date, records]) => (
        <div key={category + date}>
          <Header>{date}</Header>
          <div>
            {records.map((r) => {
              return (
                <Item>
                  <div className="tags oneLine">
                    {r.tagIds
                      .map((tagId) => <span key={tagId}>{getName(tagId)}</span>)
                      .reduce(
                        (result, span, index, array) =>
                          result.concat(
                            index < array.length - 1 ? [span, '，'] : [span]
                          ),
                        [] as ReactNode[]
                      )}
                  </div>
                  {r.note && <div className="note">{r.note}</div>}
                  <div className="amount">￥{r.amount}</div>
                </Item>
              )
            })}
          </div>
        </div>
      ))}
    </Layout>
  )
}

export default Statistics
