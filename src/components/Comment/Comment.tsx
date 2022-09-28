import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "../Avatar/Avatar"
import {
  CommentAuthor,
  CommentAuthorAndTimeContainer,
  CommentBox,
  CommentButton,
  CommentContainer,
  CommentContent,
  CommentFooter,
  CommentHeader,
  CommentText,
  FooterButton,
  PublishedTime
} from "./style"

type TProps = {
  content: string;
  onDeleteComment(comment: string): void;
}

export const Comment = ({ content, onDeleteComment }: TProps) => {

  const handleRemoveComment = () => {
    onDeleteComment(content)
  }

  return (
    <CommentContainer>
      <Avatar src="https://github.com/TheHumphrey.png" withOutBorder />

      <CommentBox>
        <CommentContent>
          <CommentHeader>
            <CommentAuthorAndTimeContainer>
              <CommentAuthor>Fernando Barros</CommentAuthor>
              <PublishedTime
                title="11 de julho as 09:15"
                dateTime="2022-07-11 09:15:30"
              >
                Cerca de 2h atrás
              </PublishedTime>
            </CommentAuthorAndTimeContainer>

            <CommentButton title="Deletar comentário" onClick={handleRemoveComment}>
              <Trash size={24} />
            </CommentButton>
          </CommentHeader>

          <CommentText>{content}</CommentText>

        </CommentContent>

        <CommentFooter>
          <FooterButton>
            <ThumbsUp />
            Aplauder <span>20</span>
          </FooterButton>

        </CommentFooter>
      </CommentBox>

    </CommentContainer>
  )
}