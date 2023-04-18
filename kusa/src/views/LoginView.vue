<template>
  <img id="login_call" src="../assets/images/call.png" alt="call" />
  <div id="login_form">
    <div class="div_email">
      <input id="input_id_email" required class="input_email" type="email" />
      <h4 id="label_email" for="input_id_email">Email</h4>
    </div>
    <div class="div_password">
      <input
        id="input_id_password"
        required
        class="input_password"
        type="password"
      />
      <h4 id="label_password" for="input_id_password">Password</h4>
      <font-awesome-icon @click="fa_eye" id="fa-eye" icon="fa-solid fa-eye" />
      <font-awesome-icon
        @click="fa_eye_slash"
        id="fa-eye-slash"
        icon="fa-solid fa-eye-slash"
      />
    </div>
  </div>
  <router-link :to="{ name: 'User' }">
    <button style="--clr: #0ff0fc"><span>Login</span><i></i></button>
  </router-link>
  <router-link :to="{ name: 'Register' }">
    <button style="--clr: #8a2be2"><span>Register</span><i></i></button>
  </router-link>
  <router-link :to="{ name: 'Forgot_password' }">
    <p id="forgot_password">
      FORGOT PASSWORD <font-awesome-icon icon="fa-solid fa-question" />
    </p>
  </router-link>
</template>

<script>
export default {
  setup() {
    function fa_eye_slash() {
      document.getElementById("fa-eye-slash").style.display = "none";
      document.getElementById("fa-eye").style.display = "block";
    }
    function fa_eye() {
      document.getElementById("fa-eye-slash").style.display = "block";
      document.getElementById("fa-eye").style.display = "none";
    }
    return { fa_eye_slash, fa_eye };
  },
};
</script>

<style scoped lang="scss">
#login_call {
  width: 190px;
}
#login_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.div_email {
  margin-bottom: 10px;
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
// ///////////////////////////////@at-root

.div_password {
  margin-bottom: 10px;
}
#fa-eye-slash {
  color: darkcyan;
  display: block;
  position: relative;
  bottom: 74px;
  left: 249px;
  cursor: pointer;
}
#fa-eye {
  color: darkcyan;
  display: none;
  position: relative;
  bottom: 74px;
  left: 249px;
  cursor: pointer;
}
.input_password {
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
.input_password:focus {
  outline: none;
  width: 270px;
  height: 30px;
  font-size: small;
  background: #322424;
  border: 1px solid #b6b6cf;
  color: aqua;
  border-radius: 4px;
}
.div_password #label_password {
  pointer-events: none;
  user-select: none;
  position: relative;
  right: 105px;
  bottom: 40px;
  font-size: 12px;
  color: #7b7b8d;
  transition: color 0.5s ease;
  transition: bottom 0.5s ease;
}
.div_password .input_password:focus + #label_password {
  position: relative;
  right: 105px;
  bottom: 70px;
  font-size: 13px;
  color: #b6b6cf;
}
// ////////////////////////////////////@at-root
button {
  margin-right: 15px;
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 0.1rem;
  font-size: 12px;
  padding: 13px 20px;
  transition: 0.2s;
  cursor: pointer;
}

button:hover {
  letter-spacing: 0.1rem;
  padding: 13px 20px;
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
#forgot_password {
  margin-top: 31px;
  cursor: pointer;
  width: fit-content;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0px);
  transition: 0.5s;
  color: chocolate;
}
#forgot_password:hover {
  color: #766dc8;
}
</style>
