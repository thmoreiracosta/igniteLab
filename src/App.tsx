import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"

const GET_LESSONS_QUERY = gql`
  query {
    lessons { 
      id
      title
    }
  }
`

interface Lesson {
  id: string;
  title: string;
}

export function App() {
  const { data } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY)
  return (
    <div>
      <ul>
        {data?.lessons.map(lesson => {
          return <li key={lesson.id}>{lesson.title}</li>
        })}
      </ul>
    </div>
  )
}


