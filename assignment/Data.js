// import { createSlice } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { faker } from "@faker-js/faker";
import { useState } from "react"
const initialState = {
  entities: [],
  profile: {},
  loading: true,
  loading2: false,
  chats: [],
  personalchats: []
}
export const getPosts = createAsyncThunk(
  'posts/getPosts',
  async (thunkAPI) => {
    const profiles = [];
    for (let i = 0; i < 10; i++) {
      await fetch('https://randomuser.me/api/?nat=us').then(
        async (data) => {
          data = await data.json()
          const data2 = data
          const x = data2.results[0].name
          const y = data2.results[0].picture
          const l = data2.results[0].login.username
          const z = { name: x, pictute: y, uid: i }
          profiles.push(z);
        }
      )
    }
    return profiles;

  })
export const getmainpost = createAsyncThunk(
  'posts1/getPosts1',
  async (thunkAPI) => {
    var z;
    await fetch('https://randomuser.me/api/?nat=us,dk,fr,gb').then(
      async (data) => {
        data = await data.json()
        const data2 = data
        const x = data2.results[0].name
        const y = data2.results[0].picture
        const k = data2.results[0].phone
        z = { name: x, pictute: y, number: k }
      }
    )
    return z;

  })
function hello() {
  var nik = [];
  var chat = faker.lorem.sentences(20, '@');
  var chat1 = chat.split('@')
  // var dates = faker.date.betweens('2001-01-01T00:00:00.000Z', '2020-01-01T00:00:00.000Z', 20)
  // dates.sort(function(a, b){
  //   return a - b 
  //  }); 
  var x;
  console.log("dates", dates)
  let temp = []
  let sender = 1
  var i = 0
  for (i = 0; i < 20; i++) {
    var dates = faker.date.between('2001-01-01T00:00:00.000Z', '2020-01-01T00:00:00.000Z')
    // console.log(dates, "dates")
    if (i % 2 == 0) {
      sender = 0;
    }
    else {
      sender = 1
    }
    x = {
      date2: dates.toString(),
      date: dates.getDate() + '/' + dates.getMonth() + '/' + dates.getFullYear(),
      msg: chat1[i],
      time: dates.getHours() + ':' + dates.getMinutes(),
      sender1: sender,
    }
    temp.push(x);
    // console.log(x, "x")
  }
  return temp
}
export const Data = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getchats: (state) => {
      state.chats = hello()
      // console.log("chats", state.chats)
      state.chats.sort(function (a, b) {
        return new Date(a.date2) - new Date(b.date2)
      });
      // console.log(state.chats, "chats")
      let data;
      let id;
      for (let i = 0; i < 10; i++) {
        data = { id: i, chats: state.chats ,latest:state.chats[state.chats.length-1]}
        state.personalchats = [...state.personalchats, data]
      }
      // console.log(state.personalchats, "personalchats")
    },
    addtochat: (state, details) => {
      // console.log("latest:",state.chats[state.chats.length-1])
      // console.log("details.payload", details.payload)
      let k = []
      let l = []
      var m = {}
      k = state.personalchats.map((x) => {
        if (x.id == details.payload.id) {
          return { chats: [...x.chats, details.payload.toadd], id: x.id ,latest:details.payload.toadd}
        }
        return x
      })
      state.personalchats = k
      l = state.entities.filter((x) => {
        return (x.uid != details.payload.id)
      })
      l.unshift(state.entities.filter((x) => x.uid == details.payload.id)[0])
      state.entities = l;

    },
    addgroup: (state, details) => {
      var x = []
      x = state.entities
      x.unshift(details.payload)
      state.entities = x
    },
    dynamicsearch: (state, details) => {
      state.filteredDataSource = details.newdata
    },
    updatename: (state, details) => {
      state.profile.name = details.payload
    },
    updatenumber: (state, details) => {
      state.profile.number = details.payload
    },
    updatepicture: (state, details) => {
      state.profile.pictute = { large: details.payload }
    }
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.entities = [...payload]
      // console.log(state.entities, "profiles")
      state.loading = false; //reference
    },
    [getPosts.rejected]: (state) => {
      state.loading = false
    },
    [getmainpost.pending]: (state) => {
      state.loading2 = false;
    },
    [getmainpost.fulfilled]: (state, { payload }) => {
      state.profile = payload
    },

    [getmainpost.rejected]: (state) => {
      state.loading2 = false
    },
  },

})

// Action creators are generated for each case reducer function
export const { increment, getchats, addtochat, addgroup, dynamicsearch, updatename, updatenumber, updatepicture } = Data.actions

export default Data.reducer