import Logo from "./Logo"


export default function Header() {
  return (
    <header className="h-16 shrink-0 bg-white flex flex-row items-center justify-center shadow-md">
      <Logo />
    </header>
  )
}