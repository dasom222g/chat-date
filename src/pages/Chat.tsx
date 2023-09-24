import React from 'react'
import MessageBox from '../components/MessageBox'
import { messages } from '../data/response'

const Chat = (): JSX.Element => {
  return (
    <div className="w-full h-full px-6 pt-10 break-keep overflow-auto">
      {/* START:뒤로가기 버튼 */}
      <button type="button" className="text-none absolute top-6 left-4 px-4 py-2">
        <img src="./images/arrow-prev.svg" alt="뒤로가기" className="block" />
        뒤로가기
      </button>
      {/* END:뒤로가기 버튼 */}
      <div className="h-full flex flex-col">
        {/* START:헤더 영역 */}
        <div className="-mx-6 -mt-10 py-7 bg-date-blue-600">
          <span className="block text-xl text-center text-white">홍길동</span>
        </div>
        {/* END:헤더 영역 */}
        {/* START:채팅 영역 */}
        <div className="overflow-auto">
          <MessageBox messages={messages} />
        </div>
        {/* END:채팅 영역 */}
        {/* START:메시지 입력 영역 */}
        <div className="mt-auto flex py-5 -mx-2 border-t border-gray-100">
          <div className="w-full px-2 h-full">
            <input
              className="w-full text-sm px-3 py-2 h-full block rounded-xl bg-gray-100 focus:"
              type="text"
            />
          </div>
          <button
            type="button"
            className="w-10 min-w-10 h-10 inline-block rounded-full bg-date-blue-600 text-none px-2 bg-[url('../public/images/send.svg')] bg-no-repeat bg-center">
            보내기
          </button>
        </div>
        {/* END:메시지 입력 영역 */}
      </div>
    </div>
  )
}

export default Chat
