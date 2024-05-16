import Link from "next/link"
import { IconType } from "react-icons"
import { Route } from "next/types"

type FooterLinkProps = {
  href: Route | URL 
  Icon: IconType,
  key?: any
}
const FooterLink = (props: FooterLinkProps) => {
  const { href, Icon } = props
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
      <Icon size={16} />
    </Link>
  )
}

export default FooterLink