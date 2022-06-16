const fs = require('fs');
let savedData = [];
const osmosis = require('osmosis');

osmosis
  .get('www.consultant.ru/document/cons_doc_LAW_335635/a80818c7d9593b31dbd0d3418aec02298bd57d6d/')
  .find('.align_left no-indent')
  .set({ 'Title': 'title' })
  .data(function (data) {
    console.log(data);
  })
