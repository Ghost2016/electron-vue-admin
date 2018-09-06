import request from '@/utils/request'

export const getUserSig = (id) => {
  const _id = id;
  return request({
    url: `http://118.24.187.152:30001/sig/hash/${_id}`,
    method: 'get',
  })
}