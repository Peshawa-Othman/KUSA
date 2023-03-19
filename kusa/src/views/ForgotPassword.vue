<template>
  <div class="continer">
    <p id="paragraf">Enter you email address</p>
    <div class="div_email">
      <input id="input_id_email" required class="input_email" type="email" />
      <h4 id="label_email" for="input_id_email">Email</h4>
    </div>
    <button style="--clr: #39ff14"><span>send</span><i></i></button>
    <router-link :to="{ name: 'Login' }">
      <button id="login" style="--clr: #ff44cc">
        <span>login</span><i></i>
      </button>
    </router-link>
    <router-link :to="{ name: 'Register' }">
      <button id="register" style="--clr: #0ff0fc">
        <span>register</span><i></i>
      </button>
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.continer {
  margin-bottom: 50px;
  margin-top: 50px;
  width: -webkit-fill-available;
  max-width: 700px;
  height: 300px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0px);
  // border: 1px solid rgb(74 105 120);
  border-radius: 2px;
  box-shadow: 0px 0px 17px 3px black;
}
#paragraf {
  color: #cfcfff;
  padding-top: 12px;
}
// /////////////////////////////////////////////@at-root
.div_email {
  margin-top: 40px;
}
.input_email {
  outline: none;
  width: 270px;
  height: 30px;
  font-size: small;
  background: #322424;
  border: 1px solid #585858;
  color: aqua;
  border-radius: 4px;
  transition: border 0.5s ease;
}
.input_email:focus {
  outline: none;
  width: 270px;
  height: 30px;
  font-size: small;
  background: #322424;
  border: 1px solid #b6b6cf;
  color: aqua;
  border-radius: 4px;
}
.div_email #label_email {
  pointer-events: none;
  user-select: none;
  position: relative;
  right: 117px;
  bottom: 40px;
  font-size: 12px;
  color: #7b7b8d;
  transition: color 0.5s ease;
  transition: bottom 0.5s ease;
}
.div_email .input_email:focus + #label_email {
  position: relative;
  right: 117px;
  bottom: 72px;
  font-size: 13px;
  color: #b6b6cf;
}
// ////////////////////////////////////////////@at-root
button {
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 1px;
  font-size: 12px;
  padding: 12px 30px;
  transition: 0.2s;
  cursor: pointer;
}

button:hover {
  letter-spacing: 2px;
  padding: 12px 30px;
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
// ////////////////////////////////////////////@at-root
#register {
  position: relative;
  top: 70px;
  float: right;
  right: 10px;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 1px;
  font-size: 12px;
  padding: 12px 30px;
  transition: 0.2s;
  cursor: pointer;
}

#register:hover {
  letter-spacing: 1px;
  padding: 12px 30px;
  background: var(--clr);
  color: var(--clr);
  /* box-shadow: 0 0 35px var(--clr); */
  animation: box 3s infinite;
}

#register::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #272822;
}

#register span {
  position: relative;
  z-index: 1;
}
#register i {
  position: absolute;
  inset: 0;
  display: block;
}

#register i::before {
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

#register:hover i::before {
  width: 15px;
  left: 20%;
  animation: move 3s infinite;
}

#register i::after {
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

#register:hover i::after {
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
// ////////////////////////////////////////////@at-root
#login {
  position: relative;
  top: 70px;
  float: left;
  left: 10px;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 1px;
  font-size: 12px;
  padding: 12px 30px;
  transition: 0.2s;
  cursor: pointer;
}

#login:hover {
  letter-spacing: 1px;
  padding: 12px 30px;
  background: var(--clr);
  color: var(--clr);
  /* box-shadow: 0 0 35px var(--clr); */
  animation: box 3s infinite;
}

#login::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #272822;
}

#login span {
  position: relative;
  z-index: 1;
}
#login i {
  position: absolute;
  inset: 0;
  display: block;
}

#login i::before {
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

#login:hover i::before {
  width: 15px;
  left: 20%;
  animation: move 3s infinite;
}

#login i::after {
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

#login:hover i::after {
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
@media (max-width: 500px) {
  #register {
    position: relative;
    top: 70px;
    float: right;
    right: 10px;
    background: #444;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    letter-spacing: 1px;
    font-size: 10px;
    padding: 11px 7px;
    transition: 0.2s;
    cursor: pointer;
  }
  #register:hover {
    letter-spacing: 1px;
    padding: 11px 7px;
    background: var(--clr);
    color: var(--clr);
    /* box-shadow: 0 0 35px var(--clr); */
    animation: box 3s infinite;
  }
  #login {
    position: relative;
    top: 70px;
    float: left;
    left: 10px;
    background: #444;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    letter-spacing: 1px;
    font-size: 11px;
    padding: 11px 7px;
    transition: 0.2s;
    cursor: pointer;
  }
  #login:hover {
    letter-spacing: 1px;
    padding: 11px 7px;
    background: var(--clr);
    color: var(--clr);
    /* box-shadow: 0 0 35px var(--clr); */
    animation: box 3s infinite;
  }
  .input_email {
    outline: none;
    width: 200px;
    height: 30px;
    font-size: small;
    background: #322424;
    border: 1px solid #585858;
    color: aqua;
    border-radius: 4px;
    transition: border 0.5s ease;
  }
  .input_email:focus {
    outline: none;
    width: 200px;
    height: 30px;
    font-size: small;
    background: #322424;
    border: 1px solid #b6b6cf;
    color: aqua;
    border-radius: 4px;
  }
  .div_email #label_email {
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    position: relative;
    right: 80px;
    bottom: 40px;
    font-size: 12px;
    color: #7b7b8d;
    transition: color 0.5s ease;
    transition: bottom 0.5s ease;
  }
  .div_email .input_email:focus + #label_email {
    position: relative;
    right: 80px;
    bottom: 72px;
    font-size: 13px;
    color: #b6b6cf;
  }
}
</style>
