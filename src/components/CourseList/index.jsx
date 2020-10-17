import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { AppBar, Divider, Tab, Typography } from "@material-ui/core";
import { Rating, TabContext, TabList, TabPanel } from "@material-ui/lab";
import imgCourse01 from '../../assets/img/imgCourse01.png';
import Course from "../Course";

const useStyles = makeStyles(styles);

const CourseList = () => {
  const classes = useStyles();

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Divider light />
      <div className={classes.textGroup}>
        <Typography>The world's largest selection of courses</Typography>
        <Typography>
          Choose from 130,000 online video courses with new additions published
          every month
        </Typography>
      </div>

      <TabContext className={classes.tabContext} value={value}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab
              className={classes.tabItem}
              label="Web Development"
              value="1"
            />
            <Tab className={classes.tabItem} label="Design" value="2" />
            <Tab className={classes.tabItem} label="Photography" value="3" />
            <Tab className={classes.tabItem} label="Business" value="4" />
            <Tab className={classes.tabItem} label="Marketing" value="5" />
            <Tab className={classes.tabItem} label="IT & Software" value="6" />
            <Tab
              className={classes.tabItem}
              label="Personal Development"
              value="7"
            />
          </TabList>
        </AppBar>
        <TabPanel value="1">
          <div className={classes.container}>
            <div className={classes.cardGroup}>
            {/* Course */}
            <Course />
            <Course />
            <Course />
            <Course />
            <Course />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  );
};

export default CourseList;
