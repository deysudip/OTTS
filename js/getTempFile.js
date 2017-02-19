/**
 * Created by Sudip on 12-02-2017.
 */


var modules = (function() {
    var content = null;
    var fileName = 'content';
    $.ajax({
        'async': false,
        'method': "POST",
        "data": {'ops': 'read','fileName':fileName},
        'url': "http://localhost:88/otts/phpScript/tempFileHandle.php",
        'dataType': "json",
        'success': function (data) {
            content = data;
        }
    });
    return content;
})();
function writeTemp(jsonData){
    $.ajax({
        'method': "POST",
        "data": {'ops': 'write','fileName':fileName,'data':jsonData},
        'url': "http://localhost:88/otts/phpScript/tempFileHandle.php",
        'dataType': "json",
        'success': function () {
            return true;
        }
    });
}
