import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://6765508d52b2a7619f5f2700.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(URL);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const res = await axios.post(URL, newContact);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${URL}/${id}`);
      return id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
