
let note = '';

if (document.location.search.includes('note'))
    note = new URLSearchParams(document.location.search.substring(1)).get('note');

/*
 * stupid HTML5 security prevents script execution with innerHTML
 * https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0
 * 
 * alternative just to make this work is to use jQuery...
 */
$('#note').html(note);
