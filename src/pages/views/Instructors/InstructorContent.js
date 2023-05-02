import React, { useState } from "react";
import Sort from "../../../assests/images/sort.svg";
import Plus from "../../../assests/images/plus.svg";
import Search from "../../../assests/images/search.svg";
import filter from "../../../assests/images/filter.svg";
import Print from "../../../assests/images/printfull.svg";
import Download from "../../../assests/images/download.svg";
import Delete from "../../../assests/images/delete.svg";
import Edit from "../../../assests/images/edit.svg";
import leftpath from "../../../assests/images/left.png";
import rightpath from "../../../assests/images/right.png";
import Modal from "react-bootstrap/Modal";
import { Dropdown } from "react-bootstrap";
import "./styles/instructor.scss";
import ReactPaginate from "react-paginate";

import dropdown from "../../../assests/images/dropdown.svg";

const data = [
  {
    id: "1",
    teacherName: "Kalai",
    contactNumber: "7305296087",
    assignedClass: "12th",
    assignedSubject: "Math",
    Action: "",
  },
  {
    id: "2",
    teacherName: "Malai",
    contactNumber: "8790875643",
    assignedClass: "9th",
    assignedSubject: "Science",
    Action: "",
  },
  {
    id: "3",
    teacherName: "Malar",
    contactNumber: "9867543465",
    assignedClass: "7th",
    assignedSubject: "Tamil",
    Action: "",
  },
  {
    id: "4",
    teacherName: "Bala",
    contactNumber: "8970564356",
    assignedClass: "9th",
    assignedSubject: "English",
    Action: "",
  },
  {
    id: "5",
    teacherName: "Indhu",
    contactNumber: "8870100111",
    assignedClass: "10th",
    assignedSubject: "Science",
    Action: "",
  },
  {
    id: "6",
    teacherName: "Seenu",
    contactNumber: "9791837486",
    assignedClass: "11th",
    assignedSubject: "English",
    Action: "",
  },
  {
    id: "7",
    teacherName: "Manoj",
    contactNumber: "9842134487",
    assignedClass: "9th",
    assignedSubject: "Tamil",
    Action: "",
  },
];

function InstructorContent() {
  const [search, setSearch] = useState("");

  const [posts, setposts] = useState(data.slice(0, 20));

  const [pageNumber, setPageNumber] = useState(0);

  const userperPage = 5;

  const pagesVisited = pageNumber * userperPage;

  const pageCount = Math.ceil(posts.length / userperPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [math, setMath] = useState(false);

  return (
    <div className="instructor-content-main-container">
      <div className="instructor-content-main-container-1">
        <div className="instructor-content-sub-container-0">
          <button
            className="instructor-content-sub-container"
            onClick={handleShow}
          >
            <div className="instructor-content-sub-container-1">
              <img src={Plus} alt="Plus" />
              <p className="sub-container-para-1">Teacher</p>
            </div>
          </button>
        </div>
        <div className="sub-container-main-0">
          <div className="sub-container-main-1">
            <input
              className="sub-container-main-input"
              type="search"
              id="gsearch"
              name="gsearch"
              onChange={(e) => setSearch(e.target.value)}
              style={{ cursor: "pointer" }}
            />
            <img
              className="img-search-instructor"
              style={{ cursor: "pointer" }}
              src={Search}
              alt="Search"
            />
          </div>
          <div className="sub-img-container">
            <img
              className="container-img-sub-1"
              src={Sort}
              alt="Sort"
              style={{ cursor: "pointer" }}
            />
            <img
              className="container-img-sub-1"
              src={filter}
              alt="Sort"
              style={{ cursor: "pointer" }}
            />
            <img
              className="container-img-sub-1"
              src={Download}
              alt="Sort"
              style={{ cursor: "pointer" }}
            />
            <img src={Print} alt="Sort" style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <div className="instructor-table-main-container-0">
        <table className="instructor-table-container-1">
          <tbody>
            <tr className="instructor-table-tr">
              <th className="instructor-table-th">S.no</th>
              <th className="instructor-table-th">Teacher Name</th>
              <th className="instructor-table-th">Contact Number</th>
              <th className="instructor-table-th">Assigned Class</th>
              <th className="instructor-table-th">Assigned Subject</th>
              <th className="instructor-table-th">Actions</th>
            </tr>
            {posts
              .slice(pagesVisited, pagesVisited + userperPage)

              .filter((value) => {
                return search.toLowerCase() === ""
                  ? value
                  : value.teacherName.toLowerCase().includes(search) ||
                      value.Action.toLowerCase().includes(search) ||
                      value.assignedSubject.toLowerCase().includes(search) ||
                      value.assignedClass.toLowerCase().includes(search) ||
                      value.contactNumber.toLowerCase().includes(search) ||
                      value.id.toLowerCase().includes(search);
              })
              .map((value) => {
                return (
                  <tr className="table-map-tr-0" key={value.id}>
                    <td className="table-map-tr-1">{value.id}</td>
                    <td className="table-map-tr-2">{value.teacherName}</td>
                    <td className="table-map-tr-2">{value.contactNumber}</td>
                    <td className="table-map-tr-2">
                      <div className="table-map-tr-3">
                        {value.assignedClass}
                      </div>
                    </td>
                    <td className="table-map-tr-4">
                      <div className="table-map-tr-5">
                        {value.assignedSubject}
                      </div>
                    </td>
                    <td className="table-map-tr-6">
                      <img
                        className="img-edit"
                        onClick={handleShow}
                        src={Edit}
                        alt="Edit"
                        style={{ cursor: "pointer" }}
                      />
                      <img
                        className="img-edit"
                        style={{ cursor: "pointer" }}
                        src={Delete}
                        alt="delete"
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <div className="mt-5" style={{ marginRight: "35px" }}>
        <ReactPaginate
          previousLabel={<img src={leftpath} />}
          nextLabel={<img src={rightpath} />}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
      {/* <div className="instructor-pagination-1">
        <div>
          <img src={leftpath} alt="left" />
          <img src={leftpath} alt="left" />
        </div>
        <div className="instructor-pagination-2">
          <p className="instructor-pagination-3">1</p>
          <p className="instructor-pagination-4">2</p>
          <p className="instructor-pagination-4">3</p>
          <p className="instructor-pagination-4">4</p>
          <p className="instructor-pagination-4">5</p>
        </div>
        <div>
          <img src={rightpath} alt="right" />
          <img src={rightpath} alt="right" />
        </div>
      </div> */}
      <Modal
        className="modal-instructor-container-1"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body>
          <div className="modal-instructor-container-2">
            <div className="d-flex justify-content-between">
              <p className="instructor-para">Add Teachers</p>

              <div>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ border: "none", background: "white" }}
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div className="w-100">
              <p className="para-modal-name">Name</p>
              <input className="modal-input-jeni" value="Jenita" type="text" />
            </div>
            <div className="w-100">
              <p className="para-modal-name">Mobile Number</p>
              <input className="input-num" value="7305296087" type="number" />
            </div>
            <div className="w-100">
              <p className="para-modal-name">Select Class</p>
              <div className="select-main-1">
                <input value="12th" className="input-12th" type="text" />
                <Dropdown>
                  <Dropdown.Toggle className="drop-instructor-main-1">
                    <img src={dropdown} alt="dropdown" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="dropdown-menu-instructor">
                    <Dropdown.Item>12th</Dropdown.Item>
                    <Dropdown.Item className="item-1">11th</Dropdown.Item>
                    <Dropdown.Item>10th</Dropdown.Item>
                    <Dropdown.Item className="item-2">9th</Dropdown.Item>
                    <Dropdown.Item className="item-2">8th</Dropdown.Item>
                    <Dropdown.Item className="item-2">7th</Dropdown.Item>
                    <Dropdown.Item className="item-2">6th</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <div>
                <p className="assign-para">Assign Subject</p>
              </div>
              <div className="d-flex">
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="math"
                      value={math}
                      onChange={(e) => setMath(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="math">
                      Mathematics
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="math"
                      value={math}
                      onChange={(e) => setMath(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="math">
                      Physics
                    </label>
                  </div>
                </div>
                <div className="modal-check-form">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="math"
                      value={math}
                      onChange={(e) => setMath(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="math">
                      Chemistry
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="math"
                      value={math}
                      onChange={(e) => setMath(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="math">
                      Biology
                    </label>
                  </div>
                </div>
              </div>
              <div className="modal-data-1">
                <div>
                  <button className="modal-data-2">Add</button>
                </div>
                <div>
                  <button className="modal-data-3">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default InstructorContent;
