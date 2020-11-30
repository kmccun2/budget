const mongoose = require('mongoose')
const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  first_name: {
    type: String,
  },
  last_name: {
    type: String,
  },
  pic: {
    type: String,
  },
  team: {
    type: String,
  },
  dob: {
    type: Date,
  },
  bats: {
    type: String,
  },
  throws: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pripos: {
    type: String,
  },
  secpos: {
    type: String,
  },
  level: {
    type: String,
  },
  grad_year: {
    type: String,
  },
  mound_velo: {
    type: Number,
  },
  run_and_gun: {
    type: Number,
  },
  exit_velo: {
    type: Number,
  },
  barrel_speed: {
    type: Number,
  },
  fb_spin: {
    type: Number,
  },
  cb_spin: {
    type: Number,
  },
  sl_spin: {
    type: Number,
  },
  sixty: {
    type: Number,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  body_fat: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  tbdl: {
    type: Number,
  },
  db_bench: {
    type: Number,
  },
  dw_pull_ups: {
    type: Number,
  },
  front_squat: {
    type: Number,
  },
  act: {
    type: String,
  },
  commitment: {
    type: String,
  },
  facebook: {
    type: String,
  },
  instagram: {
    type: String,
  },
  twitter: {
    type: String,
  },
  notifications: [
    {
      assessid: {
        type: String,
        ref: 'Assessment',
      },
      eventid: {
        type: String,
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      name: {
        type: String,
      },
      profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
      },
      type: {
        type: String,
      },
      text: {
        type: String,
      },
      viewed: {
        type: Boolean,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
})

module.exports = Profile = mongoose.model('Profile', profileSchema)
