import { createSelector } from "@reduxjs/toolkit";

const data = (state) => state?.blog?.tasks || [];

export const getArrayTasks = createSelector(
    [data], (data) => data
)
