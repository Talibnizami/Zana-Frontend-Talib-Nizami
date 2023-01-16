import React, { useEffect, useState } from "react";
import { Image, Row, Col, Form } from "react-bootstrap";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import EVO_LOGO from "../../assets/images/evo-logo.png";
import ADMIN_IMAGE from "../../assets/images/admin-image.png";
import {
  IoPeopleSharp,
  IoTriangleSharp,
  IoBarbellSharp,
} from "react-icons/io5";
import MADE_BY_WOIT from "../../assets/images/made-by-woit.png";
import CustomModal from "../../components/modal/Modal";
import Button from "../button/Button";
import { deleteToken, deleteEmail } from "../../utils/Token";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";
import TextInputBorderless from "../Input/text/TextInputBorderless";
import { useFormik } from "formik";
import { validationSchema } from "./schema/EditProfileSchema";
import ErrorMessage from "../errorMsg/ErrorMessage";
import actions from "../../actions";
import { getEmail } from "../../utils/Token";
import { useDispatch, useSelector } from "react-redux";

const NAVIGATION_LIST = [
  {
    icon: <IoPeopleSharp />,
    name: "Clients",
    childrens: [
      { name: "My Clients", route: "/client" },
      { name: "Members", route: "/member" },
    ],
  },
  {
    icon: <IoBarbellSharp />,
    name: "Program",
    childrens: [{ name: "Program", route: "/program" }],
  },
  {
    icon: <IoBarbellSharp />,
    name: "Test",
    childrens: [
      { name: "Create Test", route: "/test/create-test" },
      { name: "Run Speed Test", route: "/test/run-speed-test" },
      { name: "Result", route: "/test/test" },
    ],
  },
];

const Sidebar = (_) => {
  const [showExtraFunction, setShowExtraFunction] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);

  const dispatch = useDispatch();

  const userInfoRes = useSelector((state) => state.AUTH.userInfo);

  useEffect(() => {
    dispatch(actions.userInfo(getEmail()));
  }, []);

  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      dob: "",
      phone: "",
      email: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const formData = {};
    },
    validationSchema,
  });

  const onOpenExtraFunction = () => {
    setShowExtraFunction(!showExtraFunction);
  };

  const onShowModal = () => {
    setShowEditProfileModal(!showEditProfileModal);
  };

  const logout = () => {
    deleteToken();
    deleteEmail();
    history.push("/login");
  };

  return (
    <div className="sidebar-container">
      <h3>AdminPlatform</h3>
      {/* <Image src={EVO_LOGO} /> */}
      <Image src={ADMIN_IMAGE} rounded />
      <div className="mb-5 d-flex">
        <h4>
          {userInfoRes.data?.first_name} {userInfoRes.data?.last_name}
        </h4>
        <div
          className="edit-profile-icon-container position-relative"
          onClick={onOpenExtraFunction}
        >
          <HiOutlineDotsVertical />
          {showExtraFunction && (
            <div className="profile-extra-function-container">
              <a onClick={onShowModal}>Edit Profile</a>
              <br />
              <a onClick={logout}>Logout</a>
            </div>
          )}
        </div>
      </div>

      {NAVIGATION_LIST.map((category) => {
        return (
          <div className="menu-container-background w-100 mb-2">
            <a
              className="d-flex flex-column justify-content-center align-items-center menu-container"
              data-bs-toggle="collapse"
              href={`#nav-dropdown-${category.name}`}
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <div>
                <IoPeopleSharp />
                <div>{category.name}</div>
                <IoTriangleSharp style={{ transform: "rotate(180deg)" }} />
              </div>
            </a>
            <div
              className="collapse w-100"
              id={`nav-dropdown-${category.name}`}
            >
              <div className="card card-body test-detail-collapse">
                <div id="clients-menu">
                  {category.childrens.map((children) => {
                    return (
                      <div className="text-white">
                        <IoPeopleSharp style={{ visibility: "hidden" }} />
                        <NavLink
                          to={children.route || ""}
                          className="text-decoration-none text-white mt-1 mb-1"
                        >
                          {children.name}
                        </NavLink>
                        <IoTriangleSharp style={{ visibility: "hidden" }} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <CustomModal
        show={showEditProfileModal}
        onOpenClose={onShowModal}
        title="Edit my profile"
        bodyStyle={{ padding: "50px" }}
      >
        <div className="profile-form-container">
          <form onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <TextInputBorderless
                  id="firstname"
                  label="first name"
                  direction="column"
                  inputStyle={{ width: "80%" }}
                  {...formik.getFieldProps("firstname")}
                />
                {formik.touched.firstname && formik.errors.firstname && (
                  <ErrorMessage message={formik.errors.firstname} />
                )}
                <TextInputBorderless
                  id="dob"
                  label="dob"
                  direction="column"
                  inputStyle={{ width: "80%" }}
                  {...formik.getFieldProps("dob")}
                />
                {formik.touched.dob && formik.errors.dob && (
                  <ErrorMessage message={formik.errors.dob} />
                )}
                <TextInputBorderless
                  id="phone"
                  label="phone"
                  direction="column"
                  inputStyle={{ width: "80%" }}
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone && (
                  <ErrorMessage message={formik.errors.phone} />
                )}
              </Col>
              <Col>
                <TextInputBorderless
                  id="lastname"
                  label="last name"
                  direction="column"
                  inputStyle={{ width: "80%" }}
                  {...formik.getFieldProps("lastname")}
                />
                {formik.touched.lastname && formik.errors.lastname && (
                  <ErrorMessage message={formik.errors.lastname} />
                )}
                <TextInputBorderless
                  id="email"
                  label="email"
                  direction="column"
                  inputStyle={{ width: "80%" }}
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <ErrorMessage message={formik.errors.email} />
                )}
                {/* <Image src={ADMIN_IMAGE} className="mb-3" /> */}
                <br />
                <Button name="Save Profile" />
              </Col>
            </Row>
          </form>
        </div>

        <h3>Edit Password</h3>
        <div className="profile-form-container">
          <Row>
            <Col>
              <Form.Group as={Col} md="10" controlId="validationCustom01">
                <Form.Label>Old Password:</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Old Password"
                />
              </Form.Group>
              <Button className="mt-4" name="Save password" />
            </Col>
            <Col>
              <Form.Group
                as={Col}
                md="10"
                className="mb-4"
                controlId="validationCustom01"
              >
                <Form.Label>New Password:</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="New Password"
                />
              </Form.Group>
              <Form.Group as={Col} md="10" controlId="validationCustom01">
                <Form.Label>Repeat New Password:</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Repeat New Password"
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
      </CustomModal>
      {/* <Image src={MADE_BY_WOIT} /> */}
    </div>
  );
};

export default React.memo(Sidebar);
