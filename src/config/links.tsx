import { Route } from "next"
import { IconType } from "react-icons"
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FiMail } from 'react-icons/fi'

export const RESUME_LINK = "https://google.com"
export const CONTACT_ME_LINK = "https://google.com"

type FooterLinkArray = {
  href: Route | URL
  icon: IconType
}[]

export const FOOTER_LINKS: FooterLinkArray = [
  {
    href: "/",
    icon: FiGithub
  },
  {
    href: "/",
    icon: FiLinkedin
  },
  {
    href: "/",
    icon: FiMail
  },
  {
    href: "/",
    icon: FiTwitter
  }
]