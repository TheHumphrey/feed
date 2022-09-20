import { Post, Sidebar } from "../"
import { WrapperDiv } from "./style"

const data =
{
  userAvatarUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
  userName: 'Fernando Barros',
  userRole: 'Web Developer'
}

export const Wrapper = () => {
  return (
    <WrapperDiv >
      <Sidebar data={data} />
      <main>
        <Post title="text" content="teste" />
        <Post title="text" content="teste" />
      </main>
    </WrapperDiv>
  )
}