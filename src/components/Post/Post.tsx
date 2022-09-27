import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import {
  PostContainer,
  PostHeader,
  ProfileAuthorContainer,
  ProfileAuthorInfoContainer,
  AuthorName,
  AuthorRole,
  PublishedTime,
  ContentText,
  PostContent,
  ContentTextLink,
  CommentForm,
  CommentStrong,
  CommentTextArea,
  CommentButton,
  Footer,
  CommentListContainer
} from './style'

import {
  Avatar,
  Comment
} from '../'
import { TPost } from '../../App'
import { useState } from 'react'

type TProps = {
  data: TPost
}

export const Post = ({ data }: TProps) => {
  const [comments, setComments] = useState(['Post muito bacana'])
  const [newCommentText, setNewCommentText] = useState('')

  const {
    author,
    content,
    publishedAt
  } = data

  const {
    avatarUrl,
    name,
    role
  } = author

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  const handleCreateNewComment = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  return (
    <PostContainer>
      <PostHeader>
        <ProfileAuthorContainer>
          <Avatar src={avatarUrl} />

          <ProfileAuthorInfoContainer>
            <AuthorName>{name}</AuthorName>
            <AuthorRole>{role}</AuthorRole>
          </ProfileAuthorInfoContainer>
        </ProfileAuthorContainer>

        <PublishedTime
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </PublishedTime>
      </PostHeader>

      <PostContent>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <ContentText>{line.content}</ContentText>
          } else if (line.type === 'link') {
            return <ContentTextLink href="#">{line.content}</ContentTextLink>
          }
        })}
      </PostContent>

      <CommentForm onSubmit={handleCreateNewComment}>
        <CommentStrong>Deixe seu feedback</CommentStrong>

        <CommentTextArea
          name="comment"
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
        />

        <Footer>
          <CommentButton type="submit" >
            Publicar
          </CommentButton>
        </Footer>

      </CommentForm>

      <CommentListContainer>
        {
          comments.map(comment => (<Comment content={comment} />))
        }
      </CommentListContainer>

    </PostContainer>
  )
}