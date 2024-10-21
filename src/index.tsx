import ReactDOM from 'react-dom/client'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './custom.scss'

const rootNode = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(rootNode)

root.render(<App />)
