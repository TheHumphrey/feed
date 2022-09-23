import { PencilLine } from 'phosphor-react'
import { Avatar } from '..';

import {
  Aside,
  Image,
  Profile,
  Name,
  Role,
  Footer,
  Link,
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
        <Avatar src="https://github.com/TheHumphrey.png" />

        <Name>
          {userName}
        </Name>

        <Role>
          {userRole}
        </Role>
      </Profile>

      <Footer>
        <Link href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </Link>
      </Footer>

    </Aside>
  )
}