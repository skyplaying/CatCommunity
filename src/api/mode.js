/**   
 * api接口统一管理
 */
import {
    get,
    post
} from '../api/http'

export const bbsBoard_List = p => post('common', p)