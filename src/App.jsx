import {
  Hero,
  Navbar,
  Companies,
  Courses,
  Achievement,
  Category,
  Feedback,
  FeedbackCard,
  Footer
} from './components'
import './App.css'

export default function App () {
  return (
    <div>
      <Navbar />

      <Hero />
      <Companies />
      <Courses />
      <Achievement />
      <Category />
      <Feedback/>
      <FeedbackCard/>
      <Footer/>
    </div>
  )
}
