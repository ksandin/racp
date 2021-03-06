import { FormEvent, useState } from "react";
import { Stack, styled, TextField } from "@mui/material";
import { useHistory } from "react-router";
import { useRouteParams } from "react-typesafe-routes";
import { useLoginMutation } from "../state/client";
import { ErrorMessage } from "../components/ErrorMessage";
import { router } from "../router";
import { UserAccessLevel } from "../../api/services/auth/types";
import { ProgressButton } from "../components/ProgressButton";

export default function LoginPage() {
  const { destination } = useRouteParams(router.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, { error, isLoading }] = useLoginMutation();
  const history = useHistory();

  async function submit(e: FormEvent) {
    e.preventDefault();
    const result = await login({ username, password });
    if ("data" in result) {
      history.push(destination ?? defaultDestinations[result.data.user.access]);
    }
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
        <div>
          <ProgressButton isLoading={isLoading} type="submit">
            Sign in
          </ProgressButton>
        </div>
        <ErrorMessage error={error} sx={{ textAlign: "center" }} />
      </Stack>
    </Form>
  );
}

const defaultDestinations = {
  [UserAccessLevel.Admin]: router.admin().$,
  [UserAccessLevel.User]: router.home().$,
  [UserAccessLevel.Guest]: router.home().$,
};

const Form = styled("form")`
  display: block;
  margin: 0 auto;
  width: 375px;
  position: relative;
  text-align: center;
  ${({ theme }) => theme.breakpoints.up("sm")} {
    top: 20%;
  }
`;
