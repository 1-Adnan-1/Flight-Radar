import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getFlights = createAsyncThunk("flight/getFlights", async () => {
  const params = {
    bl_lat: "34.561905",
    bl_lng: "24.799243",
    tr_lat: "43.002015",
    tr_lng: "44.608417",
    speed: "2,9999",
  };

  const res = await api.get("/flights/list-in-boundary", { params });

  const formatted = res.data.aircraft.map((i) => ({
    id: i[0],
    code: i[1],
    lat: i[2],
    lng: i[3],
    deg: i[4],
  }));

  return formatted;
});

export const getDetails = createAsyncThunk("detail/getDetails", async (id) => {
  const params = {
    flight: id,
  };

  const res = await api.get("/flights/detail", { params });
  return res.data;
});
