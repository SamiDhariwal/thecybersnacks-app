import type { Metadata } from "next";
import { SignInForm } from "./SignInForm";

export const metadata: Metadata = {
  title: "Studio Sign In | The Cyber Snacks",
};

export default function StudioSignInPage() {
  return (
    <main className="page-shell studio-auth-page">
      <section className="site-container studio-auth-shell">
        <div className="studio-auth-card">
          <div className="studio-auth-heading">
            <p className="eyebrow">Admin Studio</p>
            <h1 className="studio-title">Cyber Snacks Studio</h1>
            <p className="card-text">Sign in to continue.</p>
          </div>

          <SignInForm />
        </div>
      </section>
    </main>
  );
}
