import {
  Button,
  Link as MuiLink,
  ListItemButton,
  MenuItem,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as RTRLink } from "react-typesafe-routes";
import { ComponentProps, forwardRef } from "react";

type RouterLinkProps = ComponentProps<typeof RTRLink>;
export type AdditionalLinkProps = Pick<RouterLinkProps, "to">;

export const LinkBase = MuiLink;

const LinkBehavior = forwardRef<HTMLAnchorElement, RouterLinkProps>(
  function Link({ to, ...props }, ref) {
    return <RouterLink ref={ref} to={to.$} {...props} role={undefined} />;
  }
);

export function Link(
  props: ComponentProps<typeof LinkBase> & AdditionalLinkProps
) {
  return <LinkBase component={LinkBehavior} {...props} />;
}

export function LinkButton(
  props: ComponentProps<typeof Button> & AdditionalLinkProps
) {
  return (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <Button component={LinkBehavior} {...(props as any)} role={undefined} />
  );
}

export function LinkListItem(
  props: ComponentProps<typeof ListItemButton> & AdditionalLinkProps
) {
  return (
    <ListItemButton
      component={LinkBehavior}
      selected={useIsActive(props.to)}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
      role={undefined}
    />
  );
}

export function LinkMenuItem(
  props: ComponentProps<typeof MenuItem> & AdditionalLinkProps
) {
  return (
    <MenuItem
      component={LinkBehavior}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      {...(props as any)}
    />
  );
}

function useIsActive(to: { $: string }) {
  const location = useLocation();
  return location.pathname.startsWith(to.$);
}
