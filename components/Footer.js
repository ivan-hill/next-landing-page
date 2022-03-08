import { Stack } from "@mui/material"

export const Footer = () => {
  return (
    <>
      <div
        className="flexRowBetween"
        style={{ paddingBottom: 40, marginTop: 40 }}
      >
        <div className="footer">{new Date().getFullYear()}. Ivan Hill | Frontend Developer</div>

        <div className="footer">
          <Stack spacing={4} direction="row">
            
          </Stack>
        </div>
      </div>
    </>
  )
}
