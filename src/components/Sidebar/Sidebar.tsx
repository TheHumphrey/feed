import {
  Aside,
  Image,
  Profile,
  Name,
  Role,
  Footer,
  Link
} from "./style"

type TProps = {
  data: {
    userAvatarUrl: string;
    userName: string;
    userRole: string;
  }
}

export const Sidebar = ({ data }: TProps) => {
  const { userAvatarUrl, userName, userRole } = data
  return (
    <Aside>
      <Image src={userAvatarUrl} />
      <Profile>
        <Name>
          {userName}
        </Name>

        <Role>
          {userRole}
        </Role>
      </Profile>

      <Footer>
        <Link href="#">Editar seu perfil</Link>
      </Footer>

    </Aside>
  )
}