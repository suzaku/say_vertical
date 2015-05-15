(function () {
    var MAX_HEIGHT = 4;

    var specialBtn = document.createElement('span');
    specialBtn.className = 'bn-submit bn-flat btn-vertical';
    var input = document.createElement('input');
    input.type = 'submit';
    input.value = '竖着';
    input.name = 'special';
    specialBtn.appendChild(input);

    var submitBtn = document.querySelector('#db-isay div.btn span.bn-submit');
    var container = submitBtn.parentNode;
    container.insertBefore(specialBtn, submitBtn);

    specialBtn.onclick = function () {
        var cont = document.getElementById('isay-cont');
        var contClone = document.getElementById('isay-cont-clone');
        contClone.value = verticalize(cont.value);
        cont.value = contClone.value;
        return true;
    };

    function verticalize(s) {
        var idx;
        var row;
        var result = [];
        var width = Math.ceil(s.length / MAX_HEIGHT);

        for (var i = 0; i < MAX_HEIGHT; i++) {
            row = [];
            for (var j = 0; j < width; j++) {
                idx = i + (j * MAX_HEIGHT);
                if (idx < s.length) {
                    row.unshift(s[idx]);
                } else {
                    row.unshift('　');
                }
            }
            result.push(row.join(''));
        }
        return result.join('\n');
    };
})();
