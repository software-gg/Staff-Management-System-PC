export function shuffle() {
    var arr = ['1', 'r', 'Q', '4', 'S', '6', 'w', 'u', 'D', 'I', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
        'q', '2', 's', 't', '8', 'v', '7', 'x', 'y', 'z', 'A', 'B', 'C', '9', 'E', 'F', 'G', 'H', '0', 'J', 'K', 'L', 'M', 'N', 'O', 'P', '3', 'R',
        '5', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    return arr.sort(function () {
        return (Math.random() - .5);
    });
}

export function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);//search,查询？后面的参数，并匹配正则
    if (r != null)
        return unescape(r[2]);
    return null;
}

export function formatTime(date) {
    if (!date)
        return '';
    date = new Date(date);
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : '0' + n
}

export function calLastMonth(current) {
    const nowMonthArr = current.split('-');
    let [year, month, day] = nowMonthArr;
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    if (month === 1) {
        year = year - 1;
        month = 12
    } else {
        month = month - 1;
    }

    return [year, month, day].join('-');
}

export function calNextMonth(current) {
    const nowMonthArr = current.split('-');
    let [year, month, day] = nowMonthArr;
    year = parseInt(year);
    month = parseInt(month);
    day = parseInt(day);
    if (month === 12) {
        year = year + 1;
        month = 1
    } else {
        month = month + 1;
    }

    return [year, month, day].join('-');
}

export function colorRender(str) {
    const decode = {
        wait: 'blue',
        pass: 'green',
        fail: 'red',
        ordinary: 'green',
        extra: 'green',
        temp: 'green',
        on: 'green',
        off: 'green',
        early: 'red',
        late: 'red'
    };
    // console.log(str, decode[str]);
    return decode[str];
}

export function decoder(str) {
    const decode = {
        wait: '待审核',
        pass: '已通过',
        fail: '未通过',
        ordinary: '正常上班',
        extra: '部门加班',
        temp: '临时加班',
        on: '上班打卡',
        off: '下班打卡',
        early: '早退',
        late: '迟到',
        employee: '员工',
        director: '部门主管',
        boss: '经理'
    };
    // console.log(str, decode[str]);
    return decode[str];
}

