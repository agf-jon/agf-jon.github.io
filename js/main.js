// var Agsouth = new Association("AgSouth", "855-555-5555");
//
// function Association(name, phone) {
//   this.name = name;
//   this.phone = phone;
//
//   // Replace the phone number with the ACA-specific one
//   $(".phoneNumber").append(this.phone);
//
//   var logoUrl = "https://campaigns.farmcredit.net/images/" + name + ".png";
//   $(".logo").attr("src", logoUrl);
// }

// Create New Association
var association = new Object();
association.name = "AgSouth";
association.id = "agsouth";
association.phone = "855-555-1234";
association.logoUrl =
  "https://agsouthfc.com/agsouth/media/images/agsouth-farm-credit-logo.png";
association.crmId = "afvwt";
association.leadFormId = "zgvazojeeeucqbqvqnahw";
association.dripFormId = "abc";

// Define CRM URL
var crmUrl =
  "https://analytics.clickdimensions.com/agfirstnet-" +
  association.crmId +
  "/pages/";
var loc = crmUrl;

// Replace the phone number with the ACA-specific one

$(document).ready(function() {
  $(".phoneNumber").append(association.phone);
  $(".logo").attr("src", association.logoUrl);
  $(".leadForm").attr("pageid", association.leadFormId);
  $(".dripForm").attr("pageid", association.dripFormId);
});
