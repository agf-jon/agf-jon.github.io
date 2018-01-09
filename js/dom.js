// Define CRM URL
var loc =
  "https://analytics.clickdimensions.com/agfirstnet-" +
  association.crmId +
  "/pages/";

// Replace stuff in the DOM
$(document).ready(function() {
  $(".phoneNumber").append(association.phone);
  $(".logo").attr("src", association.logoUrl);
  $(".leadForm").attr("pageid", association.leadFormId);
  $(".dripForm").attr("pageid", association.dripFormId);
});
