import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { initializeTheme } from './hooks/use-appearance';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router';

initializeTheme();

const container = document.getElementById('app');
if (!container) {
    throw new Error('Root container not found');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        {/* <AuthProvider> */}
        <AppRouter />
        {/* </AuthProvider> */}
    </BrowserRouter>
);
