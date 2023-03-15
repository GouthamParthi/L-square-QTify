import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
function TabsWithIndicator({ genres, handleFilter }) {
  const [value, setValue] = React.useState("all");

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    handleFilter(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="var(--color-white)"
        TabIndicatorProps={{
          style: {
            backgroundColor: "var(--color-primary)",
          },
        }}
        aria-label="secondary tabs example"
      >
        <Tab value="all" label="All" />
        {genres?.map((genre) => {
          return <Tab value={genre.key} label={genre.label} />;
        })}{" "}
      </Tabs>
    </Box>
  );
}

export default TabsWithIndicator;
