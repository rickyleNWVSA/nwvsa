import AppRoutes from './router/AppRoutes.jsx'

/*
 * App — the application shell.
 *
 * It stays intentionally thin: it just renders the route map. Anything that
 * should wrap EVERY page (a global layout, context providers, a footer that's
 * shared across pages) would live here, around <AppRoutes />.
 */
function App() {
  return <AppRoutes />
}

export default App
