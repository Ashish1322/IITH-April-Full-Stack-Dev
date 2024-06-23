import { io } from "socket.io-client";

const URL = "https://backend-deployment-6s1d.onrender.com";

const socket = io(URL, {
  autoConnect: false,
});

export default socket;
