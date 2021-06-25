
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "./action";
import React, { Component }  from 'react';
import Color from "../web";




const screens = () => {
  const dispatch = useDispatch();
  const classes = styles();

  const { loading, error, data } = useSelector((state) => {
    return state.dataReducer;
  });
  const colorData = data.data;

  return (
    <div className={classes.mainContainer}>
      <Button
        className={classes.button}
        onClick={() => {
          dispatch(fetchdata());
        }}
      >
        {"Click Here"}
      </Button>
      {loading ? (
        <h2>{"Loading"}</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className={classes.smallContainer}>
          {colorData &&
            colorData.length > 0 &&
            colorData.map((color) => {
              return (
                <Color
                  key={color.id}
                  id={color.id}
                  name={color.name}
                  year={color.year}
                  color={color.color}
                  pantone_value={color.pantone_value}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default screens;