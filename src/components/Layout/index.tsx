import { withChildren } from "@/types";
import Footer from "@/components/Footer";

export default function Layout(props: withChildren) {
  const { children } = props
  return (
    <div className='mx-auto max-w-3xl xl:max-w-4xl px-4 sm:px-6 xl:px-0'>
      <div className='flex flex-col min-h-screen justify-between'>
        {/* Place global header here */}
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  )
}
