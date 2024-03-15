"use client";
import React, { useEffect, useState } from "react";
import BackgroundBeams from "./ui/background-beams";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";

function BackgroundBeamsDemo() {
  const [show, setShow] = useState(true);
  const [slectedCat, setSelectedCat] = useState("Wedding");
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {show && (
        <div className="opacity-100 transition-opacity duration-500">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            {" "}
            hey tdm, Hope you are doing good..!
          </h1>
        </div>
      )}
      {!show && (
        <div className="max-w-2xl mx-auto">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            UPLOAD
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to Upload, the easist way for you to keep your website
            photos up-to-date. Simply select the category and select a image or
            group of images and hit the upload Button. Woollaa you are done chek
            your website now 😇.
          </p>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10"
            >
              Category
            </InputLabel>
            <Select
              className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-half relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={slectedCat}
              label="Age"
              onChange={(e) => {
                e.target.value;
                console.log(e.target.value);
              }}
            >
              <MenuItem value={"ten"} color="#ffffff">
                Ten
              </MenuItem>
              <MenuItem value={"twenty"}>Twenty</MenuItem>
              <MenuItem value={"thirty"}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <input
            type="file"
            placeholder="hi@manuarora.in"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-half relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <div>
            <button
              className="relative z-10"
              onClick={handleClick}
              // style={{ position: "absolute", backgroundColor: "red" }}
            >
              Upload
            </button>
          </div>
        </div>
      )}

      <BackgroundBeams />
    </div>
  );
}

export default BackgroundBeamsDemo;
