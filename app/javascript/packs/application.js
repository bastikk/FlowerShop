// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

//= require masonry/jquery.masonry
// require helper-functions
// require main

import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "js/defaults"
import "js/helper-functions"
import "js/main"
import "js/star-rating"
import "js/cart"
import "js/submissions"
// import "js/cart-drawer"

Rails.start()
// Turbolinks.start()
ActiveStorage.start()
