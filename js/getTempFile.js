/**
 * Created by Sudip on 12-02-2017.
 */

var fileName = 'content.json';
var modules = (function() {
    var content = null;
    $.ajax({
        'async': false,
        'method': "POST",
        "data": {'ops': 'read','fileName':'content'},
        'url': "http://localhost:88/otts/phpScript/tempFileHandle.php",
        'dataType': "json",
        'success': function (data) {
            content = data;
        }
    });
    return content;
})();
