import { Button, Stack, Title } from "@mantine/core";
import { useCallback } from "react";
import { supabaseClient } from "../supabaseClient";
import { useNavigate } from "react-router";

export const Settings = () => {
  const navigate = useNavigate();
  const onSignout = useCallback(async () => {
    try {
      await supabaseClient.auth.signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  }, []);

  return (
    <Stack>
      <Title>Settings</Title>
      <Button size="sm" onClick={onSignout}>
        Log Out
      </Button>
    </Stack>
  );
};
