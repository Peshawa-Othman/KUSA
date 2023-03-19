<template>
  <!-- <h2 id="logo_name">KUSA</h2> -->
  <body>
    <router-link :to="{ name: 'Home' }">
      <button style="--clr: #39ff14">
        <span><font-awesome-icon icon="fa-solid fa-home" /></span><i></i>
      </button>
    </router-link>
    <router-link :to="{ name: 'Microphone' }">
      <button style="--clr: #ff44cc">
        <span><font-awesome-icon icon="fa-solid fa-microphone" /></span><i></i>
      </button>
    </router-link>
    <router-link :to="{ name: 'Video' }">
      <button style="--clr: #0ff0fc">
        <span><font-awesome-icon icon="fa-solid fa-video" /></span><i></i>
      </button>
    </router-link>
    <router-link :to="{ name: 'User' }">
      <button style="--clr: #8a2be2">
        <span><font-awesome-icon icon="fa-solid fa-user" /></span><i></i>
      </button>
    </router-link>
    <router-link :to="{ name: 'Bell' }">
      <button style="--clr: #ff1493">
        <span><font-awesome-icon icon="fa-solid fa-bell" /></span><i></i>
      </button>
    </router-link>
  </body>
</template>

<style scoped lang="scss">
#logo_name {
  font-size: 24px;
  display: block;
  position: relative;
  float: left;
  cursor: pointer;
  transition: 0.5s;
}
#logo_name:hover {
  color: rgb(195, 255, 55);
  animation: moves 3s infinite;
}

@keyframes moves {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
// @media (max-width: 709px) {

// }
// ////////////////////////////////////@at-root
button {
  margin: 5px;
  cursor: pointer;
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  padding: 1rem 3rem;
  transition: 0.2s;
}

button:hover {
  letter-spacing: 0.2rem;
  padding: 1rem 3rem;
  background: var(--clr);
  color: var(--clr);
  /* box-shadow: 0 0 35px var(--clr); */
  animation: box 3s infinite;
}

button::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #272822;
}

button span {
  position: relative;
  z-index: 1;
}
button i {
  position: absolute;
  inset: 0;
  display: block;
}

button i::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  left: 80%;
  top: -2px;
  border: 2px solid var(--clr);
  background: #272822;
  transition: 0.2s;
}

button:hover i::before {
  width: 15px;
  left: 20%;
  animation: move 3s infinite;
}

button i::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  left: 20%;
  bottom: -2px;
  border: 2px solid var(--clr);
  background: #272822;
  transition: 0.2s;
}

button:hover i::after {
  width: 15px;
  left: 80%;
  animation: move 3s infinite;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes box {
  0% {
    box-shadow: #27272c;
  }
  50% {
    box-shadow: 0 0 25px var(--clr);
  }
  100% {
    box-shadow: #27272c;
  }
}

@media (max-width: 709px) {
  #logo_name {
    font-size: 20px;
  }
  button {
    margin: 3px;
    cursor: pointer;
    position: relative;
    background: #444;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    letter-spacing: 0px;
    padding: 11px 28px;
    transition: 0.2s;
  }
  button:hover {
    // letter-spacing: 2px;
    padding: 11px 28px;
    background: var(--clr);
    color: var(--clr);
    /* box-shadow: 0 0 35px var(--clr); */
    animation: box 3s infinite;
  }
}
@media (max-width: 467px) {
  #logo_name {
    font-size: 20px;
  }
  button {
    margin: 2px;
    cursor: pointer;
    position: relative;
    background: #444;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    letter-spacing: 0px;
    padding: 10px 15px;
    transition: 0.2s;
  }
  button:hover {
    // letter-spacing: 2px;
    padding: 10px 15px;
    background: var(--clr);
    color: var(--clr);
    /* box-shadow: 0 0 35px var(--clr); */
    animation: box 3s infinite;
  }
}
</style>
