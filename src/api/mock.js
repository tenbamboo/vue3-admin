import request from '@/utils/resource/baseRequest';

export const fetchTableData = query => {
    return request({
        url: 'mock/table.json',
        method: 'get',
        params: query
    });
};

export const fetchMenuData = userInfo => {
    return request({
        url: 'mock/menu.json',
        method: 'get',
        params: userInfo
    }).then((res) => {
        // DEMO 使用，正常逻辑应在后端处理
        if (userInfo.userRole.includes('root')) {
            return res.rootMenu
        } else if (userInfo.userRole.includes('employe')) {
            return res.employeMenu
        }
    });
};

export const fetchProcessData = query => {
    return request({
        url: 'mock/process.json',
        method: 'get',
        params: query
    });
};
export const fetchReadData = query => {
    return request({
        url: 'mock/read.json',
        method: 'get',
        params: query
    });
};

export const fetchLoginUserData = query => {
    return request({
        url: 'mock/user.json',
        method: 'get',
        params: query
    }).then(res => res.list.find(item => item.loginName === query.loginName));
};

export default {
    fetchTableData,
    fetchMenuData,
    fetchProcessData,
    fetchReadData,
    fetchLoginUserData
}
