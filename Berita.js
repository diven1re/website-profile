import React, { useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Grid, Box, isWidthUp, withWidth, withStyles } from "@material-ui/core";
import BeritaCard from "./BeritaCard";

const styles = (theme) => ({
  beritaContentWrapper: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      marginRight: theme.spacing(4),
    },
    maxWidth: 1280,
    width: "100%",
  },
  wrapper: {
    minHeight: "60vh",
  },
  noDecoration: {
    textDecoration: "none !important",
  },
});

function getVerticalBeritaPosts(width, beritaPosts) {
  const gridRows = [[], [], []];
  let rows;
  let xs;
  if (isWidthUp("md", width)) {
    rows = 3;
    xs = 4;
  } else if (isWidthUp("sm", width)) {
    rows = 2;
    xs = 6;
  } else {
    rows = 1;
    xs = 12;
  }
  beritaPosts.forEach((beritaPost, index) => {
    gridRows[index % rows].push(
      <Grid key={beritaPost.id} item xs={12}>
        <Box mb={3}>
          <BeritaCard
            src={beritaPost.src}
            title={beritaPost.title}
            snippet={beritaPost.snippet}
            date={beritaPost.date}
            url={beritaPost.url}
          />
        </Box>
      </Grid>
    );
  });
  return gridRows.map((element, index) => (
    <Grid key={index} item xs={xs}>
      {element}
    </Grid>
  ));
}

function Berita(props) {
  const { classes, width, beritaPosts, selectBerita } = props;

  useEffect(() => {
    selectBerita();
  }, [selectBerita]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      className={classNames(classes.wrapper, "lg-p-top")}
    >
      <div className={classes.beritaContentWrapper}>
        <Grid container spacing={5}>
          {getVerticalBeritaPosts(width, beritaPosts)}
        </Grid>
      </div>
    </Box>
  );
}

Berita.propTypes = {
  selectBerita: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
  beritaPosts: PropTypes.arrayOf(PropTypes.object),
};

export default withWidth()(withStyles(styles, { withTheme: true })(Berita));
