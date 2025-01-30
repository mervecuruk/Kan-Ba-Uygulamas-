import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
    <DataProvider>
        <App />
    </DataProvider>
)
