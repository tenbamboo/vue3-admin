import request from '@/utils/resource/baseRequest';

export const fetchTableData = query => {
    return request({
        url: 'mock/table.json',
        method: 'get',
        params: query
    });
};

export const fetchMenuData = query => {
    return request({
        url: 'mock/menu.json',
        method: 'get',
        params: query
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

export default {
    fetchTableData,
    fetchMenuData,
    fetchProcessData,
    fetchReadData
}
