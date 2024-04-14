import { FOOTER_LINKS } from "@/config/links";
import FooterIcon from "./FooterIcon";

export default function Footer() {
  return (
    <footer className="mt-10 sm:mt-16 divide-y">
      <div></div>
      <div className="mt-2 flex flex-col-reverse items-center py-2 md:flex-row md:justify-between">
        <div className="flex space-x-1 text-sm text-muted-foreground">
          <div>Nikhil Patel</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="flex flex-row items-center text-sm space-x-4 py-2">
          {FOOTER_LINKS.map((link, i) => <FooterIcon href={link.href} Icon={link.icon} key={i} />)}
        </div>
      </div>
    </footer>
  )
}
