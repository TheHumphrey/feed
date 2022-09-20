import {
  PostContainer,
  PostHeader,
  ProfileAuthorContainer,
  AuthorAvatar,
  ProfileAuthorInfoContainer,
  AuthorName,
  AuthorRole,
  PublishedTime
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
        </ProfileAuthorContainer>

        <ProfileAuthorInfoContainer>
          <AuthorName>Fernando Barros</AuthorName>
          <AuthorRole>Web Developer</AuthorRole>
        </ProfileAuthorInfoContainer>

        <PublishedTime
          title="11 de julho as 09:15"
          dateTime="2022-07-11 09:15:30"
        >
          Publicado há 1h
        </PublishedTime>
      </PostHeader>

    </PostContainer>
  )
}