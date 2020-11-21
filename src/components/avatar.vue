<template>
  <header>
    <nav>
      <div class="logo-container">
        <img src="res/images/logo.png" alt="postIt">
      </div>
      <div class="search-container">
        <input type="text" name="search"><button type="button">Search</button>
      </div>
      <div class="avatar-container">
        <img id="{{avatar}}" class="avatar" alt="Me" @onclick="dropdown">
        <div class="dropdown-content" id="myDropdown">
          <p id="name">{{name}}</p>
          <p id="email">{{email}}</p>
          <a href="browse.html" > Browse</a>
          <a href="login.html">Log Out</a>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
export default{
  name:'Dropdown',
  methods:{
    dropdown: function(){
      document.getElementById("myDropdown").classList.toggle("show")
    },
    showUserInfo: function(user){
      this.name= user.firstname +" " + user.lastname;
      this.email = user.email;
    }
  }
}
</script>
<style>
.dropdown-content {
  display: none;
  position: absolute;
  right: 20px;
  min-width: 160px;
  background-color: #ffffff !important;
  min-height: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  text-align: left;
}

.dropdown-content a {
  float: none;
  padding: 14px 16px;
  display: block;
  border-top: 1px solid grey;

}

.show {
  display: block;
  z-index: 11;
}

</style>