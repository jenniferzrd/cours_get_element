var log, byId, select, selectAll;

log = function log(val) {
  "use strict";
};

log = function byId(id) {
  "use strict";
  return document.getElementById(id);
};
log = function select(sCss) {
  "use strict";
    return document.querySelector(sCss);
};
log = function selectAll(sCss) {
  "use strict";
  return document.querySelectorAll(sCss);
};
