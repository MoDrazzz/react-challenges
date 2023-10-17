import { PropsWithChildren } from 'react'

const View = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid h-screen w-screen place-items-center bg-zinc-900 text-zinc-50">
      {children}
    </main>
  )
}

export default View
