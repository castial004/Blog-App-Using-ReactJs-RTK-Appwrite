import { useEffect, useState } from "react"
import configService from "../Appwrite/Config"
import { useNavigate, useParams } from "react-router-dom"
import { Container, PostForm } from "../Components/index"

export default function Editpost() {
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const { slug } = useParams()

  useEffect(() => {
    if (slug) {
      configService.getPost(slug).then((post) => {
        if (post) setPost(post)
      })
    } else {
      navigate('/')
    }
  }, [slug, navigate])

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null
}

