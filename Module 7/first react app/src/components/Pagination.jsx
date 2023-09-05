// generic pagination component, displays previous and next buttons
function Pagination({currentPage, hasNextPage = true, onPageChange}) {
    const prevPage = currentPage === 1 ? null : <button onClick={() => onPageChange(currentPage - 1)}>Previous Page</button>;
    const nextPage = hasNextPage ? <button onClick={() => onPageChange(currentPage + 1)}>Next Page</button> : null;

    return (
        <div className="Pagination">
            {prevPage}
            <span className="current"> {currentPage} </span>
            {nextPage}
        </div>
    )
}

export default Pagination;