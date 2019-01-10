This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
This Todolist App use react syntax and manage state between components<br>
Try this app [here](https://brianwu291.github.io/todo/).

## Available Scripts
First, run npm install, then in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Project Structure`

This is a simple App. You can click the button, and the bar will show random number.

```
├── README.md                         # 說明文件
├── package.json                      # 各種 package 的相依套件紀錄....
├── /src                              # Source Code
│    ├── index.js                     # Endpoint
│    └── /components                  # 元件資料夾
│         ├── App.js                  # 頂層元件，負責集合所有子元件
│         ├── CreateBar.js            # Input 元件，負責輸入事項
│         ├── ItemList.js             # 負責 render 所有待辦事項元件
│         └── /todoItems              # 事項元件資料夾
│              ├── Content.js         # 負責 render 事項內容
│              ├── DeleteButton.js    # 刪除事項按鈕
│              └── Item.js            # 事項元件，負責集合刪除按鈕和事項內容
└── /public
     ├── favicon.ico                  # 網頁圖示
     └── index.html                   # 網頁templete
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Reduc, check out the [Redux documentation](https://redux.js.org/basics/basic-tutorial).