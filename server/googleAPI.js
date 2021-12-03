import google from 'googleapis';

const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
    process.env.GOOGLE_API_CLIENTID,
    process.env.GOOGLE_API_CLIENTSECRET
);


oAuth2Client.setCredentials({
  refresh_token: process.env.OAUTH2PLAYGROUND_REFRESHTOKEN,
})

// creating a new calender instance.
const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })


// color ids for event
// Blue = ID: 1
// Green = ID: 2
// Purple = ID: 3
// Red = ID: 4
// Yellow = ID: 5
// Orange = ID: 6
// Turquoise = ID: 7
// Gray = ID: 8
// bold Blue = ID: 9
// bold Green = ID: 10
// bold red = ID: 11


// creating an event
// need to retrieve information about the event from a form to create an event.

// doc for calender api https://developers.google.com/calendar/api/guides/create-events

