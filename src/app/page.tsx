import { CONTACT_ME_LINK, RESUME_LINK } from "@/config/links";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between mt-24 sm:mt-40">
      <div className="text-center space-y-4">
        <h1 className="font-extrabold text-4xl leading-9 sm:text-5xl sm:leading-10 md:text-5xl md:leading-14">
          Hi! I'm <span className="text-primary">Nikhil</span>
        </h1>
        <h2 className=" font-bold text-2xl leading-9 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          I'm a software developer
        </h2>
        <p className="text-sm leading-7 sm:text-base sm:leading-10 md:text-lg text-secondary-foreground">
          Checkout my <CustomLink link={RESUME_LINK}>Resume</CustomLink> or <CustomLink link={CONTACT_ME_LINK}>Contact me</CustomLink>
        </p>
      </div>
    </main>
  );
}

type LinkPropType = {
  link: string
  children: React.ReactNode
}

const CustomLink = (props: LinkPropType) => {
  const { link, children } = props
  return (
    <span className="text-primary">
      <Link href={link}>{children}</Link>
    </span>
  )
}