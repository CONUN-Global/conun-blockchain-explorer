import { NavLink, useLocation } from "react-router-dom"
import "./SearchError.css"

export const SearchError = () => {
  const query = new URLSearchParams(useLocation().search)
  let errorTitle = "",
    content: any = ""

  if (query.get("type") === "invalid_search") {
    errorTitle = "Invalid Search"
    content = (
      <div className="search-error-message">
        <div className="search-error-title">Search terms:</div>
        <div className="search-error-highlight">{query.get("terms")}</div>
        <div>Your search returned no results.</div>
      </div>
    )
  }

  return (
    <div className="section-block section-full">
      <section className="section-centered">
        <div className="details-table">
          <div className="details-table-header search-error-header">
            <h2>Error: {errorTitle}</h2>
            <div className="details-table-links-box">
              <div className="details-table-header-link">
                <NavLink to="/">
                  <i className="fas fa-home"></i>
                </NavLink>
              </div>
            </div>
          </div>

          <div className="search-error-main">{content}</div>
        </div>
      </section>
    </div>
  )
}
