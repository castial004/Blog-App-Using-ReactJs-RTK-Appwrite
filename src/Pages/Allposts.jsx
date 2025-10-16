import { useState, useEffect } from 'react'
import configService from '../Appwrite/Config'
import { Container, Postcard } from '../Components/index'

export default function Allposts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    configService.getPosts([]).then((post) => {
      if (post) setPosts(post.documents)
    })
  }, [])

  if (!posts || posts.length === 0) {
    return <div className='text-center py-8'>No posts available</div>
  }

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

