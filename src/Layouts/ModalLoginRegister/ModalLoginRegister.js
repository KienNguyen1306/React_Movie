// ------------------------- react hoot -----------------
import { useState } from "react";
// ------------------------- redux ----------------------
import { useDispatch, useSelector } from "react-redux";
// ------------------------- action ---------------------
import {
  actToggleModal,
  actMessage,
  actToogleloading,
  actLoginAsync,
  actRegisterUserAsync,
} from "../../Redux/Actions";

// ------------------------- css ------------------------
import "./ModalLoginRegister.css";
// ---------------------------- component ---------------
import Heading from "../../Components/Shared/Heading/Heading";
import Button from "../../Components/Shared/Button/Button";
import { useEffect } from "react";
import Input from "../../Components/Shared/Input/Input";

function ModalLoginRegister() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [show, Setshow] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setIputValue] = useState({
    username: "",
    password: "",
    retypePassword: "",
    email: "",
  });

  // redux
  const { error, messageError } = useSelector((state) => state.UserReducer);
  const isShowModal = useSelector((state) => state.ShowReducer.isModal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      dispatch(actToogleloading(false));
    }
  }, [dispatch, error]);

  // chuyển from
  function handelNextFrom() {
    Setshow(!show);
  }

  // hover dropdowwn
  const handleShowModel = () => {
    dispatch(actToggleModal());
  };

  // handleOchangInput

  function handelOnchangInput(e) {
    const { name, value } = e.target;
    setIputValue({ ...inputValue, [name]: value });
  }

  //show passwork
  const handleCheckboxClick = () => {
    setShowPassword(!showPassword); // toggle showPassword state
  };

  //login user
  function handlelLogin(event) {
    event.preventDefault();
    if (isShowModal) {
      setIsLoading(true);
      dispatch(actLoginAsync(inputValue)).then((res) => {
        if (res === 200) {
          setIsLoading(false);
          dispatch(actToggleModal());
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      });
    }
  }

  //redister
  function handelRegister() {
    if (checkvalidater()) {
      dispatch(actMessage({}));
      let data = {
        username: inputValue.username,
        password: inputValue.password,
        email: inputValue.email,
      };
      setIsLoading(true);
      dispatch(actRegisterUserAsync(data)).then((res) => {
        if (res.code === 400) {
          dispatch(
            actMessage({
              email: res.error.email && "Email đã có người suer dụng",
              username: res.error.username && "Username đã có người suer dụng",
            })
          );
        } else {
          dispatch(actToggleModal());
        }
        setIsLoading(false);
      });
      dispatch(actToogleloading(true));
    }
  }

  //check validater
  function checkvalidater() {
    let errors = {};
    let valid = true;
    const regex = /^(?=.*[A-Za-z])(?=.*\d).*?$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(inputValue.username)) {
      errors.username = "Tên người dùng chỉ có thể chứa các chữ cái và số!";
      valid = false;
    }
    if (inputValue.password.length < 8) {
      errors.password = "Mật khẩu phải dài ít nhất 8 ký tự!";
      valid = false;
    }
    if (inputValue.password !== inputValue.retypePassword) {
      errors.retypePassword = "Mật khẩu không trùng khớp";
      valid = false;
    }
    if (!regexEmail.test(inputValue.email)) {
      errors.email = "Email không hợp lệ";
      valid = false;
    }
    dispatch(actMessage(errors));

    return valid;
  }

  return (
    <section className="overwrite">
      <div className="modal">
        {show ? (
          <Heading
            title="Register"
            type="heading-default"
            isButton={false}
          ></Heading>
        ) : (
          <Heading
            title="Đăng nhập"
            type="heading-default"
            isButton={false}
          ></Heading>
        )}
        {isError && (
          <p className="error">Tên tài khoản or mật khẩu không chính xác</p>
        )}

        <form className="modal-form" onSubmit={handlelLogin}>
          {/* = tên đăng nhạp ========= */}
          <Input
            label="Tên đăng nhập"
            messageError={messageError.username}
            type="text"
            name="username"
            value={inputValue.username}
            onChange={handelOnchangInput}
          />
          {/* ===== password=========== */}
          <Input
            label="Mật khẩu"
            messageError={messageError.password}
            type={showPassword ? "text" : "password"}
            value={inputValue.password}
            name="password"
            onChange={handelOnchangInput}
          />

          {/* ====== nhập lại mật khẩu ============ */}
          {show && (
            <Input
              label="Nhập lại mật khẩu"
              messageError={messageError.retypePassword}
              type="password"
              value={inputValue.retypePassword}
              name="retypePassword"
              onChange={handelOnchangInput}
            />
          )}

          {/* ====== email ============ */}
          {show && (
            <Input
              label="Email"
              messageError={messageError.email}
              type="email"
              value={inputValue.email}
              name="email"
              onChange={handelOnchangInput}
            />
          )}

          {/* ====rememberLogin && open password ==== */}
          {show ? (
            <div className="rememberLogin">
              <input type="checkbox" />
              <label>Nhớ Đăng nhập</label>
            </div>
          ) : (
            <div className="rememberLogin">
              <input type="checkbox" onClick={handleCheckboxClick} />
              <label>Hiển thị mật khẩu</label>
            </div>
          )}
          {/* ================= quên mật khẩu && chuyển from ========= */}
          <div className="forgot-password">
            <p>
              Quên mật khẩu{" "}
              {show ? (
                <span onClick={handelNextFrom}>Đăng nhập</span>
              ) : (
                <span onClick={handelNextFrom}>Đăng kí</span>
              )}
            </p>
          </div>

          {/* ============ button login && register ===== */}
          {show ? (
            <Button
              type="btn-default-login"
              className="with-100"
              onClick={handelRegister}
            >
              {isLoading ? <span className="loader"></span> : "Register"}
            </Button>
          ) : (
            <Button
              type="btn-default-login"
              className="with-100"
              htmlType="submit"
            >
              {isLoading ? <div className="loader"></div> : "Login"}
            </Button>
          )}

          <Button
            type="btn-default-cancel"
            className="with-100"
            onClick={handleShowModel}
          >
            Cancel
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ModalLoginRegister;
