<template>
  <add-post></add-post>
  <link
    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
    rel="stylesheet"
  />
  <img
    @click="none_person_image"
    src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
    id="zoom_person_image"
  />
  <img
    @click="none_post_image"
    src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
    id="zoom_post_image"
  />
  <p id="zoom_post_text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus
    nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero,
    possimus nostrum! consectetur adipisicing elit.
  </p>
  <div id="zoom_person_div"></div>
  <div id="show_following">
    <div class="toast" id="toast">
      <div class="toast-body"></div>
      <button @click="no_bottons" id="no">NO</button>
      <button id="yes">YES</button>
    </div>
    <div id="div_toast"></div>
    <div id="div_search">
      <font-awesome-icon
        @click="icon_close"
        id="icon_close"
        icon="fa-solid fa-xmark"
      />
      <input id="input_search" type="search" placeholder="Username" />
      <font-awesome-icon id="icon_search" icon="fa-solid fa-magnifying-glass" />
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button @click="followeds" id="followed_button">Followed</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Followed</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Followed</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Followed</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Followed</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Followed</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Followed</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
  </div>
  <!-- followers //////////////////////////////-->
  <!-- followers //////////////////////////////-->
  <!-- followers //////////////////////////////-->
  <div id="show_followers">
    <div class="toast2" id="toast2">
      <div class="toast-body2"></div>
      <button @click="no_bottons2" id="no2">NO</button>
      <button id="yes2">YES</button>
    </div>
    <div id="div_toast2"></div>
    <div id="div_search">
      <font-awesome-icon
        @click="icon_close"
        id="icon_close"
        icon="fa-solid fa-xmark"
      />
      <input id="input_search" type="search" placeholder="Username" />
      <font-awesome-icon id="icon_search" icon="fa-solid fa-magnifying-glass" />
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button @click="followers" id="followed_button">Following</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Following</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Following</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Following</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Following</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Following</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
    <div
      style="
        width: 100%;
        height: 100px;
        background: #132020;
        position: relative;
        top: -48px;
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5),
          0 0 10px rgb(255 255 255 / 39%);
      "
    >
      <img
        id="following_person_image"
        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
        alt="peshawa"
      />
      <label id="following_person_name" for="">peshawa Othman Rashid</label>
      <label id="following_person_language" for="">Language: Kurdy</label>
      <label id="following_person_location" for="">Location: Kurdistan</label>
      <button id="followed_button">Following</button>
      <!-- <hr style="background: aqua; position: relative; top: 60px" /> -->
    </div>
  </div>
  <!-- Followers /////////////////////////////////////////////////////// -->
  <!-- Followers /////////////////////////////////////////////////////// -->
  <!-- Followers /////////////////////////////////////////////////////// -->
  <body>
    <div style="margin-top: 200px; margin-bottom: 120px" class="main-content">
      <!-- Header -->
      <!-- Page content -->
      <div style="background-color: #10161c" class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div style="background: bottom" class="card card-profile shadow">
              <div class="row justify-content-center">
                <div class="col-lg-3 order-lg-2">
                  <div class="card-profile-image">
                    <a href="#">
                      <img
                        @click="zoom_person_image"
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        class="rounded-circle"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                style="background: #10161c"
                class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
              >
                <div
                  style="margin-right: 12px"
                  class="d-flex justify-content-between"
                >
                  <router-link :to="{ name: 'Edit_profile' }">
                    <a style="color: #10161c" class="btn btn-sm btn-info mr-4"
                      >edit profile</a
                    >
                  </router-link>
                  <a
                    @click="add_post"
                    style="color: wheat"
                    class="btn btn-sm btn-default float-right"
                    >add post
                  </a>
                </div>
              </div>
              <div class="card-body pt-0 pt-md-4">
                <div class="row">
                  <div class="col">
                    <div
                      class="card-profile-stats d-flex justify-content-center mt-md-6"
                    >
                      <div
                        @click="show_following"
                        class="following"
                        style="cursor: pointer"
                      >
                        <span class="description">Following</span>
                        <span style="color: aqua" class="heading">45</span>
                      </div>
                      <div>
                        <span class="heading"></span>
                        <span class="description"></span>
                      </div>
                      <div
                        @click="show_followers"
                        class="following"
                        style="cursor: pointer"
                      >
                        <span class="description">Followers</span>
                        <span style="color: aqua" class="heading">55</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col">
                    <div
                      class="card-profile-stats d-flex justify-content-center mt-md-5"
                    >
                      <div>
                        <span style="color: aqua" class="heading">6</span>
                        <span class="description">Day</span>
                      </div>
                      <div>
                        <span style="color: aqua" class="heading">1</span>
                        <span class="description">Month</span>
                      </div>
                      <div>
                        <span style="color: aqua" class="heading">2000</span>
                        <span class="description">Year</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <h3 style="color: aqua">Peshawa Othman Rashid</h3>
                  <div style="color: aqua" class="h5 font-weight-300">
                    <i class="ni location_pin mr-2"></i>@Peshawa_12345
                  </div>
                  <div style="color: aqua">
                    <i class="ni education_hat mr-2"></i>Country: Kurdistan
                  </div>
                  <div style="color: aqua">
                    <i class="ni education_hat mr-2"></i>Language: kurdy
                  </div>
                  <hr class="my-4" />
                  <p style="color: aqua">
                    Ryan — the name taken by Melbourne-raised, Brooklyn-based
                    Nick Murphy — writes, performs and records all of his own
                    music.
                  </p>
                  <!-- <a style="color: #898fb4" href="#">Show more</a> -->
                </div>
              </div>
            </div>
          </div>
          <div style="background: #10161c" class="col-xl-8 order-xl-1">
            <div style="background: #10161c" class="card bg-secondary shadow">
              <div style="background: #10161c" class="card-body">
                <form>
                  <div class="product-card">
                    <!-- <div class="badge">Hot</div> -->
                    <div class="product-tumb">
                      <img
                        @click="zoom_post_image"
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="product-details">
                      <!-- <span class="product-catagory">Women,bag</span>
                      <h4><a href="">Women leather bag</a></h4> -->
                      <div
                        style="
                          position: relative;
                          width: -webkit-fill-available;
                          height: 28px;
                          /* background: black; */
                          display: flex;
                        "
                      >
                        <img
                          id="imageperson"
                          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          alt=""
                        />
                        <p id="person_name">Peshawa Othman Rashid</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vero, possimus nostrum! Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit. Vero, possimus
                        nostrum! consectetur adipisicing elit.
                      </p>

                      <!-- <div class="product-bottom-details">
                        <div class="product-price"></div>
                        <div class="product-links">
                          <a href=""><i class="fa fa-heart"></i></a>
                          <a href=""><i class="fa fa-shopping-cart"></i></a>
                        </div>
                      </div> -->
                      <div id="div_icon1" style="margin-right: 35px">
                        <font-awesome-icon
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: left;
                            cursor: pointer;
                          "
                          icon="fa-solid fa-thumbs-up"
                        /><span
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: left;
                            bottom: 4px;
                            left: 4px;
                          "
                          >45</span
                        >
                      </div>
                      <div id="div_icon2" style="margin-left: 35px">
                        <span
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: right;
                            bottom: 4px;
                            left: 4px;
                          "
                          >55</span
                        >
                        <font-awesome-icon
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: right;
                            cursor: pointer;
                          "
                          icon="fa-solid fa-thumbs-down"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="product-card">
                    <!-- <div class="badge">Hot</div> -->
                    <div class="product-tumb">
                      <img
                        @click="zoom_post_image"
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="product-details">
                      <!-- <span class="product-catagory">Women,bag</span>
                      <h4><a href="">Women leather bag</a></h4> -->
                      <div
                        style="
                          position: relative;
                          width: -webkit-fill-available;
                          height: 28px;
                          /* background: black; */
                          display: flex;
                        "
                      >
                        <img
                          id="imageperson"
                          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          alt=""
                        />
                        <p id="person_name">Peshawa Othman Rashid</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vero, possimus nostrum!
                      </p>

                      <!-- <div class="product-bottom-details">
                        <div class="product-price"></div>
                        <div class="product-links">
                          <a href=""><i class="fa fa-heart"></i></a>
                          <a href=""><i class="fa fa-shopping-cart"></i></a>
                        </div>
                      </div> -->
                      <div id="div_icon1" style="margin-right: 35px">
                        <font-awesome-icon
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: left;
                            cursor: pointer;
                          "
                          icon="fa-solid fa-thumbs-up"
                        /><span
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: left;
                            bottom: 4px;
                            left: 4px;
                          "
                          >45</span
                        >
                      </div>
                      <div id="div_icon2" style="margin-left: 35px">
                        <span
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: right;
                            bottom: 4px;
                            left: 4px;
                          "
                          >55</span
                        >
                        <font-awesome-icon
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: right;
                            cursor: pointer;
                          "
                          icon="fa-solid fa-thumbs-down"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="product-card">
                    <!-- <div class="badge">Hot</div> -->
                    <div class="product-tumb">
                      <img
                        @click="zoom_post_image"
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="product-details">
                      <!-- <span class="product-catagory">Women,bag</span>
                      <h4><a href="">Women leather bag</a></h4> -->
                      <div
                        style="
                          position: relative;
                          width: -webkit-fill-available;
                          height: 28px;
                          /* background: black; */
                          display: flex;
                        "
                      >
                        <img
                          id="imageperson"
                          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          alt=""
                        />
                        <p id="person_name">Peshawa Othman Rashid</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vero, possimus nostrum!
                      </p>

                      <!-- <div class="product-bottom-details">
                        <div class="product-price"></div>
                        <div class="product-links">
                          <a href=""><i class="fa fa-heart"></i></a>
                          <a href=""><i class="fa fa-shopping-cart"></i></a>
                        </div>
                      </div> -->
                      <div id="div_icon1" style="margin-right: 35px">
                        <font-awesome-icon
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: left;
                            cursor: pointer;
                          "
                          icon="fa-solid fa-thumbs-up"
                        /><span
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: left;
                            bottom: 4px;
                            left: 4px;
                          "
                          >45</span
                        >
                      </div>
                      <div id="div_icon2" style="margin-left: 35px">
                        <span
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: right;
                            bottom: 4px;
                            left: 4px;
                          "
                          >55</span
                        >
                        <font-awesome-icon
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: right;
                            cursor: pointer;
                          "
                          icon="fa-solid fa-thumbs-down"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="product-card">
                    <!-- <div class="badge">Hot</div> -->
                    <div class="product-tumb">
                      <img
                        @click="zoom_post_image"
                        src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                        alt=""
                      />
                    </div>
                    <div class="product-details">
                      <!-- <span class="product-catagory">Women,bag</span>
                      <h4><a href="">Women leather bag</a></h4> -->
                      <div
                        style="
                          position: relative;
                          width: -webkit-fill-available;
                          height: 28px;
                          /* background: black; */
                          display: flex;
                        "
                      >
                        <img
                          id="imageperson"
                          src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg"
                          alt=""
                        />
                        <p id="person_name">Peshawa Othman Rashid</p>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vero, possimus nostrum!
                      </p>

                      <!-- <div class="product-bottom-details">
                        <div class="product-price"></div>
                        <div class="product-links">
                          <a href=""><i class="fa fa-heart"></i></a>
                          <a href=""><i class="fa fa-shopping-cart"></i></a>
                        </div>
                      </div> -->
                      <div id="div_icon1" style="margin-right: 35px">
                        <font-awesome-icon
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: left;
                            cursor: pointer;
                          "
                          icon="fa-solid fa-thumbs-up"
                        /><span
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: left;
                            bottom: 4px;
                            left: 4px;
                          "
                          >45</span
                        >
                      </div>
                      <div id="div_icon2" style="margin-left: 35px">
                        <span
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: right;
                            bottom: 4px;
                            left: 4px;
                          "
                          >55</span
                        >
                        <font-awesome-icon
                          style="
                            margin: 0;
                            padding: 0;
                            position: relative;
                            float: right;
                            cursor: pointer;
                          "
                          icon="fa-solid fa-thumbs-down"
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import AddPost from "../components/AddPost.vue";
export default {
  setup() {
    var toast = "";
    function zoom_person_image() {
      document.getElementById("zoom_person_image").style.display = "block";
      document.getElementById("zoom_person_div").style.display = "block";
    }
    function none_person_image() {
      document.getElementById("zoom_person_image").style.display = "none";
      document.getElementById("zoom_person_div").style.display = "none";
    }
    function zoom_post_image() {
      document.getElementById("zoom_post_image").style.display = "block";
      document.getElementById("zoom_person_div").style.display = "block";
      document.getElementById("zoom_post_text").style.display = "block";
    }
    function none_post_image() {
      document.getElementById("zoom_post_image").style.display = "none";
      document.getElementById("zoom_person_div").style.display = "none";
      document.getElementById("zoom_post_text").style.display = "none";
    }
    function show_following() {
      document.getElementById("show_following").style.display = "block";
      document.getElementById("zoom_person_div").style.display = "block";
    }
    function show_followers() {
      document.getElementById("show_followers").style.display = "block";
      document.getElementById("zoom_person_div").style.display = "block";
    }
    function icon_close() {
      document.getElementById("show_followers").style.display = "none";
      document.getElementById("show_following").style.display = "none";
      document.getElementById("zoom_person_div").style.display = "none";
    }

    function followeds() {
      toast = document.getElementById("toast");
      document.getElementById("div_toast").style.display = "block";
      toast.querySelector(".toast-body").innerHTML =
        "Are you sure of unfollowing ?";
      toast.classList.add("visible");
    }
    function no_bottons() {
      toast.classList.remove("visible");
      document.getElementById("div_toast").style.display = "none";
    }
    function followers() {
      toast = document.getElementById("toast2");
      document.getElementById("div_toast2").style.display = "block";
      toast.querySelector(".toast-body2").innerHTML =
        "Are you sure of following ?";
      toast.classList.add("visible");
    }
    function no_bottons2() {
      toast.classList.remove("visible");
      document.getElementById("div_toast2").style.display = "none";
    }
    function add_post() {
      // document.getElementById("add_post").style.display = "block";
      document.querySelector(".container").style.display = "block";
      document.querySelector("#div_post").style.display = "block";
    }
    return {
      zoom_person_image,
      none_person_image,
      zoom_post_image,
      none_post_image,
      show_following,
      icon_close,
      followeds,
      no_bottons,
      show_followers,
      followers,
      no_bottons2,
      add_post,
    };
  },
  components: { AddPost },
};
</script>

<style scoped lang="scss">
#input_search {
  position: relative;
  width: 208px;
  top: 5px;
  // float: left;
  margin-left: 0px;
  padding: 5px;
  outline: 0px;
  border-radius: 6px;
}
#input_search:focus {
  position: relative;
  width: 208px;
  top: 5px;
  // float: left;
  margin-left: 0px;
  padding: 5px;
  outline: 0px;
  border-radius: 6px;
  border: 2px solid #819a36f2;
}
#div_search {
  position: relative;
  width: 100%;
  height: 115px;
}
#following_person_image {
  width: 60px;
  height: 60px;
  position: relative;
  float: left;
  margin-left: 10px;
  margin-top: 18px;
  margin-right: 10px;
  border-radius: 55px;
  cursor: pointer;
}
#following_person_image:hover {
  width: 60px;
  height: 60px;
  position: relative;
  float: left;
  margin-left: 10px;
  margin-top: 16px;
  margin-right: 10px;
  border-radius: 55px;
}
#following_person_name {
  width: fit-content;
  position: relative;
  float: left;
  font-size: 10px;
  color: aqua;
  bottom: -25px;
  font-weight: bolder;
}
#following_person_language {
  width: fit-content;
  position: relative;
  float: left;
  font-size: 10px;
  color: aqua;
  font-weight: bolder;
  top: 47px;
  right: 118px;
}
#following_person_location {
  width: fit-content;
  position: relative;
  float: left;
  font-size: 10px;
  color: aqua;
  font-weight: bolder;
  top: 50px;
}
#followed_button {
  width: fit-content;
  position: relative;
  float: right;
  font-size: 12px;
  margin-right: 3px;
  bottom: -23px;
  padding: 2px;
  background: cornflowerblue;
  color: aqua;
  outline: none;
  border: none;
  cursor: pointer;
  transition: background 1s;
  transition: color 1s;
  transition: bottom;
}
#followed_button:hover {
  width: fit-content;
  position: relative;
  float: right;
  font-size: 12px;
  margin-right: 3px;
  bottom: -20px;
  padding: 2px;
  background: #7eb200;
  color: black;
  outline: none;
  border: none;
}
#zoom_person_image {
  display: none;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0px);
  width: 300px;
  height: 300px;
  margin-left: 5px;
  margin-right: 5px;
  z-index: 3;
  cursor: pointer;
}
#zoom_post_image {
  display: none;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0px);
  width: 300px;
  height: 300px;
  margin-left: 5px;
  margin-right: 5px;
  z-index: 3;
  cursor: pointer;
}
#zoom_post_text {
  display: none;
  position: fixed;
  text-align: left;
  left: 50%;
  top: 390px;
  transform: translate(-50%, 0px);
  width: 300px;
  height: fit-content;
  margin-left: 5px;
  margin-right: 5px;
  color: antiquewhite;
  z-index: 3;
}
#zoom_person_div {
  display: none;
  position: fixed;
  margin: 0px;
  top: 0px;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0px);
  width: 100%;
  height: 100%;
  z-index: 2;
  background: #0a0707c2;
}
#show_following {
  display: none;
  position: fixed;
  margin: 0px;
  left: 50%;
  transform: translate(-50%, 0px);
  width: 300px;
  max-width: 300px;
  height: 550px;
  z-index: 2;
  background: rgb(16, 22, 28);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgb(255 255 255 / 46%);
  overflow-y: scroll;
}
#show_following::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

#show_following::-webkit-scrollbar-track {
  background-color: #0000007c;
}

#show_following::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
#show_followers {
  display: none;
  position: fixed;
  margin: 0px;
  left: 50%;
  transform: translate(-50%, 0px);
  width: 300px;
  max-width: 300px;
  height: 550px;
  z-index: 2;
  background: rgb(16, 22, 28);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5), 0 0 10px rgb(255 255 255 / 46%);
  overflow-y: scroll;
}
#show_followers::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

#show_followers::-webkit-scrollbar-track {
  background-color: #0000007c;
}

#show_followers::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}
.following:hover .description {
  color: #abbeda;
}
.following:hover {
  position: relative;
  bottom: 5px;
}
#icon_search {
  font-size: 22px;
  color: brown;
  border: 1px solid;
  cursor: pointer;
  padding: 4px;
  position: relative;
  border-radius: 5px;
  top: 14px;
  left: 3px;
}
#icon_search:hover {
  font-size: 22px;
  color: #b1b1ff;
  border: 1px solid red;
  border-radius: 5px;
  cursor: pointer;
}
#icon_close {
  font-size: 22px;
  color: brown;
  border: 1px solid;
  cursor: pointer;
  padding: 4px;
  padding-left: 7px;
  padding-right: 7px;
  position: relative;
  border-radius: 5px;
  top: 14px;
  left: -2px;
}
#icon_close:hover {
  font-size: 22px;
  color: red;
  border: 1px solid grey;
  cursor: pointer;
  padding: 4px;
  padding-left: 7px;
  padding-right: 7px;
  position: relative;
  border-radius: 5px;
  top: 14px;
  left: -2px;
}
:root {
  --blue: #5e72e4;
  --indigo: #5603ad;
  --purple: #8965e0;
  --pink: #f3a4b5;
  --red: #f5365c;
  --orange: #fb6340;
  --yellow: #ffd600;
  --green: #2dce89;
  --teal: #11cdef;
  --cyan: #2bffc6;
  --white: #fff;
  --gray: #8898aa;
  --gray-dark: #32325d;
  --light: #ced4da;
  --lighter: #e9ecef;
  --primary: #5e72e4;
  --secondary: #f7fafc;
  --success: #2dce89;
  --info: #11cdef;
  --warning: #fb6340;
  --danger: #f5365c;
  --light: #adb5bd;
  --dark: #212529;
  --default: #172b4d;
  --white: #fff;
  --neutral: #fff;
  --darker: black;
  --breakpoint-xs: 0;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --font-family-sans-serif: Open Sans, sans-serif;
  --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

@-ms-viewport {
  width: device-width;
}

figcaption,
footer,
header,
main,
nav,
section {
  display: block;
}

body {
  font-family: Open Sans, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  text-align: left;
  color: #525f7f;
  background-color: #f8f9fe;
}

[tabindex="-1"]:focus {
  outline: 0 !important;
}

hr {
  overflow: visible;
  box-sizing: content-box;
  height: 0;
}

h1,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

p {
  margin-top: 0;
  margin-bottom: 1rem;
}

address {
  font-style: normal;
  line-height: inherit;
  margin-bottom: 1rem;
}

ul {
  margin-top: 0;
  margin-bottom: 1rem;
}

ul ul {
  margin-bottom: 0;
}

dfn {
  font-style: italic;
}

strong {
  font-weight: bolder;
}

a {
  text-decoration: none;
  color: #5e72e4;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:hover {
  text-decoration: none;
  color: #233dd2;
}

a:not([href]):not([tabindex]) {
  text-decoration: none;
  color: inherit;
}

a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
  text-decoration: none;
  color: inherit;
}

a:not([href]):not([tabindex]):focus {
  outline: 0;
}

code {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 1em;
}

img {
  vertical-align: middle;
  border-style: none;
}

caption {
  padding-top: 1rem;
  padding-bottom: 1rem;
  caption-side: bottom;
  text-align: left;
  color: #8898aa;
}

label {
  display: inline-block;
  margin-bottom: 0.5rem;
}

button {
  border-radius: 0;
}

button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}

input,
button,
textarea {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button {
  text-transform: none;
}

// button,
// html [type='button'],
// [type='reset'],
// [type='submit'] {
//   -webkit-appearance: button;
// }

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

input[type="radio"],
input[type="checkbox"] {
  box-sizing: border-box;
  padding: 0;
}

// input[type='date'],
// input[type='time'],
// input[type='datetime-local'],
// input[type='month'] {
//   -webkit-appearance: listbox;
// }

textarea {
  overflow: auto;
  resize: vertical;
}

legend {
  font-size: 1.5rem;
  line-height: inherit;
  display: block;
  width: 100%;
  max-width: 100%;
  margin-bottom: 0.5rem;
  padding: 0;
  white-space: normal;
  color: inherit;
}

progress {
  vertical-align: baseline;
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

// [type='search'] {
//   outline-offset: -2px;
//   -webkit-appearance: none;
// }

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}

[hidden] {
  display: none !important;
}

h1,
h3,
h4,
h5,
h6,
.h1,
.h3,
.h4,
.h5,
.h6 {
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: #32325d;
}

h1,
.h1 {
  font-size: 1.625rem;
}

h3,
.h3 {
  font-size: 1.0625rem;
}

h4,
.h4 {
  font-size: 0.9375rem;
}

h5,
.h5 {
  font-size: 0.8125rem;
}

h6,
.h6 {
  font-size: 0.625rem;
}

.display-2 {
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 1.5;
}

hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

code {
  font-size: 87.5%;
  word-break: break-word;
  color: #f3a4b5;
}

a > code {
  color: inherit;
}

.container {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.container-fluid {
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
}

.row {
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
}

.col-4,
.col-8,
.col,
.col-md-10,
.col-md-12,
.col-lg-3,
.col-lg-4,
.col-lg-6,
.col-lg-7,
.col-xl-4,
.col-xl-6,
.col-xl-8 {
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}

.col {
  max-width: 100%;
  flex-basis: 0;
  flex-grow: 1;
}

.col-4 {
  max-width: 33.33333%;
  flex: 0 0 33.33333%;
}

.col-8 {
  max-width: 66.66667%;
  flex: 0 0 66.66667%;
}

@media (min-width: 768px) {
  .col-md-10 {
    max-width: 83.33333%;
    flex: 0 0 83.33333%;
  }

  .col-md-12 {
    max-width: 100%;
    flex: 0 0 100%;
  }
}

@media (min-width: 992px) {
  .col-lg-3 {
    max-width: 25%;
    flex: 0 0 25%;
  }

  .col-lg-4 {
    max-width: 33.33333%;
    flex: 0 0 33.33333%;
  }

  .col-lg-6 {
    max-width: 50%;
    flex: 0 0 50%;
  }

  .col-lg-7 {
    max-width: 58.33333%;
    flex: 0 0 58.33333%;
  }

  .order-lg-2 {
    order: 2;
  }
}

@media (min-width: 1200px) {
  .col-xl-4 {
    max-width: 33.33333%;
    flex: 0 0 33.33333%;
  }

  .col-xl-6 {
    max-width: 50%;
    flex: 0 0 50%;
  }

  .col-xl-8 {
    max-width: 66.66667%;
    flex: 0 0 66.66667%;
  }

  .order-xl-1 {
    order: 1;
  }

  .order-xl-2 {
    order: 2;
  }
}

.form-control {
  font-size: 1rem;
  line-height: 1.5;
  display: block;
  width: 100%;
  height: calc(2.75rem + 2px);
  padding: 0.625rem 0.75rem;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: #8898aa;
  border: 1px solid #cad1d7;
  border-radius: 0.375rem;
  // background-color: #fff;
  background-clip: padding-box;
  box-shadow: none;
}

@media screen and (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}

.form-control::-ms-expand {
  border: 0;
  background-color: transparent;
}

.form-control:focus {
  color: #8898aa;
  border-color: rgba(50, 151, 211, 0.25);
  outline: 0;
  // background-color: #fff;
  box-shadow: none, none;
}

.form-control:-ms-input-placeholder {
  opacity: 1;
  color: #adb5bd;
}

.form-control::-ms-input-placeholder {
  opacity: 1;
  color: #adb5bd;
}

.form-control::placeholder {
  opacity: 1;
  color: #adb5bd;
}

.form-control:disabled,
.form-control[readonly] {
  opacity: 1;
  // background-color: #e9ecef;
}

textarea.form-control {
  height: auto;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-inline {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

@media (min-width: 576px) {
  .form-inline label {
    display: flex;
    margin-bottom: 0;
    align-items: center;
    justify-content: center;
  }

  .form-inline .form-group {
    display: flex;
    margin-bottom: 0;
    flex: 0 0 auto;
    flex-flow: row wrap;
    align-items: center;
  }

  .form-inline .form-control {
    display: inline-block;
    width: auto;
    vertical-align: middle;
  }

  .form-inline .input-group {
    width: auto;
  }
}

.btn {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  display: inline-block;
  padding: 0.625rem 1.25rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  border: 1px solid transparent;
  border-radius: 0.375rem;
}

@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}

.btn:hover,
.btn:focus {
  text-decoration: none;
}

.btn:focus {
  outline: 0;
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.btn:disabled {
  opacity: 0.65;
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.btn:not(:disabled):not(.disabled):active {
  box-shadow: none;
}

.btn:not(:disabled):not(.disabled):active:focus {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08),
    none;
}

.btn-primary {
  color: #fff;
  border-color: #5e72e4;
  background-color: #5e72e4;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-primary:hover {
  color: #fff;
  border-color: #5e72e4;
  background-color: #5e72e4;
}

.btn-primary:focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 0 0 0 rgba(94, 114, 228, 0.5);
}

.btn-primary:disabled {
  color: #fff;
  border-color: #5e72e4;
  background-color: #5e72e4;
}

.btn-primary:not(:disabled):not(.disabled):active {
  color: #fff;
  border-color: #5e72e4;
  background-color: #324cdd;
}

.btn-primary:not(:disabled):not(.disabled):active:focus {
  box-shadow: none, 0 0 0 0 rgba(94, 114, 228, 0.5);
}

.btn-info {
  color: #fff;
  border-color: #11cdef;
  background-color: #11cdef;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-info:hover {
  color: #fff;
  border-color: #11cdef;
  background-color: #11cdef;
}

.btn-info:focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 0 0 0 rgba(17, 205, 239, 0.5);
}

.btn-info:disabled {
  color: #fff;
  border-color: #11cdef;
  background-color: #11cdef;
}

.btn-info:not(:disabled):not(.disabled):active {
  color: #fff;
  border-color: #11cdef;
  background-color: #0da5c0;
}

.btn-info:not(:disabled):not(.disabled):active:focus {
  box-shadow: none, 0 0 0 0 rgba(17, 205, 239, 0.5);
}

.btn-default {
  color: #fff;
  border-color: #172b4d;
  background-color: #172b4d;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.btn-default:hover {
  color: #fff;
  border-color: #172b4d;
  background-color: #172b4d;
}

.btn-default:focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08),
    0 0 0 0 rgba(23, 43, 77, 0.5);
}

.btn-default:disabled {
  color: #fff;
  border-color: #172b4d;
  background-color: #172b4d;
}

.btn-default:not(:disabled):not(.disabled):active {
  color: #fff;
  border-color: #172b4d;
  background-color: #0b1526;
}

.btn-default:not(:disabled):not(.disabled):active:focus {
  box-shadow: none, 0 0 0 0 rgba(23, 43, 77, 0.5);
}

.btn-sm {
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
}

.dropdown {
  position: relative;
}

.dropdown-menu {
  font-size: 1rem;
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  display: none;
  float: left;
  min-width: 10rem;
  margin: 0.125rem 0 0;
  padding: 0.5rem 0;
  list-style: none;
  text-align: left;
  color: #525f7f;
  border: 0 solid rgba(0, 0, 0, 0.15);
  border-radius: 0.4375rem;
  // background-color: #fff;
  background-clip: padding-box;
  box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1),
    0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
}

.dropdown-menu.show {
  display: block;
  opacity: 1;
}

.dropdown-menu-right {
  right: 0;
  left: auto;
}

.dropdown-menu[x-placement^="top"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"] {
  right: auto;
  bottom: auto;
}

.dropdown-divider {
  overflow: hidden;
  height: 0;
  margin: 0.5rem 0;
  border-top: 1px solid #e9ecef;
}

.dropdown-item {
  font-weight: 400;
  display: block;
  clear: both;
  width: 100%;
  padding: 0.25rem 1.5rem;
  text-align: inherit;
  white-space: nowrap;
  color: #212529;
  border: 0;
  background-color: transparent;
}

.dropdown-item:hover,
.dropdown-item:focus {
  text-decoration: none;
  color: #16181b;
  background-color: #f6f9fc;
}

.dropdown-item:active {
  text-decoration: none;
  color: #fff;
  background-color: #5e72e4;
}

.dropdown-item:disabled {
  color: #8898aa;
  background-color: transparent;
}

.dropdown-header {
  font-size: 0.875rem;
  display: block;
  margin-bottom: 0;
  padding: 0.5rem 1.5rem;
  white-space: nowrap;
  color: #8898aa;
}

.input-group {
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: stretch;
}

.input-group > .form-control {
  position: relative;
  width: 1%;
  margin-bottom: 0;
  flex: 1 1 auto;
}

.input-group > .form-control + .form-control {
  margin-left: -1px;
}

.input-group > .form-control:focus {
  z-index: 3;
}

.input-group > .form-control:not(:last-child) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .form-control:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-prepend {
  display: flex;
}

.input-group-prepend .btn {
  position: relative;
  z-index: 2;
}

.input-group-prepend .btn + .btn,
.input-group-prepend .btn + .input-group-text,
.input-group-prepend .input-group-text + .input-group-text,
.input-group-prepend .input-group-text + .btn {
  margin-left: -1px;
}

.input-group-prepend {
  margin-right: -1px;
}

.input-group-text {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  margin-bottom: 0;
  padding: 0.625rem 0.75rem;
  text-align: center;
  white-space: nowrap;
  color: #adb5bd;
  border: 1px solid #cad1d7;
  border-radius: 0.375rem;
  background-color: #fff;
  align-items: center;
}

.input-group-text input[type="radio"],
.input-group-text input[type="checkbox"] {
  margin-top: 0;
}

.input-group > .input-group-prepend > .btn,
.input-group > .input-group-prepend > .input-group-text {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.input-group > .input-group-prepend:not(:first-child) > .btn,
.input-group > .input-group-prepend:not(:first-child) > .input-group-text,
.input-group > .input-group-prepend:first-child > .btn:not(:first-child),
.input-group
  > .input-group-prepend:first-child
  > .input-group-text:not(:first-child) {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.nav {
  display: flex;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  flex-wrap: wrap;
}

.nav-link {
  display: block;
  padding: 0.25rem 0.75rem;
}

.nav-link:hover,
.nav-link:focus {
  text-decoration: none;
}

.navbar {
  position: relative;
  display: flex;
  padding: 1rem 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar > .container,
.navbar > .container-fluid {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.navbar-nav {
  display: flex;
  flex-direction: column;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}

.navbar-nav .nav-link {
  padding-right: 0;
  padding-left: 0;
}

.navbar-nav .dropdown-menu {
  position: static;
  float: none;
}

@media (max-width: 767.98px) {
  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
}

@media (min-width: 768px) {
  .navbar-expand-md {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand-md .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand-md .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand-md .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }

  .navbar-expand-md > .container,
  .navbar-expand-md > .container-fluid {
    flex-wrap: nowrap;
  }
}

.navbar-dark .navbar-nav .nav-link {
  color: rgba(255, 255, 255, 0.95);
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: rgba(255, 255, 255, 0.65);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 0.375rem;
  background-color: #fff;
  background-clip: border-box;
}

.card > hr {
  margin-right: 0;
  margin-left: 0;
}

.card-body {
  padding: 1.5rem;
  flex: 1 1 auto;
}

.card-header {
  margin-bottom: 0;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background-color: #fff;
}

.card-header:first-child {
  border-radius: calc(0.375rem - 1px) calc(0.375rem - 1px) 0 0;
}

@keyframes progress-bar-stripes {
  from {
    background-position: 1rem 0;
  }

  to {
    background-position: 0 0;
  }
}

.progress {
  font-size: 0.75rem;
  display: flex;
  overflow: hidden;
  height: 1rem;
  border-radius: 0.375rem;
  background-color: #e9ecef;
  box-shadow: inset 0 0.1rem 0.1rem rgba(0, 0, 0, 0.1);
}

.media {
  display: flex;
  align-items: flex-start;
}

.media-body {
  flex: 1 1;
}

.bg-secondary {
  background-color: bottom !important;
}

a.bg-secondary:hover,
a.bg-secondary:focus,
button.bg-secondary:hover,
button.bg-secondary:focus {
  background-color: #d2e3ee !important;
}

.bg-default {
  background-color: #172b4d !important;
}

a.bg-default:hover,
a.bg-default:focus,
button.bg-default:hover,
button.bg-default:focus {
  background-color: #0b1526 !important;
}

.bg-white {
  background-color: #fff !important;
}

a.bg-white:hover,
a.bg-white:focus,
button.bg-white:hover,
button.bg-white:focus {
  background-color: #e6e6e6 !important;
}

.bg-white {
  background-color: #fff !important;
}

.border-0 {
  border: 0 !important;
}

.rounded-circle {
  border-radius: 50% !important;
}

.d-none {
  display: none !important;
}

.d-flex {
  display: flex !important;
}

@media (min-width: 768px) {
  .d-md-flex {
    display: flex !important;
  }
}

@media (min-width: 992px) {
  .d-lg-inline-block {
    display: inline-block !important;
  }

  .d-lg-block {
    display: block !important;
  }
}

.justify-content-center {
  justify-content: center !important;
}

.justify-content-between {
  justify-content: space-between !important;
}

.align-items-center {
  align-items: center !important;
}

@media (min-width: 1200px) {
  .justify-content-xl-between {
    justify-content: space-between !important;
  }
}

.float-right {
  float: right !important;
}

.shadow,
.card-profile-image img {
  box-shadow: 0 0 2rem 0 rgba(136, 152, 170, 0.15) !important;
}

.m-0 {
  margin: 0 !important;
}

.mt-0 {
  margin-top: 0 !important;
}

.mb-0 {
  margin-bottom: 0 !important;
}

.mr-2 {
  margin-right: 0.5rem !important;
}

.ml-2 {
  margin-left: 0.5rem !important;
}

.mr-3 {
  margin-right: 1rem !important;
}

.mt-4,
.my-4 {
  margin-top: 1.5rem !important;
}

.mr-4 {
  margin-right: 1.5rem !important;
}

.mb-4,
.my-4 {
  margin-bottom: 1.5rem !important;
}

.mb-5 {
  margin-bottom: 3rem !important;
}

.mt--7 {
  margin-top: -6rem !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.pr-0 {
  padding-right: 0 !important;
}

.pb-0 {
  padding-bottom: 0 !important;
}

.pt-5 {
  padding-top: 3rem !important;
}

.pt-8 {
  padding-top: 8rem !important;
}

.pb-8 {
  padding-bottom: 8rem !important;
}

.m-auto {
  margin: auto !important;
}

@media (min-width: 768px) {
  .mt-md-5 {
    margin-top: -10px !important;
  }

  .pt-md-4 {
    padding-top: 1.5rem !important;
  }

  .pb-md-4 {
    padding-bottom: 1.5rem !important;
  }
}

@media (min-width: 992px) {
  .pl-lg-4 {
    padding-left: 1.5rem !important;
  }

  .pt-lg-8 {
    padding-top: 8rem !important;
  }

  .ml-lg-auto {
    margin-left: auto !important;
  }
}

@media (min-width: 1200px) {
  .mb-xl-0 {
    margin-bottom: 0 !important;
  }
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center !important;
}

.text-uppercase {
  text-transform: uppercase !important;
}

.font-weight-light {
  font-weight: 300 !important;
}

.font-weight-bold {
  font-weight: 600 !important;
}

.text-white {
  color: #fff !important;
}

.text-white {
  color: #fff !important;
}

a.text-white:hover,
a.text-white:focus {
  color: #e6e6e6 !important;
}

.text-muted {
  color: #8898aa !important;
}

@media print {
  *,
  *::before,
  *::after {
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a:not(.btn) {
    text-decoration: underline;
  }

  img {
    page-break-inside: avoid;
  }

  p,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h3 {
    page-break-after: avoid;
  }

  @page {
    size: a3;
  }

  body {
    min-width: 992px !important;
  }

  .container {
    min-width: 992px !important;
  }

  .navbar {
    display: none;
  }
}

figcaption,
main {
  display: block;
}

main {
  overflow: hidden;
}

.bg-white {
  background-color: #fff !important;
}

a.bg-white:hover,
a.bg-white:focus,
button.bg-white:hover,
button.bg-white:focus {
  background-color: #e6e6e6 !important;
}

.bg-gradient-default {
  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
}

.bg-gradient-default {
  background: linear-gradient(87deg, #172b4d 0, #1a174d 100%) !important;
}

@keyframes floating-lg {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(15px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes floating {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(0px);
  }
}

@keyframes floating-sm {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(5px);
  }

  100% {
    transform: translateY(0px);
  }
}

.opacity-8 {
  opacity: 0.8 !important;
}

.opacity-8 {
  opacity: 0.9 !important;
}

.center {
  left: 50%;
  transform: translateX(-50%);
}

[class*="shadow"] {
  transition: all 0.15s ease;
}

.font-weight-300 {
  font-weight: 300 !important;
}

.text-sm {
  font-size: 0.875rem !important;
}

.text-white {
  color: #fff !important;
}

a.text-white:hover,
a.text-white:focus {
  color: #e6e6e6 !important;
}

.avatar {
  font-size: 1rem;
  display: inline-flex;
  width: 48px;
  height: 48px;
  color: #fff;
  border-radius: 50%;
  background-color: #adb5bd;
  align-items: center;
  justify-content: center;
}

.avatar img {
  width: 100%;
  border-radius: 50%;
}

.avatar-sm {
  font-size: 0.875rem;
  width: 36px;
  height: 36px;
}

.btn {
  font-size: 0.875rem;
  position: relative;
  transition: all 0.15s ease;
  letter-spacing: 0.025em;
  text-transform: none;
  will-change: transform;
}

.btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
}

.btn:not(:last-child) {
  margin-right: 0.5rem;
}

.btn i:not(:first-child) {
  margin-left: 0.5rem;
}

.btn i:not(:last-child) {
  margin-right: 0.5rem;
}

.input-group .btn {
  margin-right: 0;
  transform: translateY(0);
}

.btn-sm {
  font-size: 0.75rem;
}

[class*="btn-outline-"] {
  border-width: 1px;
}

.card-profile-image {
  position: relative;
}

.card-profile-image img {
  position: absolute;
  left: 50%;
  max-width: 180px;
  transition: all 0.15s ease;
  transform: translate(-50%, -30%);
  border-radius: 0.375rem;
}

.card-profile-image img:hover {
  transform: translate(-50%, -33%);
}

.card-profile-stats {
  padding: 1rem 0;
}

.card-profile-stats > div {
  margin-right: 1rem;
  padding: 0.875rem;
  text-align: center;
}

.card-profile-stats > div:last-child {
  margin-right: 0;
}

.card-profile-stats > div .heading {
  font-size: 1.1rem;
  font-weight: bold;
  display: block;
}

.card-profile-stats > div .description {
  font-size: 18px;
  color: #adb5bd;
}

.main-content {
  position: relative;
}

.main-content .navbar-top {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  padding-right: 0 !important;
  padding-left: 0 !important;
  background-color: transparent;
}

@media (min-width: 768px) {
  .main-content .container-fluid {
    padding-right: 39px !important;
    padding-left: 39px !important;
  }
}

.dropdown {
  display: inline-block;
}

.dropdown-menu {
  min-width: 12rem;
}

.dropdown-menu .dropdown-item {
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
}

.dropdown-menu .dropdown-item > i {
  font-size: 1rem;
  margin-right: 1rem;
  vertical-align: -17%;
}

.dropdown-header {
  font-size: 0.625rem;
  font-weight: 700;
  padding-right: 1rem;
  padding-left: 1rem;
  text-transform: uppercase;
  color: #f6f9fc;
}

.dropdown-menu a.media > div:first-child {
  line-height: 1;
}

.dropdown-menu a.media p {
  color: #8898aa;
}

.dropdown-menu a.media:hover .heading,
.dropdown-menu a.media:hover p {
  color: #172b4d !important;
}

.footer {
  padding: 2.5rem 0;
  background: #f7fafc;
}

.footer .nav .nav-item .nav-link {
  color: #8898aa !important;
}

.footer .nav .nav-item .nav-link:hover {
  color: #525f7f !important;
}

.footer .copyright {
  font-size: 0.875rem;
}

.form-control-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #525f7f;
}

.form-control {
  font-size: 0.875rem;
}

.form-control:focus:-ms-input-placeholder {
  color: #adb5bd;
}

.form-control:focus::-ms-input-placeholder {
  color: #adb5bd;
}

.form-control:focus::placeholder {
  color: #adb5bd;
}

textarea[resize="none"] {
  resize: none !important;
}

textarea[resize="both"] {
  resize: both !important;
}

textarea[resize="vertical"] {
  resize: vertical !important;
}

textarea[resize="horizontal"] {
  resize: horizontal !important;
}

.form-control-alternative {
  transition: box-shadow 0.15s ease;
  border: 0;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
}

.form-control-alternative:focus {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}

.input-group {
  transition: all 0.15s ease;
  border-radius: 0.375rem;
  box-shadow: none;
}

.input-group .form-control {
  box-shadow: none;
}

.input-group .form-control:not(:first-child) {
  padding-left: 0;
  border-left: 0;
}

.input-group .form-control:not(:last-child) {
  padding-right: 0;
  border-right: 0;
}

.input-group .form-control:focus {
  box-shadow: none;
}

.input-group-text {
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.input-group-alternative {
  transition: box-shadow 0.15s ease;
  border: 0;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
}

.input-group-alternative .form-control,
.input-group-alternative .input-group-text {
  border: 0;
  box-shadow: none;
}

.focused .input-group-alternative {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}

.focused .input-group {
  box-shadow: none;
}

.focused .input-group-text {
  color: #8898aa;
  border-color: rgba(50, 151, 211, 0.25);
  background-color: #fff;
}

.focused .form-control {
  border-color: rgba(50, 151, 211, 0.25);
}

.header {
  position: relative;
}

.input-group {
  transition: all 0.15s ease;
  border-radius: 0.375rem;
  box-shadow: none;
}

.input-group .form-control {
  box-shadow: none;
}

.input-group .form-control:not(:first-child) {
  padding-left: 0;
  border-left: 0;
}

.input-group .form-control:not(:last-child) {
  padding-right: 0;
  border-right: 0;
}

.input-group .form-control:focus {
  box-shadow: none;
}

.input-group-text {
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.input-group-alternative {
  transition: box-shadow 0.15s ease;
  border: 0;
  box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);
}

.input-group-alternative .form-control,
.input-group-alternative .input-group-text {
  border: 0;
  box-shadow: none;
}

.focused .input-group-alternative {
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
}

.focused .input-group {
  box-shadow: none;
}

.focused .input-group-text {
  color: #8898aa;
  border-color: rgba(50, 151, 211, 0.25);
  background-color: #fff;
}

.focused .form-control {
  border-color: rgba(50, 151, 211, 0.25);
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.15s ease;
}

@media screen and (prefers-reduced-motion: reduce) {
  .mask {
    transition: none;
  }
}

.nav-link {
  color: #525f7f;
}

.nav-link:hover {
  color: #5e72e4;
}

.nav-link i.ni {
  position: relative;
  top: 2px;
}

.navbar-search .input-group {
  border: 2px solid;
  border-radius: 2rem;
  background-color: transparent;
}

.navbar-search .input-group .input-group-text {
  padding-left: 1rem;
  background-color: transparent;
}

.navbar-search .form-control {
  width: 270px;
  background-color: transparent;
}

.navbar-search-dark .input-group {
  border-color: rgba(255, 255, 255, 0.6);
}

.navbar-search-dark .input-group-text {
  color: rgba(255, 255, 255, 0.6);
}

.navbar-search-dark .form-control {
  color: rgba(255, 255, 255, 0.9);
}

.navbar-search-dark .form-control:-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.navbar-search-dark .form-control::-ms-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.navbar-search-dark .form-control::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.navbar-search-dark .focused .input-group {
  border-color: rgba(255, 255, 255, 0.9);
}

@media (min-width: 768px) {
  .navbar .dropdown-menu {
    margin: 0;
    pointer-events: none;
    opacity: 0;
  }

  .navbar .dropdown-menu-arrow:before {
    position: absolute;
    z-index: -5;
    bottom: 100%;
    left: 20px;
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    transform: rotate(-45deg) translateY(12px);
    border-radius: 2px;
    background: #fff;
    box-shadow: none;
  }

  .navbar .dropdown-menu-right:before {
    right: 20px;
    left: auto;
  }

  @keyframes show-navbar-dropdown {
    0% {
      transition: visibility 0.25s, opacity 0.25s, transform 0.25s;
      transform: translate(0, 10px) perspective(200px) rotateX(-2deg);
      opacity: 0;
    }

    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  @keyframes hide-navbar-dropdown {
    from {
      opacity: 1;
    }

    to {
      transform: translate(0, 10px);
      opacity: 0;
    }
  }
}

@media (max-width: 767.98px) {
  .navbar-nav .nav-link {
    padding: 0.625rem 0;
    color: #172b4d !important;
  }

  .navbar-nav .dropdown-menu {
    min-width: auto;
    box-shadow: none;
  }
}

@keyframes show-navbar-collapse {
  0% {
    transform: scale(0.95);
    transform-origin: 100% 0;
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes hide-navbar-collapse {
  from {
    transform: scale(1);
    transform-origin: 100% 0;
    opacity: 1;
  }

  to {
    transform: scale(0.95);
    opacity: 0;
  }
}

.progress {
  overflow: hidden;
  height: 8px;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  background-color: #e9ecef;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
}

.description {
  font-size: 0.875rem;
}

.heading {
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.025em;
  text-transform: uppercase;
}

.heading-small {
  font-size: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.display-2 span {
  font-weight: 300;
  display: block;
}

@media (max-width: 768px) {
  .btn {
    margin-bottom: 10px;
  }
}

#navbar .navbar {
  margin-bottom: 20px;
}
// /////////////////////////////////////////////////@at-root
@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700");
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
}
a {
  text-decoration: none;
}
.product-card {
  width: 299px;
  position: relative;
  box-shadow: 0 2px 7px #dfdfdf;
  margin: 50px auto;
  margin-left: 11px;
  background: #fafafa;
  display: inline-table;
}

.badge {
  position: absolute;
  left: 0;
  top: 20px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  background: red;
  color: #fff;
  padding: 3px 10px;
}

.product-tumb {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  padding: 0px;
  background: #f0f0f0;
  cursor: pointer;
}

.product-tumb img {
  max-width: 100%;
  max-height: 100%;
}

.product-details {
  padding: 30px;
}

.product-catagory {
  display: block;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ccc;
  margin-bottom: 18px;
}

.product-details h4 a {
  font-weight: 500;
  display: block;
  margin-bottom: 18px;
  text-transform: uppercase;
  color: #363636;
  text-decoration: none;
  transition: 0.3s;
}

.product-details h4 a:hover {
  color: #fbb72c;
}

.product-details p {
  width: -webkit-fill-available;
  height: 128px;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 18px;
  color: #999;
  text-align: left;
  margin-top: 5px;
}

.product-bottom-details {
  overflow: hidden;
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.product-bottom-details div {
  float: left;
  width: 50%;
}

.product-price {
  font-size: 18px;
  color: #fbb72c;
  font-weight: 600;
}

.product-price small {
  font-size: 80%;
  font-weight: 400;
  text-decoration: line-through;
  display: inline-block;
  margin-right: 5px;
}

.product-links {
  text-align: right;
}

.product-links a {
  display: inline-block;
  margin-left: 5px;
  color: #e1e1e1;
  transition: 0.3s;
  font-size: 17px;
}

.product-links a:hover {
  color: #fbb72c;
}
#imageperson {
  display: flex;
  position: relative;
  width: 50px;
  float: left;
  bottom: 26px;
  right: 24px;
  height: 50px;
  border-radius: 58px;
  cursor: pointer;
}
#imageperson:hover {
  display: flex;
  position: relative;
  width: 52px;
  float: left;
  bottom: 26px;
  right: 24px;
  height: 52px;
  border-radius: 58px;
  cursor: pointer;
}
#person_name {
  position: relative;
  bottom: 10px;
  right: 15px;
  color: blueviolet;
}
@media (max-width: 500px) {
  #div_icon1 {
    position: relative;
    left: 30px;
  }
  #div_icon2 {
    position: relative;
    right: 30px;
  }
  .product-details p {
    font-size: 13px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #999;
    margin-left: 6px;
    text-align: left;
    margin-top: 5px;
  }
  #person_name {
    font-size: 15px;
    position: relative;
    bottom: -6px;
    right: -9px;
    color: blueviolet;
  }
  #imageperson {
    position: relative;
    margin: 2px;
    width: 30px;
    float: left;
    bottom: 0px;
    right: -3px;
    height: 30px;
    border-radius: 58px;
    cursor: pointer;
  }
  #imageperson:hover {
    position: relative;
    margin: 2px;
    width: 32px;
    float: left;
    bottom: 0px;
    right: -3px;
    height: 32px;
    border-radius: 58px;
    cursor: pointer;
  }
  .product-tumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 255px;
    padding: 0px;
    background: #f0f0f0;
  }
  .product-card {
    width: 255px;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 50px auto;
    margin-left: 11px;
    background: #fafafa;
    display: inline-table;
  }
  .product-details {
    padding: 0px;
  }
}

// //////////////////////////////////////tost
.toast {
  position: fixed;
  bottom: 0;
  right: 0;

  transform: translateY(100%);
  opacity: 0;

  transition: opacity 500ms, transform 500ms;
}

.toast.visible {
  z-index: 5;
  transform: translateY(-282%);
  opacity: 1;
}

.toast-body {
  margin: 0px;
  position: relative;
  left: 50%;
  transform: translate(-69%, 0px);
  padding: 24px 24px;
  font-size: 12px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: lightskyblue;
  color: darkblue;
  border-radius: 4px;
  height: 97px;
}
#div_toast {
  display: none;
  width: -webkit-fill-available;
  height: 818px;
  position: fixed;
  z-index: 4;
  background: #0000009e;
}
#no {
  background: aqua;
  position: relative;
  float: left;
  bottom: 31px;
  right: 7px;
  cursor: pointer;
  outline: none;
  padding: 2px;
  color: red;
  font-size: 13px;
  border: 1px solid blue;
  border-radius: 4px;
}
#no:hover {
  background: aqua;
  position: relative;
  float: left;
  bottom: 33px;
  right: 7px;
  cursor: pointer;
  outline: none;
  padding: 2px;
  font-size: 13px;
  border: 1px solid blue;
  border-radius: 4px;
  font-weight: bold;
}
#yes {
  background: aqua;
  position: relative;
  float: right;
  bottom: 31px;
  right: 86px;
  cursor: pointer;
  outline: none;
  padding: 2px;
  font-size: 13px;
  border: 1px solid blue;
  border-radius: 4px;
  color: var(--blue);
}
#yes:hover {
  background: aqua;
  position: relative;
  float: right;
  bottom: 33px;
  right: 86px;
  cursor: pointer;
  outline: none;
  padding: 2px;
  font-size: 13px;
  border: 1px solid blue;
  border-radius: 4px;
  font-weight: bold;
}
// //////////////////////////////////////tost
.toast2 {
  position: fixed;
  bottom: 0;
  right: 0;

  transform: translateY(100%);
  opacity: 0;

  transition: opacity 500ms, transform 500ms;
}

.toast2.visible {
  z-index: 5;
  transform: translateY(-282%);
  opacity: 1;
}

.toast-body2 {
  margin: 0px;
  position: relative;
  left: 50%;
  transform: translate(-74%, 0px);
  padding: 24px 24px;
  font-size: 12px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: lightskyblue;
  color: darkblue;
  border-radius: 4px;
  height: 97px;
}
#div_toast2 {
  display: none;
  width: -webkit-fill-available;
  height: 818px;
  position: fixed;
  z-index: 4;
  background: #0000009e;
}
#no2 {
  background: aqua;
  position: relative;
  float: left;
  bottom: 31px;
  right: 7px;
  cursor: pointer;
  outline: none;
  padding: 2px;
  color: red;
  font-size: 13px;
  border: 1px solid blue;
  border-radius: 4px;
}
#no2:hover {
  background: aqua;
  position: relative;
  float: left;
  bottom: 33px;
  right: 7px;
  cursor: pointer;
  outline: none;
  padding: 2px;
  font-size: 13px;
  border: 1px solid blue;
  border-radius: 4px;
  font-weight: bold;
}
#yes2 {
  background: aqua;
  position: relative;
  float: right;
  bottom: 31px;
  right: 86px;
  cursor: pointer;
  outline: none;
  padding: 2px;
  font-size: 13px;
  border: 1px solid blue;
  border-radius: 4px;
  color: var(--blue);
}
#yes2:hover {
  background: aqua;
  position: relative;
  float: right;
  bottom: 33px;
  right: 86px;
  cursor: pointer;
  outline: none;
  padding: 2px;
  font-size: 13px;
  border: 1px solid blue;
  border-radius: 4px;
  font-weight: bold;
}
</style>
