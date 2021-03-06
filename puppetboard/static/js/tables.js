// Generated by CoffeeScript 1.6.3

$.tablesorter.addParser({
    id: "customDate",
    is: function(s) {
        return false;
    },
    format: function(s) {
        s = s.trim();
        s = s.replace(/(\-|:|\.)/g," "); //split date into space separateda string
        s = s.split(" ");
        return $.tablesorter.formatFloat(new Date(s[0], s[1]-1, s[2], s[3], s[4], s[5]).getTime());
    },
    type: "numeric"
});

(function() {
  var $;

  $ = jQuery;

  $(function() {});

  $('.nodes').tablesorter({
    headers: {
      2: { sorter: "customDate" },
      3: { sorter: "customDate" },
      4: { sorter: false }
    },
    sortList: [[1, 0]]
  });

  $('.facts').tablesorter({
    sortList: [[0, 0]]
  });

  $('.dashboard').tablesorter({
    headers: {
        2: { sorter: false }
    },
    sortList: [[0, 1]]
  });

  $('input.filter-table').parent('div').removeClass('hide');

  $("input.filter-table").on("keyup", function(e) {
    var ev, rex;
    rex = new RegExp($(this).val(), "i");
    $(".searchable tr").hide();
    $(".searchable tr").filter(function() {
      return rex.test($(this).text());
    }).show();
    if (e.keyCode === 27) {
      $(e.currentTarget).val("");
      ev = $.Event("keyup");
      ev.keyCode = 13;
      $(e.currentTarget).trigger(ev);
      return e.currentTarget.blur();
    }
  });

}).call(this);
