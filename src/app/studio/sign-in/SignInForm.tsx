"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signIn, type SignInState } from "./actions";

const initialState: SignInState = {
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="studio-auth-button" disabled={pending} type="submit">
      {pending ? "Signing in..." : "Sign in"}
    </button>
  );
}

export function SignInForm() {
  const [state, formAction] = useActionState(signIn, initialState);

  return (
    <form action={formAction} className="studio-auth-form">
      <div className="studio-field">
        <label className="studio-label" htmlFor="email">
          Email
        </label>
        <input
          autoComplete="email"
          className="studio-input"
          id="email"
          name="email"
          required
          type="email"
        />
      </div>

      <div className="studio-field">
        <label className="studio-label" htmlFor="password">
          Password
        </label>
        <input
          autoComplete="current-password"
          className="studio-input"
          id="password"
          name="password"
          required
          type="password"
        />
      </div>

      {state.error ? (
        <p aria-live="polite" className="studio-auth-error">
          {state.error}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
