"use client";

import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import { useSession } from "@supabase/auth-helpers-react";

export default function NotesEdit() {
  const session = useSession();

  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      resource: "todos",
      meta: {
        // Adicione o user_id ao enviar dados
        select: "*",
        headers: {
          Authorization: `Bearer ${session?.access_token}`
        }
      },
    },
  });

  return (
    <Edit isLoading={formLoading} saveButtonProps={saveButtonProps}>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
        autoComplete="off"
      >
        <TextField
          {...register("note", {
            required: "Este campo é obrigatório",
          })}
          error={!!errors.note}
          helperText={errors.note?.message as string}
          margin="normal"
          fullWidth
          InputLabelProps={{ shrink: true }}
          type="text"
          label="Descrição"
          name="note"
          multiline
          rows={4}
        />
      </Box>
    </Edit>
  );
}