import { Post, Sidebar } from "../"
import { WrapperDiv } from "./style"

export const Wrapper = () => {
  return (
    <WrapperDiv >
      <Sidebar />
      <main>
        <Post title="text" content="teste" />
        <Post title="text" content="teste" />
      </main>
    </WrapperDiv>
  )
}