import { Checkbox } from '@radix-ui/react-checkbox'
import { Envelope, LockKey } from 'phosphor-react'
import { Button } from '../components/Button'
import { Heading } from '../components/Heading'
import { TextInput } from '../components/TextInput'
import { Text } from '../components/Text'
import { Logo } from '../Logo'
import { FormEvent } from 'react'
import { useState } from 'react'
import axios from 'axios'

export function SignIn() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  async function hadleSignIn(event: FormEvent) {
    event.preventDefault()

    await axios.post('/sessions', {
      email: 'dilanlopez009@gmail.com',
      password: '12345678'
    })

    setIsUserSignedIn(true)
  }

  return (
    <div className="w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />

        <Heading size="lg" className="mt-4">
          React Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          {' '}
          Faça Login e comece a usar{' '}
        </Text>
      </header>

      <form
        onSubmit={hadleSignIn}
        action=""
        className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10 "
      >
        {isUserSignedIn && <Text> Login realizado! </Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input
              type="email"
              id="email"
              placeholder="Digite seu e-mail"
            />
          </TextInput.Root>
        </label>
        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold text-gray-100">Digite sua senha:</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <LockKey />
            </TextInput.Icon>
            <TextInput.Input
              type="password"
              id="password"
              placeholder=" ********* "
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            {' '}
            Lembrar de mim por 30 dias?
          </Text>
        </label>

        <Button className="mt-4" type="submit">
          {' '}
          Entrar na plataforma{' '}
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui uma conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  )
}
