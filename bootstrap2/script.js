/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(function()
{
  $("#btt1").click(function(e)
  {
    e.preventDefault();
    $("#alertmsg").slideDown();
  });
});
