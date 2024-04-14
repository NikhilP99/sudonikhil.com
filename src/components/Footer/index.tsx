export default function Footer() {
  return (
    <footer className="mt-16 divide-y">
      <div></div>
      <div className="mt-2 flex flex-col-reverse items-center py-2 md:flex-row md:justify-between">
        <div className="flex space-x-1 text-sm text-muted-foreground">
          <div>Nikhil Patel</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
        <div className="flex space-x-1 text-sm text-muted-foreground">
          <div>Built with desperation</div>
        </div>
      </div>
    </footer>
  )
}
