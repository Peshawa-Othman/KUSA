<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  />
  <div id="div_post"></div>
  <div class="container3">
    <div class="wrapper">
      <section class="post">
        <header>Create video room</header>
        <form action="#">
          <textarea
            maxlength="30"
            placeholder="What's your title ?"
            spellcheck="false"
            required
          ></textarea>
          <button>Create room</button>
        </form>
        <button @click="video_room_close" id="coloce_button">Close</button>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    function video_room_close() {
      document.querySelector(".container3").style.display = "none";
      document.querySelector("#div_post").style.display = "none";
    }
    return { video_room_close };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");
.container3 {
  display: none;
  position: fixed;
  z-index: 5;
  left: 50%;
  transform: translate(-50%, 0px);
  width: 335px;
  height: 350px;
  overflow: hidden;
  background: rgb(16, 22, 28);
  border-radius: 10px;
  transition: height 0.2s ease;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px rgb(255 255 255 / 44%);
}
.container3.active {
  height: 590px;
}
.container3 .wrapper {
  width: 1000px;
  display: flex;
}
.container3 .wrapper section {
  width: 335px;
  background: rgb(16, 22, 28);
}
.container3 img {
  cursor: pointer;
}
.container3 .post {
  transition: margin-left 0.18s ease;
}
.container3.active .post {
  margin-left: -500px;
}
.post header {
  font-size: 22px;
  font-weight: 600;
  padding: 17px 0;
  text-align: center;
  border-bottom: 1px solid #bfbfbf;
}
.post form {
  margin: 20px 25px;
}
.post form .content,
.audience .list li .column {
  display: flex;
  align-items: center;
}
.post form .content img {
  cursor: default;
  max-width: 52px;
}
.post form .content .details {
  margin: -3px 0 0 12px;
}
form .content .details p {
  font-size: 17px;
  font-weight: 500;
}
.content .details .privacy {
  display: flex;
  height: 25px;
  cursor: pointer;
  padding: 0 10px;
  font-size: 11px;
  margin-top: 3px;
  border-radius: 5px;
  align-items: center;
  max-width: 98px;
  background: rgb(16, 22, 28);
  justify-content: space-between;
}
.details .privacy span {
  font-size: 13px;
  margin-top: 1px;
  font-weight: 500;
}
.details .privacy i:last-child {
  font-size: 13px;
  margin-left: 1px;
}
form :where(textarea, button) {
  width: 100%;
  outline: none;
  border: none;
}
form textarea {
  background: rgb(16, 22, 28);
  color: #bfbfbf;
  resize: none;
  font-size: 18px;
  margin-top: 30px;
  min-height: 100px;
}
form textarea::placeholder {
  color: #858585;
}
form textarea:focus::placeholder {
  color: #b3b3b3;
}
form :where(.theme-emoji, .options) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.theme-emoji img:last-child {
  max-width: 24px;
}
form .options {
  height: 57px;
  margin: 15px 0;
  padding: 0 15px;
  border-radius: 7px;
  border: 1px solid #b9b9b9;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}
form .options :where(.list, li),
.audience :where(.arrow-back, .icon, li .radio) {
  display: flex;
  align-items: center;
  justify-content: center;
}
form .options p {
  color: #595959;
  font-size: 15px;
  font-weight: 500;
  cursor: default;
}
form .options .list {
  list-style: none;
}
.options .list li {
  height: 42px;
  width: 42px;
  margin: 0 -1px;
  cursor: pointer;
  border-radius: 50%;
}
.options .list li:hover {
  background: #6c90ff;
}
.options .list li img {
  width: 23px;
}
form button {
  height: 42px;
  color: #fff;
  margin-top: 8px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  color: #bcc0c4;
  cursor: no-drop;
  border-radius: 7px;
  background: #e2e5e9;
  transition: all 0.3s ease;
}
#coloce_button {
  width: -webkit-fill-available;
  height: 39px;
  margin: 67px;
  outline: 0;
  border: 0;
  color: #fff;
  margin-top: -2px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background: red;
  border-radius: 7px;
  transition: all 0.3s ease;
}
#coloce_button:hover {
  position: relative;
  bottom: 3px;
  background: rgb(40, 57, 151);
  color: #9aff00;
}
form textarea:valid ~ button {
  color: #fff;
  cursor: pointer;
  background: #4267b2;
}
form textarea:valid ~ button:hover {
  background: #4267b2;
}
.container .audience {
  opacity: 0;
  transition: opacity 0.12s ease;
}
.container.active .audience {
  opacity: 1;
}
.audience header {
  padding: 17px 0;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #bfbfbf;
}
.audience header .arrow-back {
  position: absolute;
  left: 25px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  font-size: 15px;
  color: #747474;
  border-radius: 50%;
  background: #e4e6eb;
}
.audience header p {
  font-size: 22px;
  font-weight: 600;
}
.audience .content {
  margin: 20px 25px 0;
}
.audience .content p {
  font-size: 17px;
  font-weight: 500;
}
.audience .content span {
  font-size: 14px;
  color: #65676b;
}
.audience .list {
  margin: 15px 16px 20px;
  list-style: none;
}
.audience .list li {
  display: flex;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 12px 10px;
  border-radius: 7px;
  align-items: center;
  justify-content: space-between;
}
.list li.active,
.audience .list li.active:hover {
  background: #e5f1ff;
}
.audience .list li:hover {
  background: #f0f1f4;
}
.audience .list li .column .icon {
  height: 50px;
  width: 50px;
  color: #333;
  font-size: 23px;
  border-radius: 50%;
  background: #e4e6eb;
}
.audience .list li.active .column .icon {
  background: #cce4ff;
}
.audience .list li .column .details {
  margin-left: 15px;
}
.list li .column .details p {
  font-weight: 500;
}
.list li .column .details span {
  font-size: 14px;
  color: #65676b;
}
.list li .radio {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  position: relative;
  border: 1px solid #707070;
}
.list li.active .radio {
  border: 2px solid #4267b2;
}
.list li .radio::before {
  content: "";
  width: 12px;
  height: 12px;
  border-radius: inherit;
}
.list li.active .radio::before {
  background: #4267b2;
}

#div_post {
  display: none;
  position: fixed;
  width: 100%;
  top: 0px;
  margin: 0px;
  height: 100%;
  background: #00000094;
  z-index: 4;
}
@media (max-width: 465px) {
  .container3 {
    display: none;
    position: fixed;
    z-index: 5;
    left: 50%;
    transform: translate(-50%, 0px);
    width: 300px;
    height: 350px;
    overflow: hidden;
    background: rgb(16, 22, 28);
    border-radius: 10px;
    transition: height 0.2s ease;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.3), 0 0 10px rgb(255 255 255 / 44%);
  }
  .container3 .wrapper section {
    width: 300px;
    background: rgb(16, 22, 28);
  }
}
</style>
