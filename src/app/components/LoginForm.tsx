import { FormEvent, useState } from "react";
import { useLoginMutation } from "../client";
import { ErrorMessage } from "./ErrorMessage";

export function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error }] = useLoginMutation();

  function submit(e: FormEvent) {
    e.preventDefault();
    login({ username, password });
  }

  return (
    <form onSubmit={submit}>
      <h2>Auth</h2>
      <ErrorMessage error={error} />
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Sign in</button>
    </form>
  );
}