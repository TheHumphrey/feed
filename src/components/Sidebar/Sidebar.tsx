import {
  Aside,
  Image,
  Profile,
  Name,
  Role,
  Footer,
  Link
} from "./style"

export const Sidebar = () => {
  return (
    <Aside>
      <Image src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <Profile>
        <Name>
          Fernando Barros
        </Name>

        <Role>
          Web Developer
        </Role>
      </Profile>

      <Footer>
        <Link href="#">Editar seu perfil</Link>
      </Footer>

    </Aside>
  )
}