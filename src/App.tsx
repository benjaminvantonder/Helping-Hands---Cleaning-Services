import { MotionConfig } from 'motion/react'
import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'
import { Layout } from '@/components/Layout'

const Home = lazy(() => import('@/pages/Home'))
const Services = lazy(() => import('@/pages/Services'))
const Staffing = lazy(() => import('@/pages/Staffing'))
const About = lazy(() => import('@/pages/About'))
const Contact = lazy(() => import('@/pages/Contact'))
const Privacy = lazy(() => import('@/pages/Privacy'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function RouteFallback() {
  return (
    <div className="grid min-h-[70svh] place-items-center bg-cream">
      <span className="sr-only">Loading page</span>
      <span className="size-9 animate-spin rounded-full border-2 border-forest/15 border-t-forest" />
    </div>
  )
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route element={<Home />} index />
              <Route element={<Services />} path="services" />
              <Route element={<Staffing />} path="staffing" />
              <Route element={<About />} path="about" />
              <Route element={<Contact />} path="contact" />
              <Route element={<Privacy />} path="privacy" />
              <Route
                element={<Navigate replace to="/contact#quote" />}
                path="quote"
              />
              <Route
                element={<Navigate replace to="/staffing#apply" />}
                path="careers"
              />
              <Route element={<NotFound />} path="*" />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </MotionConfig>
  )
}
