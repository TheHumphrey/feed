type TProps = {
  title: string;
  content: string;
}

export const Post = ({ content, title }: TProps) => {
  return (
    <>
      <h2>{title}</h2>
      <p>{content}</p>
    </>
  )
}