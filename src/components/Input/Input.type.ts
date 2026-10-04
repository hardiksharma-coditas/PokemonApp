import type { ComponentProps } from "react"

export interface InputProps extends ComponentProps<"input">{
  type:string
  placeholder? : string
}