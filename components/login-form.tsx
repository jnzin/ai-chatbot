'use client'

import { useFormState, useFormStatus } from 'react-dom'
import {googleAuthenticate } from '@/app/login/actions'
import Link from 'next/link'
import { useEffect } from 'react'
import { toast } from 'sonner'
import { IconSpinner } from './ui/icons'
import { getMessageFromCode } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import { Button } from './ui/button'
export default function LoginForm() {
  const router = useRouter()
  const [result, dispatch] = useFormState(googleAuthenticate, undefined) 

  useEffect(() => {
    console.log(result);
    
    if (result) {
      if (result.type === 'error') {
        toast.error(getMessageFromCode(result.resultCode))
      } else {
        toast.success(getMessageFromCode(result.resultCode))
        router.refresh()
      }
    }
  }, [result, router])

  return (
    <form
    action={dispatch}
      className="flex flex-col  gap-4 space-y-3"
    >
      <div className="w-full flex-1 rounded-lg border border-border bg-white px-6 pb-4 pt-8 shadow-md  md:w-96 dark:bg-zinc-950">
        <h1 className="mb-3 text-2xl font-bold">Please log in to continue.</h1>
        <Button
        className="mx-auto mb-8 items-center bg-gradient-to-r from-primary to-primary-foreground text-white w-full"
      >
        Login com Google
      </Button>
      <p className="text-center text-sm">
        Ao realizar login, você CONFIRMA que leu nossos{' '}
        <Link
          href="/termos"
          target="_blank"
          className="underline hover:text-primary"
        >
          Termos de Serviço
        </Link>{' '}
        e concorda com eles.
      </p>
      </div>

    </form>
  )
}

function LoginButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className="my-4 flex h-10 w-full flex-row items-center justify-center rounded-md bg-zinc-900 p-2 text-sm font-semibold text-zinc-100 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
      aria-disabled={pending}
    >
      {pending ? <IconSpinner /> : 'Log in'}
    </button>
  )
}
