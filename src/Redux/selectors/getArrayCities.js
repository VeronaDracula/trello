import { createSelector } from "@reduxjs/toolkit";

const data = (state) => state?.blog?.article?.cities || [];

export const getArrayCities = createSelector(
    [data], (data) => data
)
