import { FormEvent, useState } from "react";
import { Button, Stack, styled, TextField } from "@mui/material";
import { useHistory } from "react-router";
import { useLoginMutation } from "../client";
import { ErrorMessage } from "../components/ErrorMessage";
import { router } from "../router";
import { LoadingPage } from "../components/LoadingPage";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error, isLoading }] = useLoginMutation();
  const history = useHistory();

  async function submit(e: FormEvent) {
    e.preventDefault();
    const result = await login({ username, password });
    if ("data" in result) {
      history.push(router.admin().$);
    }
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Form onSubmit={submit}>
      <Stack spacing={2}>
        <TextField
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Sign in</Button>
        <ErrorMessage error={error} sx={{ textAlign: "center" }} />
      </Stack>
    </Form>
  );
}

const Form = styled("form")`
  display: block;
  margin: 0 auto;
  width: 375px;
  position: relative;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    top: 20%;
  }
`;
