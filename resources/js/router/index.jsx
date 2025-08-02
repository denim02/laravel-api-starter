import { Navigate, Route, Routes, useSearchParams } from 'react-router-dom';
import Login from '@/pages/auth/login';
import Dashboard from '@/pages/dashboard';
// import { LoadingSpinner } from '../components/ui/loading-spinner';

const AuthenticatedLoginRedirect = () => {
    const [searchParams] = useSearchParams();
    const redirectTo = searchParams.get('redirect') || '/dashboard';
    return <Navigate to={redirectTo} replace />;
};

export const AppRouter = () => {
    // const { isAuthenticated, loading, loggingOut } = useAuth();

    // if (loading) {
    //     return (
    //         <div className="flex min-h-screen items-center justify-center">
    //             <LoadingSpinner />
    //         </div>
    //     );
    // }

    return (
        <Routes>
            {/* Public routes */}
            <Route path="/login" element={
                // isAuthenticated ? <AuthenticatedLoginRedirect /> :
                <Login />} />
            {/* <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Register />} />
            <Route path="/forgot-password" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <ForgotPassword />} />
            <Route path="/reset-password" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <ResetPassword />} /> */}

            {/* Protected routes - redirect to login when not authenticated (unless logging out) */}
            <Route
                path="/dashboard"
                element={
                    // isAuthenticated ? (
                    <Dashboard />
                    // ) : loggingOut ? (
                    //     <div></div>
                    // ) : (
                    //     <Navigate to="/login?redirect=/dashboard" replace />
                    // )
                }
            />

            {/*<Route
                path="/verify-email"
                element={isAuthenticated ? <VerifyEmail /> : loggingOut ? <div></div> : <Navigate to="/login?redirect=/verify-email" replace />}
            />
            <Route
                path="/confirm-password"
                element={
                    isAuthenticated ? <ConfirmPassword /> : loggingOut ? <div></div> : <Navigate to="/login?redirect=/confirm-password" replace />
                }
            />
            <Route
                path="/settings/profile"
                element={isAuthenticated ? <Profile /> : loggingOut ? <div></div> : <Navigate to="/login?redirect=/settings/profile" replace />}
            />
            <Route
                path="/settings/password"
                element={isAuthenticated ? <Password /> : loggingOut ? <div></div> : <Navigate to="/login?redirect=/settings/password" replace />}
            />
            <Route
                path="/settings/appearance"
                element={isAuthenticated ? <Appearance /> : loggingOut ? <div></div> : <Navigate to="/login?redirect=/settings/appearance" replace />}
            /> */}

            {/* Default redirects */}
            <Route path="/" element={
                // isAuthenticated ?
                <Navigate to="/dashboard" replace />
                // : <Dashboard />
            } />
            {/* <Route path="/settings" element={<Navigate to="/settings/profile" replace />} /> */}
        </Routes>
    );
};
