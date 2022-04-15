/*
 * @Author: wangzhijian
 * @Date: 2022-04-16 01:20:02
 * @LastEditTime: 2022-04-16 01:20:02
 */
import slash from 'slash2';

/**
 * Convert Windows backslash paths to slash paths
 * @param path
 */
export default function(path) {
  return slash(path);
}
