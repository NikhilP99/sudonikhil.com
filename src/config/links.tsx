import { Route } from "next"
import { IconType } from "react-icons"
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'

export const RESUME_LINK = "https://drive.google.com/file/d/1SVosonH9GD_nvqR_BrZFzcpHdLCK44TP/view"
export const CONTACT_ME_LINK = "mailto:nikhilpatel.indore@gmail.com"

type FooterLinkArray = {
  href: Route | URL
  icon: IconType
}[]

export const FOOTER_LINKS: FooterLinkArray = [
  {
    href: "https://github.com/NikhilP99",
    icon: FiGithub
  },
  {
    href: "https://www.linkedin.com/in/nikhilp99",
    icon: FiLinkedin
  },
  {
    href: "mailto:nikhilpatel.indore@gmail.com",
    icon: FiMail
  },
  {
    href: "https://twitter.com/sud0nikhil",
    icon: FiTwitter
  }
]
