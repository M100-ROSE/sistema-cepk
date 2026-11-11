import { useState } from 'react'
import { accountByEmail, type DemoAccount } from './data/accounts'
import { DashboardPage } from './pages/DashboardPage'
import { LoginPage } from './pages/LoginPage'
import { VisitorPage } from './pages/VisitorPage'

const SESSION_KEY = 'kennedy:sessao'

function loadSession(): DemoAccount | null {
  try {
    const email = localStorage.getItem(SESSION_KEY)
    return email ? accountByEmail(email) : null
  } catch {
    return null
  }
}

export default function App() {
  const [account, setAccount] = useState<DemoAccount | null>(loadSession)
  const [visiting, setVisiting] = useState(false)

  function handleAuthenticated(next: DemoAccount, remember: boolean) {
    setAccount(next)

    try {
      if (remember) {
        localStorage.setItem(SESSION_KEY, next.email)
      } else {
        localStorage.removeItem(SESSION_KEY)
      }
    } catch {
      // Armazenamento indisponível: a sessão vale apenas para esta aba.
    }
  }

  function handleLogout() {
    setAccount(null)

    try {
      localStorage.removeItem(SESSION_KEY)
    } catch {
      // Nada a limpar.
    }
  }

  if (visiting) {
    return <VisitorPage onEnter={() => setVisiting(false)} />
  }

  if (account) {
    return <DashboardPage account={account} onLogout={handleLogout} />
  }

  return (
    <LoginPage
      onAuthenticated={handleAuthenticated}
      onVisit={() => setVisiting(true)}
    />
  )
}
