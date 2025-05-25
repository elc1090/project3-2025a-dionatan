"use client";

import { Box, TextField } from "@mui/material";
import { Edit } from "@refinedev/mui";
import { useForm } from "@refinedev/react-hook-form";
import React from "react";

export default function NotesEdit() {
  const {
    saveButtonProps,
    refineCore: { queryResult, formLoading },
    register,
    formState: { errors },
  } = useForm({
    refineCoreProps: {
      resource: "todos",
      meta: {
        select: "*",
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
          helperText={errors.note?.message as string} // Cast explícito para string
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