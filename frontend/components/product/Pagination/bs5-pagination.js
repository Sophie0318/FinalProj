// boostrap5 sytle pagination
import ReactPaginate from 'react-paginate'
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md'

export default function BS5Pagination({ forcePage, onPageChange, totalRows }) {
  return (
    <ReactPaginate
      forcePage={forcePage}
      // nextLabel="下一頁 >"
      nextLabel={<MdNavigateNext />}
      onPageChange={onPageChange}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={totalRows}
      // previousLabel="< 上一頁"
      previousLabel={<MdNavigateBefore />}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  )
}
