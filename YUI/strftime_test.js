YUI({
  combine: true,
  timeout: 10000,
}).use("node", "console", "test", function(Y) {
  var assert = Y.Assert;

  var strftimeTestCase = new Y.Test.Case({
    name: "Date.prototype.strftime Tests",
    setUp: function () {
      this.date = new Date(2009, 9, 2, 22, 14, 45);
    },

    tearDown: function () {
      delete this.date;
    },

    "test %Y should return full year": function () {
      var year = Date.formats.Y(this.date);

      assert.isNumber(year);
      assert.areEqual(2009, year);
    },

    "test %m should return month": function () {
      var month = Date.formats.m(this.date);

      assert.isString(month);
      assert.areEqual("10", month);
    },

    "%d should return day of the month": function () {
      assert.areEqual("02", Date.formats.d(this.date));
    },

    "%y should return year as two digits": function () {
      assert.areEqual("09", Date.formats.y(this.date));
    },

    "test format specifier %F": function () {
      assert.areEqual("%Y-%m-%d", Date.formats.F);
    }
  });

  // create the console
  var r = new Y.Console({
    newestOnTop: false,
    style: 'block'
  });

  r.render("#testReport");
  Y.Test.Runner.add(strftimeTestCase);
  Y.Test.Runner.run();
});
