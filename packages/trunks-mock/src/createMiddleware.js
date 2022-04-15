/*
 * @Author: wangzhijian
 * @Date: 2022-04-16 00:14:29
 * @LastEditTime: 2022-04-16 01:27:26
 */
import { basename } from 'path';
import { winPath } from 'trunks-utils';

export default function() {
    return winPath('src');
}