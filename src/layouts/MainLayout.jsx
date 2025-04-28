import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout({ children, setMeals, setError, setIsLoading }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-600">
      <Header
        setMeals={setMeals || (() => {})}
        setError={setError || (() => {})}
        setIsLoading={setIsLoading || (() => {})}
      />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

// Add PropTypes for better validation
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  setMeals: PropTypes.func,
  setError: PropTypes.func,
  setIsLoading: PropTypes.func,
}