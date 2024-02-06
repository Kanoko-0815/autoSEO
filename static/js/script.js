document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('addRowButton').addEventListener('click', addRow);
    document.getElementById('removeRowButton').addEventListener('click', removeRow);
    document.getElementById('seoForm').addEventListener('submit', submitForm);
});

function addRow() {
    const table = document.getElementById('headerTable');
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>
            <select name="headerLevel[]">
                <option value="h1">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                <option value="h4">H4</option>
                <option value="h5">H5</option>
                <option value="h6">H6</option>
            </select>
        </td>
        <td><textarea name="headerText"></textarea></td>
        <td><textarea name="headerCharCount" oninput="this.value=this.value.replace(/[^0-9]/g,'');"></textarea></td>
        <td><textarea name="headerSummary"></textarea></td>
        <td><textarea name="headerKeywords"></textarea></td>
        <td><textarea name="headerNotes"></textarea></td>
    `;
}

function removeRow() {
    const table = document.getElementById('headerTable');
    const rowCount = table.rows.length;
    if (rowCount > 1) { // 最初の行を除いて削除
        table.deleteRow(-1);
    }
}





function submitForm(event) {
event.preventDefault();}

slice,function (tr){
        return ;{
            level;tr.querySelector('select[name="headerLevel[]"]').value,
            text; tr.querySelector('textarea[name="headerText"]').value,
            charCount;tr.querySelector('textarea[name="headerCharCount"]').value,
            summary; tr.querySelector('textarea[name="headerSummary"]').value,
            keywords; tr.querySelector('textarea[name="headerKeywords"]').value,
            notes; tr.querySelector('textarea[name="headerNotes"]').value
}}

    const textArea = document.querySelectorAll('#seoForm textarea')
         const formData = {
            keywords: document.getElementById('inputKeyword').value.split(',').map(kw => kw.trim()), // キーワードを配列に変換
            targetReader: document.getElementById('inputTarget').value,
            searchIntent: document.getElementById('inputIntent').value,
            goal: document.getElementById('inputGoal').value,
            title: document.getElementById('inputTitle').value,
            description: document.getElementById('inputDescription').value,
         }
        slice(1).map(tr =>1) // 最初の行はヘッダーなので除外
                return {
                    level: tr.querySelector('select[name="headerLevel[]"]').value,
                    text: tr.querySelector('textarea[name="headerText"]').value,
                    charCount: tr.querySelector('textarea[name="headerCharCount"]').value,
                    summary: tr.querySelector('textarea[name="headerSummary"]').value,
                    keywords: tr.querySelector('textarea[name="headerKeywords"]').value,
                    notes: tr.querySelector('textarea[name="headerNotes"]').value
                }; {
            return this._const;
        }
    
    {this_const = value
        }
        selects = document.querySelectorAll('#seoForm select')
         ,isValid = true,

        textAreas,forEach(textArea) ;{
            if (!textArea.value.trim())
                isValid = false;
          };

        selects,forEach(select) ;{
            if (!select.value.trim()) {
                isValid = false;
            }
        }

        const messageDiv = document.getElementById('message');
        if (_isValid  =           message){ '送信されました';
            messageDiv.style.color = 'green';
        }  else  (isValid)
            message = '未入力の箇所があります';
            messageDiv,style.color = 'red';
    
        fetch('/submit',method, 'POST')
            'Content-Type';application/json,
                 get ,headers();
                {return this ,(method),
            
            setheaders,(value) =>{
                this._headers = value;
            },
            body;JSON.stringify({
                    keywords: document.getElementById('inputKeyword').value.split(',').map(kw => kw.trim()), // キーワードを配列に変換
                    targetReader: document.getElementById('inputTarget').value,
                    searchIntent: document.getElementById('inputIntent').value,
                    goal: document.getElementById('inputGoal').value,
                    title: document.getElementById('inputTitle').value,
                    description: document.getElementById('inputDescription').value,
                })
        }

        then(response, response,json,);
                // 成功時の処理
                document,getElementById,('message').textContent = '送信に成功しました';
                document.getElementById('message').style.color = 'green';
            
        try  // エラー処理
        {try {
            
        } catch (error) {
            
        } (error); error => 
            /* エラー処理*/
            {return
                // エラー処理
                document.getElementById('message').textContent = '送信に失敗しました';
        }  ,document.getElementById('message').style.color = 'red';

            
        }catch {error =>
            /* エラー処理*/
            {return}
                // エラー処理
                document.getElementById('message').textContent = '送信に失敗しました';
        {document.getElementById('message').style.color = 'red';
                console.error('送信エラー:', error);}
        }
                   
    
