import '/src/styles/globals.css';
import Sidebar from '../sidebar';

export default function inventoryAdd() {
  return (
    <>
      <Sidebar />
      <div className="main-container">
        <div className='mb-5 text-2xl font-medium'>추가할 차 정보를 입력해 주세요.</div>
        <form>
          <div className='flex gap-40'>
            <div className='w-1/2 flex flex-col gap-8'>
              <div className='flex flex-col'>
                <span>브랜드</span>
                <input name='brand'></input>
              </div>
              <div className='flex flex-col'>
                <span>제품명</span>
                <input name='name'></input>
              </div>
              <div>
                <span>티백 </span>
                <input name='packagingtype' type='radio' checked className='mr-7'></input>
                <span>잎차 </span>
                <input name='packagingtype' type='radio'></input>
              </div>
              <div>
                <span>개수 : </span>
                <input name='amount' className='w-10'></input>
                <span>개</span>
              </div>
              <div className='flex flex-col'>
                <span>유통기한</span>
                <div>
                  <input name='year' className='w-10'></input>
                  <span className='mr-5'>년</span>
                  <input name='month' className='w-10'></input>
                  <span className='mr-5'>월</span>
                  <input name='day' className='w-10'></input>
                  <span className='mr-5'>일</span>
                </div>
              </div>
              <div>
                <span>차 종류</span>
                <select name='type'>
                  <option value="greentea">녹차</option>
                  <option value="blacktea">홍차</option>
                  <option value="herbtea">허브티</option>
                  <option value="whitetea">백차</option>
                  <option value="oolongtea">청차(우롱)</option>
                  <option value="yellowtea">황차</option>
                  <option value="darktea">흑차</option>
                  <option value="none">그 외(모름)</option>
                </select>
              </div>
            </div>
            <div className='w-1/2 flex flex-col gap-8'>
              <div className='mb-10 text-lg font-medium'>
                아래 항목부터는 필수 입력 사항이 아니지만, <br/>입력시 티 타이머와 재고 관리를 연동할 수 있어요.
              </div>
              <div>
                <span>우림 시간 : </span>
                <input name='minute' className='w-10'></input>
                <span className='mr-5'>분</span>
                <input name='second' className='w-10'></input>
                <span>초</span>
              </div>
              <div>
                <span>권장 물 온도 : </span>
                <input name='temperature' className='w-12'></input>
                <span>C</span>
              </div>
              <div>
                <span>1잔당 찻잎 권장량 : </span>
                <input name='quantity' className='w-12'></input>
                <span>C</span>
              </div>
            </div>
          </div>

          <div className='flex flex-row justify-evenly mt-10'>
            <button
              className="mt-4 w-1/4 rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-600 focus:shadow-none active:bg-green-700 hover:bg-green-600 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10"
              type="submit"
            >
              추가하기
            </button>
            <button
              className="mt-4 w-1/4 rounded-md bg-slate-300 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-400 focus:shadow-none active:bg-slate-500 hover:bg-slate-400 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mt-10" 
              type='reset'
            >취소</button>
          </div>
        </form>
      </div>
    </>
  );
}