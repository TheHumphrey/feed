import { ImgHTMLAttributes } from 'react'
import {
  ProfilePic,
  ProfilePicWithOutBorder
} from './style'

type TProps = ImgHTMLAttributes<HTMLImageElement> & {
  withOutBorder?: boolean;
}

export const Avatar = ({ src, alt, withOutBorder, ...rest }: TProps) => {
  return withOutBorder ?
    (<ProfilePicWithOutBorder src={src} alt={alt} {...rest} />) :
    (<ProfilePic src={src} alt={alt} {...rest} />)
}