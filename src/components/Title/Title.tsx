import { FC } from "react"
import "./title.scss";

interface TitleProps {
  text: string;
}

const Title:FC<TitleProps> = ({ text }) => {
  return (
    <div className="title h4">{text}</div>
  )
}

export default Title
