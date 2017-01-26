var start = moment("20170101", "YYYYMMDD");
var end =  moment("20171231", "YYYYMMDD");

var period = [];
var week = [];
var today = moment().format("YYYY-MM-DD");
for (var i = moment(start); i.isSameOrBefore(end); i.add(1, 'days')) {
  if (week.length == 7) {
    period.push(week);
    week = [];
  }

  week.push(moment(i));
}

period.push(week);

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    period: period,
    friends: window.friends,
    linkGithub: 'https://github.com/',
    today: today
  }
});
