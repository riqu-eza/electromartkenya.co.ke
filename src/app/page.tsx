/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import FeaturedProduct from "@/components/FeaturedProduct";
import TopCategories from "@/components/TopCategories";
import { get_all_categories } from "@/Services/Admin/category";
import { get_all_products } from "@/Services/Admin/product";
import useSWR from "swr";
import { toast, ToastContainer } from "react-toastify";
import {
  setCategoryData,
  setCatLoading,
  setProdLoading,
  setProductData,
} from "@/utils/AdminSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "./loading";
import { setUserData } from "@/utils/UserDataSlice";
import { RootState } from "@/Store/store";

export const metadata = {
  title: "ElectroMart Kenya - Affordable Electronics in Nairobi",
  description:
    "Shop the latest electronics online at ElectroMart Kenya. Find smartphones, laptops, TVs, home appliances, and more at unbeatable prices in Nairobi and across Kenya.",
  keywords: [
    "electronics Nairobi",
    "buy electronics online Kenya",
    "smartphones Kenya",
    "laptops Nairobi",
    "TVs Nairobi",
    "home appliances Kenya",
    "affordable electronics Kenya",
    "online electronics store Kenya",
    "electronics delivery Nairobi",
    "gaming consoles Kenya",
    "kitchen appliances Nairobi",
    "ElectroMart Kenya",
    "trusted electronics shop Nairobi",
  ],
  openGraph: {
    type: "website",
    url: "https://www.electromartkenya.co.ke/",

    title: "website - ElectroMart Kenya - Online Electronics Store",
    description:
      "Explore top electronics including smartphones, laptops, TVs, and appliances at ElectroMart Kenya. Fast delivery across Nairobi and Kenya.",
    // siteName: "ElectroMart Kenya",
    images: [
      {
        url: "https://www.electromartkenya.co.ke/og-electronics.png", // ensure this exists in /public folder
        
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    url: "https://www.electromartkenya.co.ke",
    title: "Dancah Technology – Smart Property Solutions",
    description:
      "Explore top electronics including smartphones, laptops, TVs, and appliances at ElectroMart Kenya. Fast delivery across Nairobi and Kenya.",
    images: [
      "https://www.electromartkenya.co.ke/og-electronics.png",
    ],
  },
};
export default function Home() {
  const dispatch = useDispatch();
  const categoryLoading = useSelector(
    (state: RootState) => state.Admin.catLoading
  );
  const productLoading = useSelector(
    (state: RootState) => state.Admin.productLoading
  );
  const [loading, setLoading] = useState(true);
  const [ratio, setRatio] = useState(16 / 9);
  // useEffect(() => {
  //   toast.warning("Application is under development , All data is dummy data")
  //   toast.warning('This is a demo website, to  heck how one of your own can look like')
  // }, [])

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) return;
    dispatch(setUserData(JSON.parse(userData)));
  }, []);

  useEffect(() => {
    FetchDataOFProductAndCategory();
  }, []);

  const FetchDataOFProductAndCategory = async () => {
    const categoryData = await get_all_categories();
    if (categoryData?.success !== true) toast.error(categoryData?.message);

    dispatch(setCategoryData(categoryData?.data));

    const productData = await get_all_products();
    if (productData?.success !== true) toast.error(productData?.message);

    dispatch(setProductData(productData?.data));

    setLoading(false);
  };

  useEffect(() => {
    dispatch(setCatLoading(loading));
    dispatch(setProdLoading(loading));
  }, [categoryLoading, productLoading, dispatch, loading]);

  return (
    <>
      <Navbar />
      <Hero setRatio={setRatio} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <TopCategories />
          <FeaturedProduct />
          <Footer />
        </>
      )}
      <ToastContainer />
    </>
  );
}
