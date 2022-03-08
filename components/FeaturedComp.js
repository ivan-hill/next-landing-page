import { Grid, IconButton } from "@mui/material"

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import Image from "next/image"
import Link from "next/link"
import { useResponsive } from "../hooks/useResponsive"

export const FeaturedComp = () => {
  const { windowHeight } = useResponsive()

  const imageUrl = "https://i.postimg.cc/RCGK1jdh/assesment.jpg";
  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          width: "100%",
          height: 500,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // backgroundColor: "red",
        }}
      >
        <div className="label">Featured Assesment</div>
        <div className="title">Rigging Kit</div>
        <div className="subtitle">for Text Connect</div>
        <div className="label" style={{ marginTop: 20, marginBottom: 20 }}>
          GitHub Repository
          <a
            href="https://github.com/ivan-hill/text-connect"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <ArrowDropDownIcon />
            </IconButton>
          </a>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        style={{ dispaly: "flex", justifyContent: "flex-end" }}
      >
        <div className="imageContainer">
          <a
            href="https://text-connection-assessment.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              alt="assessment"
              src="/assets/assesment.jpg"
              placeholder="blur"
              blurDataURL="https://i.imgur.com/EigNj6l.png"
              height={600}
              width={800}
            />{" "}
          </a>
        </div>
      </Grid>
    </Grid>
  );
}
