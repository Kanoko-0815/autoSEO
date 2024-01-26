document.getElementById('addTable').addEventListener('click', addTable);
document.getElementById('removeTable').addEventListener('click', removeTable);

function addTable() {
    var tablesContainer = document.getElementById('tablesContainer');
    var newTable = document.createElement('table');
    newTable.innerHTML = '<tr><th>見出し</th><th>見出し入力欄</th><th>文字数</th><th>必須キーワード入力欄</th><th>メモ入力欄</th></tr>' +
        '<tr><td><select class="headerSelect"><option value="h1">h1</option><option value="h2">h2</option><option value="h3">h3</option><option value="h4">h4</option><option value="h5">h5</option><option value="h6">h6</option></select></td>' +
        '<td><input type="text" class="headerInput" name="headerInput"></td>' +
        '<td><input type="number" min="1" max="600" class="charCount" name="charCount"></td>' +
        '<td><input type="text" class="requiredKeyword" name="requiredKeyword"></td>' +
        '<td><input type="text" class="memoInput" name="memoInput"></td></tr>';
    tablesContainer.appendChild(newTable);

    
    var selects = newTable.getElementsByClassName('headerSelect');
    var inputs = newTable.getElementsByClassName('headerInput');
    var charCounts = newTable.getElementsByClassName('charCount');
    var requiredKeywords = newTable.getElementsByClassName('requiredKeyword');
    var memoInputs = newTable.getElementsByClassName('memoInput');

    for (var i = 0; i < selects.length; i++) {
        selects[i].addEventListener('change', updateSelectedValue);
    }

    function updateSelectedValue(event) {
        console.log('Selected value:', event.target.value);
    }
}

function removeTable() {
    var tablesContainer = document.getElementById('tablesContainer');
    var tables = tablesContainer.getElementsByTagName('table');
    if (tables.length > 0) {
        tablesContainer.removeChild(tables[tables.length - 1]);
    }
}

function submitForm() {
    // 送信ボタンがクリックされた時の処理を追加
}
