
let note = '';

if (document.location.search.includes('note'))
    note = new URLSearchParams(document.location.search.substring(1)).get('note');

$('#note').html(note);
