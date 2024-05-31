import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../config/axios";
import { CONST } from "../../config";
import {
  signOut,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../../redux/slices/userSlice";

const Details = () => {
  const { currentUser, loading } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    business: currentUser.business,
    phone: currentUser.phone,
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await axiosInstance.post(
        CONST.uri.business.CREATE_BUSINESS + `/${currentUser._id}`,
        formData
      );
      const data = res.data;
      dispatch(updateUserSuccess(data));
      setFormData({});
      //  navigate("/dashboard");
    } catch (error) {
      dispatch(updateUserFailure(error));
      dispatch(signOut());
    }
  };
  return (
    <div className="h-full w-full p-4">
      <p className="text-xs font-medium mb-4">
        Update and customize the information of your store
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          disabled={currentUser.business}
          placeholder={
            currentUser.business ? currentUser.business : "Business Name"
          }
          id="business"
          className="bg-slate-100 rounded-md p-2 text-xs"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder={currentUser.phone ? currentUser.phone : "Mobile Number"}
          id="phone"
          disabled={currentUser.phone}
          className="bg-slate-100 rounded-md p-2 text-xs"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Save"}
        </button>
        {/* <OAuth /> */}
      </form>
    </div>
  );
};

export default Details;
