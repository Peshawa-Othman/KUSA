<div>
    <div
      v-for="item in test2"
      :key="item"
      style="
        width: 100px;
        height: 120px;
        /* border: 1px solid; */
        position: relative;
        float: right;
        display: inline-table;
      "
    >
      <span id="user_follow">Follow</span>
      <img id="user_image" :src="item.image" alt="" />
      <span id="user_number">1</span>
      <div
        style="
          position: relative;
          width: 89px;
          right: -12px;
          top: 26px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        "
      >
        <span id="user_name">{{ item.name }}</span>
      </div>
    </div>
  </div>
  <div style="position: relative; top: 55px">
    <div
      v-for="item in test2"
      :key="item"
      style="
        width: 100px;
        height: 120px;
        border: 1px solid;
        position: relative;
        float: right;
        display: inline-table;
      "
    >
      <!-- <span id="user_follow">Follow</span> -->
      <img id="user_image" :src="item.image" alt="" />
      <span id="user_number">1</span>
      <div
        style="
          position: relative;
          width: 89px;
          right: -12px;
          top: 26px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        "
      >
        <span id="user_name">{{ item.name }}</span>
      </div>
    </div>
  </div>