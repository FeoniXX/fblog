import Axios from "axios";

// 格式化时间戳
function formatTimeStamp(mss) {
    let sec = pad(Math.floor((mss % (1000 * 60)) / 1000), 2); // 秒
    let min = pad(Math.floor((mss % (1000 * 60 * 60)) / (1000 * 60)), 2); // 分
    let hour = pad(
        Math.floor((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        2
    ); // 时
    let day = pad(Math.floor(mss / (1000 * 60 * 60 * 24)), 2); // 天数

    return {
        sec,
        min,
        hour,
        day
    };
}

function formatDate(date = new Date) {
    let day = pad(date.getDate(), 2);
    let month = pad(date.getMonth() + 1, 2);
    let year = date.getFullYear();

    return {
        year,
        month,
        day
    }
}

// 数字前补零
function pad(num, len) {
    let length = num.toString().length;
    while (length < len) {
        num = "0" + num;
        length++;
    }
    return num;
}

// 复制追加版权信息
function addCopyRight() {
    let href = document.location.href;
    let body_element = document.getElementsByTagName("body")[0];
    let selection = window.getSelection();
    let pageInfo = `<br>---------------------<br>版权声明：本文由Fblog博客版权所有，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。<br>原文链接：${href}<br><br>`;
    let copyText = selection.toString()
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>")
        .replace(/\s/g, "&nbsp;") + pageInfo;
    let newDiv = document.createElement("div");
    newDiv.style.position = "absolute";
    newDiv.style.left = "-99999px";
    body_element.appendChild(newDiv);
    newDiv.innerHTML = copyText;
    selection.selectAllChildren(newDiv);
    window.setTimeout(() => {
        body_element.removeChild(newDiv);
    }, 0);
}

export {
    formatTimeStamp,
    formatDate,
    pad,
    addCopyRight
};
