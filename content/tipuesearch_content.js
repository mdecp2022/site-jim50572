var tipuesearch = {"pages": [{'title': 'About', 'text': '41123110吳浚瑋 \n github倉儲: https://github.com/mdecp2022/site-jim50572 \n cmsite: wcms use  https://github.com/mdecycu/cmsimde  as submodule \n', 'tags': '', 'url': 'About.html'}, {'title': '成績', 'text': '', 'tags': '', 'url': '成績.html'}, {'title': 'w10', 'text': 'here \n \n', 'tags': '', 'url': 'w10.html'}, {'title': 'HW', 'text': '', 'tags': '', 'url': 'HW.html'}, {'title': 'W5', 'text': 'w5亂碼 \n', 'tags': '', 'url': 'W5.html'}, {'title': 'W6', 'text': '抽點 \n \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n \n  ######################  editor1 開始 ######################  \n  用來顯示程式碼的 editor 區域  \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n  這裡的畫布 id 為 brython_div  \n', 'tags': '', 'url': 'W6.html'}, {'title': 'W10', 'text': '', 'tags': '', 'url': 'W10.html'}, {'title': '作業程式', 'text': '點這裡 w10 hw1 \n  ######################  editor1 結束 ######################  \n  以下可以開始利用 editor1 的設定編寫對應 Brython 程式  \n \n  以上為內建程式, 頁面可透過 ?src=gist_url 執行  \n  add 1 to 100 開始  \n \n \n', 'tags': '', 'url': '作業程式.html'}, {'title': 'W11', 'text': '點這裡 1b成績 \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W13', 'text': '溫度轉換 \n here \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14', 'text': '', 'tags': '', 'url': 'W14.html'}, {'title': '物件導向設計的學員名單與成績擷取', 'text': '點此執行 \n', 'tags': '', 'url': '物件導向設計的學員名單與成績擷取.html'}, {'title': 'W15', 'text': '1.為何學習計算機程式需要建立個人倉儲? \n 用於建立並學習架設個人靜態網站和動態網站 \n 2.全球資訊網能夠提供甚麼功能或有甚麼優點? \n 可以尋找不同種類的資訊 \n 3.Repit,stud.cycu.org與localhost分別代表什麼? \n replit可以進行線上程式開發、stud.cycu.org為遠端維護網站、localhost為近端維護網 \n 4.https, ssh 到底提供使用者那些功能或優點? \n 能在遠端連線到伺服器 \n 5.Brython 與 Python 有甚麼差別? \n Brython係指在網站上使用Python指令來執行 \n 6.能夠直接在瀏覽器中以 Brython 繪製中華民國國旗, 或模擬綠色方塊在方塊格點中任意移動, 代表甚麼? \n 能繪製出想要的圖形 \n 7.變數, 字串, 整數, 浮點數, 數列, Tuple, Dictionary, 函式, 重複迴圈, class, 物件導向, 資料庫, 這些名詞對您而言代表甚麼? \n 程式語言的運用工具,使用並善加利用能在寫程式時更加便利 \n rect walk點這裡 \n rect walk-1 方塊 \n', 'tags': '', 'url': 'W15.html'}, {'title': 'w17', 'text': '函式定義與呼叫 \n 累加 \n def sumto(start=1, end=10):\n    sum = 0\n    #start = 1\n    #end = 100\n    for i in range(1,end+1,1):\n        sum = sum + i\n        #print(i)\n    print("由" + str(start) + " 加到 " + str(end) + " 等於:" + str(sum))\n    \n    \nsumto() \n 單位換算 \n def length(inch):\n    #sum = 0\n    #start = 1\n    #end = 100\n    \'\'\'\n    for i in range(1,end+1,1):\n        sum = sum + i\n        #print(i)\n    print("由" + str(start) + " 加到 " + str(end) + " 等於:" + str(sum))\n    \'\'\'\n    cm = inch * 2.54\n    print(cm)\n    \n    \n\'\'\'    \nsumto()\n\'\'\'\nlength(1) \n 列出 Python 關鍵字: \n import keyword\nprint(keyword.kwlist)\n\'\'\'\n[\'False\', \'None\', \'True\', \'and\', \'as\', \'assert\', \'async\', \'await\', \'break\', \'class\', \'continue\', \'def\', \'del\', \'elif\', \'else\', \'except\', \'finally\', \'for\', \'from\', \'global\', \'if\', \'import\', \'in\', \'is\', \'lambda\', \'nonlocal\', \'not\', \'or\', \'pass\', \'raise\', \'return\', \'try\', \'while\', \'with\', \'yield\']\n\'\'\' \n \n', 'tags': '', 'url': 'w17.html'}, {'title': '心得', 'text': '大一生活啟程後，其中讓我最沒頭緒的就非計算機程式莫屬了，計算機程式是用來做甚麼的?快到期末了我到現在還是無法給出確切答案...但我知道沒學好這門課吃虧的一定是自己，將來出社會，也許這門課也會派上用場，多學一點就是投資自己最好的方式。 \n', 'tags': '', 'url': '心得.html'}, {'title': 'cp2022-1', 'text': '執行 \n', 'tags': '', 'url': 'cp2022-1.html'}, {'title': 'cp2022', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'cp2022.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt \xa0 動態頁面超文件). \n practice_html.txt \xa0 動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為 \xa0 class \xa0 後, 在範例導入時透過 \xa0 instance \xa0 引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator \xa0 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n \n \n \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n \n \n \n \n \n \n \n \n Filename: \xa0 .py \xa0 \n \n \n \n Run \xa0 Output \xa0 清除輸出區 清除繪圖區 Reload \n \n \n \n \n \n \n \n \n \n \n \n \n \n https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};