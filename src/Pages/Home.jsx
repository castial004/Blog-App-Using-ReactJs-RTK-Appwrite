import { useEffect, useState } from "react"
import configService from "../Appwrite/Config"
import { Container, Postcard } from "../Components/index"

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    configService.getPosts().then((result) => {
      if (result) setPosts(result.documents)
    })
  }, [])

  if (!posts || posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="w-full py-8 bg-gray-700">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Postcard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}


