import { usePuterStore } from "~/lib/puter";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";

export const meta = () => [
  { title: "JobFit-AI | Auth" },
  { name: "description", content: "Log into your account" },
];

const Auth = () => {
  const { isLoading, auth } = usePuterStore();
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const next = params.get("next") || "/";

  useEffect(() => {
    if (auth.isAuthenticated && next !== location.pathname) {
      navigate(next);
    }
  }, [auth.isAuthenticated, next, navigate, location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient">
      <div className="gradient-border shadow-lg">
        <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
          <div className="flex flex-col items-center gap-2 text-center">
            <h1>Welcome</h1>
            <h2>Fuel Your Job Hunt — Log In to Continue</h2>
          </div>
          <div>
            {isLoading ? (
              <button className="auth-button animate-pulse">
                <p>Signing you in...</p>
              </button>
            ) : auth.isAuthenticated ? (
              <button className="auth-button" onClick={auth.signOut}>
                <p>Log Out</p>
              </button>
            ) : (
              <button className="auth-button" onClick={auth.signIn}>
                <p>Log In</p>
              </button>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Auth;
