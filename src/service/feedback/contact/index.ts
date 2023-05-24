import { feedbackRequest } from '../index'
import { JSONStringify } from '@/utils/jsonStr'

const sendFeedbackRequest = (params: any) =>
  feedbackRequest.post({
    url: 'https://api.eportalmobile.com/v1/app_feedback/post',
    params
  })

const sendUserInfoRequest = (data: any) =>
  feedbackRequest.post({
    url: 'https://api.sve.cc/stat/post',
    data: JSONStringify(data)
  })

export { sendFeedbackRequest, sendUserInfoRequest }
