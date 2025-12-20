import React from 'react';
import Modal from '../ui/Modal';
import ButtonComponent from '../ui/ButtonComponent';
import store from '../../redux/store';
import { set_open_log_out } from '../../redux/Slice/userSlice';
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ModalDefaultComponent } from '../ui/UtilsLayout';
import { iconsPath } from '../../utils/imagePath';

const MainLayout = () => {
  const { open_log_out } = useSelector((state) => state.user);

  // Function to handle logout
  // const logOut = () => {
  //   localStorage.clear();
  //   store.dispatch(set_open_log_out(false));
  //   window.location.href = 'https://dev.spatialgrid.ai/login';
  //   // window.location.href = 'http://localhost:3000/login';
  //   window.location.reload();
  // };

  // // Function to close modal
  // const closeModal = () => store.dispatch(set_open_log_out(false));

  return (
    <>
      {/* Main pages */}
      <Outlet />
      {/* Logout Confirmation Modal */}
      {/* <Modal isOpen={open_log_out} closeModal={closeModal}>
        <ModalDefaultComponent closeModal={closeModal}>
          <div className="bg-[#EE2B2A] rounded-full p-2 ">
            <img className="" src={iconsPath.logoutIcon} alt="" />
          </div>
          <h1 className="text-[#ffffff] font-bold sm:text-[10px] md:text-[12px] lg:text-[18px]">
            Confirm Logout
          </h1>
          <h2 className="text-[14px] sm:text-[10px] md:text-[12px] lg:text-[14px] font-normal font-inter text-white mb-5 leading-snug text-opacity-35">
            Are you sure you want to log out of your account?
          </h2>
          <div className="flex justify-center gap-4">
            <ButtonComponent
              className="bg-[#252729] hover:bg-[#252729]"
              onClick={closeModal}
            >
              Cancel
            </ButtonComponent>
            <ButtonComponent
              className="bg-[#EE2B2A] hover:bg-[#EE2B2A]"
              onClick={logOut}
            >
              Logout
            </ButtonComponent>
          </div>
        </ModalDefaultComponent>
      </Modal> */}
    </>
  );
};

export default MainLayout;
