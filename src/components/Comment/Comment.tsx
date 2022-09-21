import { ThumbsUp, Trash } from "phosphor-react"
import {
  CommentAuthor,
  CommentAuthorAndTimeContainer,
  CommentAvatar,
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

export const Comment = () => {
  return (
    <CommentContainer>
      <CommentAvatar src="https://github.com/TheHumphrey.png" />

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

            <CommentButton title="Deletar comentário">
              <Trash size={20} />
            </CommentButton>
          </CommentHeader>

          <CommentText>Muito bom Devon, parabéns!! 👏👏</CommentText>

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