import { Button, Stack } from "@mui/material"

import React from "react"
import { useResponsive } from "../hooks/useResponsive"

export const Navbar = () => {
  const { screenType } = useResponsive()
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 40,
          marginBottom: 40,
        }}
      >
        <div
          style={{ fontFamily: "Helvetica", fontWeight: "bold", fontSize: 24 }}
        >
          Ivan Hill | Junior Frontend Developer
        </div>
      </div>
    </>
  )
}
