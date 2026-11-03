import { Outlet } from 'react-router-dom'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ScrollToTop } from '@/components/ScrollToTop'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-cream"
        href="#main"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Header />
      <main className="flex-1" id="main">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
