import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProviders from './providers/AuthProviders.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProviders>
  </StrictMode>,
)
