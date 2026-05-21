import Echo from "laravel-echo";
import Pusher from "pusher-js";

window.Pusher = Pusher;

const echo = new Echo({
  broadcaster: "reverb",

  key: "local",

  wsHost: "babvipdevelopers.com",

  wsPort: 443,
  wssPort: 443,

  forceTLS: true,

  enabledTransports: ["ws", "wss"],

  disableStats: true,
});

window.echo = echo;

export default echo;

// const echo = new Echo({
//   broadcaster: "reverb",

//   key: "yc5yhvxfrdjojufhjxdw",

//   wsHost: "babvipdevelopers.com",

//   wsPort: 8080,

//   wssPort: 443,

//   forceTLS: true,

//   enabledTransports: ["ws", "wss"],

//   disableStats: true,
// });

// window.echo = echo;

// export default echo;
