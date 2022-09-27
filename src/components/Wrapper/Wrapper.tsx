import { Post, Sidebar } from "../"
import { TPost } from "../../App"
import { WrapperDiv } from "./style"

const data =
{
  userAvatarUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
  userName: 'Fernando Barros',
  userRole: 'Web Developer'
}

type TProps = {
  posts: TPost[]
}

export const Wrapper = ({ posts }: TProps) => {
  return (
    <WrapperDiv >
      <Sidebar data={data} />
      <main>
        {
          posts.map(post => (<Post data={post} key={post.id} />))
        }
      </main>
    </WrapperDiv>
  )
}