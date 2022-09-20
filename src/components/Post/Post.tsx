import {
  PostContainer,
  PostHeader,
  ProfileAuthorContainer,
  AuthorAvatar,
  ProfileAuthorInfoContainer,
  AuthorName,
  AuthorRole,
  PublishedTime,
  ContentText,
  PostContent,
  ContentTextLink
} from './style'

type TProps = {
  title: string;
  content: string;
}

export const Post = ({ content, title }: TProps) => {
  return (
    <PostContainer>
      <PostHeader>
        <ProfileAuthorContainer>
          <AuthorAvatar src="https://github.com/TheHumphrey.png" />

          <ProfileAuthorInfoContainer>
            <AuthorName>Fernando Barros</AuthorName>
            <AuthorRole>Web Developer</AuthorRole>
          </ProfileAuthorInfoContainer>
        </ProfileAuthorContainer>

        <PublishedTime
          title="11 de julho as 09:15"
          dateTime="2022-07-11 09:15:30"
        >
          Publicado há 1h
        </PublishedTime>
      </PostHeader>

      <PostContent>
        <ContentText>Fala galeraa 👋</ContentText>

        <ContentText>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</ContentText>

        <ContentText>
          👉
          {" "}
          <ContentTextLink href="#">
            jane.design/doctorcare
          </ContentTextLink>
        </ContentText>

        <ContentText>
          <ContentTextLink href="#">
            #novoprojeto
          </ContentTextLink> {" "}

          <ContentTextLink href="#">
            #nlw
          </ContentTextLink> {" "}

          <ContentTextLink href="#">
            #rocketseat
          </ContentTextLink>
        </ContentText>
      </PostContent>

    </PostContainer>
  )
}