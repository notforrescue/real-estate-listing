import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'

const rootNode = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootNode)

root.render(<App />)
