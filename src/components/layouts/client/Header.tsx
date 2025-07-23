import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import type { JwtPayload } from 'jwt-decode';
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { PiCheckCircleFill } from "react-icons/pi";
import { FaTruckFast } from "react-icons/fa6";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaBox } from "react-icons/fa";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaTag } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
interface CustomJwtPayload extends JwtPayload {
    name?: string;
}

const HeaderClient: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [userName, setUserName] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthStatus = () => {
            const token = localStorage.getItem('authToken');
            if (token) {
                try {
                    const decodedToken = jwtDecode<CustomJwtPayload>(token);
                    if (decodedToken.exp && decodedToken.exp * 1000 > Date.now()) {
                        setIsLoggedIn(true);
                        setUserName(decodedToken.name || null);
                    } else {
                        handleLogout(false);
                    }
                } catch (error) {
                    console.error("Lỗi giải mã token:", error);
                    handleLogout(false);
                }
            } else {
                setIsLoggedIn(false);
                setUserName(null);
            }
        };

        checkAuthStatus();
        window.addEventListener('storage', checkAuthStatus);
        return () => window.removeEventListener('storage', checkAuthStatus);
    }, []);

    const handleLogout = (shouldNavigate: boolean = true) => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        setUserName(null);
        if (shouldNavigate) navigate('/login');
    };

    return (
        <div className="header-client">
            {/* Topbar đỏ */}
            <div className="topbar text-white text-center py-1 text-sm font-medium bg-[#E5031B]">
                Nhà sách Hồng Ân – Điểm đến của tri thức
            </div>

            {/* Main Header */}
            <div className="main-header flex justify-between items-center px-4 py-3 bg-white border-b border-gray-200">
                {/* Logo */}
                <div className="logo flex items-center">
                    <img src="/images/logo.png" alt="Logo" className="h-[80px] w-[110px]" />
                </div>

                {/* Search bar */}
                <div className="search-bar relative mx-4 w-[45%]">
                    <input
                        type="text"
                        className="w-full h-[38px] pr-[42px] text-sm rounded-md border border-gray-300"
                        placeholder="Bạn cần tìm kiếm gì..."
                    />
                    <button className="absolute top-1/2 right-[10px] -translate-y-1/2 text-[#E5031B] text-base">
                        <IoSearch className="text-xl text-[#E5031B]" />

                    </button>
                </div>

                {/* Thông tin bên phải */}
                <div className="header-icons flex items-center gap-4 text-sm text-[#333]">
                    {/* Vị trí */}
                    <div className="location flex items-center gap-1 text-sm whitespace-nowrap text-[#333]">
                        <GrLocation className="text-xl text-[#A4A4A4]" />
                        <span>Q. Ninh Kiều, P. An Khánh, Cần Thơ</span>
                    </div>


                    {/* Tài khoản / Giỏ hàng */}
                    {!isLoggedIn ? (
                        <>
                            <Link to="/login" className="account-link flex items-center gap-[6px] text-[#333] no-underline">
                                <FaRegUser className="text-xl text-[#E5031B]" />
                                <span>Tài khoản</span>
                            </Link>
                            <Link to="/cartpage" className="cart-link flex items-center gap-[6px] text-[#333] no-underline">
                                <FiShoppingCart className="text-xl text-[#E5031B]" />
                                <span>Giỏ hàng</span>
                            </Link>
                        </>
                    ) : (
                        <>
                            <div className="relative dropdown account-link">
                                <a
                                    className="dropdown-toggle text-[#333] no-underline flex items-center gap-[6px]"
                                    href="#"
                                    id="userDropdown"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <i className="fas fa-user text-[#E5031B] text-xl"></i>
                                    <span>{userName || "Tài khoản"}</span>
                                </a>
                                <ul className="dropdown-menu absolute right-0 mt-2 w-[150px] bg-white border border-gray-200 shadow text-sm z-10">
                                    <li><Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/profile">Hồ sơ</Link></li>
                                    <li><Link className="dropdown-item block px-4 py-2 hover:bg-gray-100" to="/order-history">Đơn hàng</Link></li>
                                    <li><hr className="border-t my-1" /></li>
                                    {/* <li><button className="dropdown-item px-4 py-2 w-full text-left hover:bg-gray-100" onClick={handleLogout}>Đăng xuất</button></li> */}
                                </ul>
                            </div>
                            <Link to="/cartpage" className="cart-link flex items-center gap-[6px] text-[#333] no-underline">
                                <i className="fas fa-shopping-cart text-[#E5031B] text-xl"></i>
                                <span>Giỏ hàng</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            {/* Thanh cam kết */}
            <div className="commit-bar flex justify-center items-center gap-6 py-2 bg-white border-t border-b border-gray-200 whitespace-nowrap overflow-x-auto">
                <div className="commit-item flex items-center gap-[6px] text-sm text-[#333] relative">
                    <span className="commit-label text-[#1a73e8] font-semibold">Cam kết</span>
                    <PiCheckCircleFill className="fas fa-circle-check text-[#1a73e8] text-base"/>
                    <span className="commit-text text-[#333]">100% hàng thật</span>
                    <div className="ml-3 w-px h-4 bg-gray-300"></div>
                </div>
                <div className="commit-item flex items-center gap-[6px] text-sm text-[#333] relative">
                    <FaTruckFast className="fas fa-truck-fast text-[#1a73e8] text-base"/>
                    <span className="commit-text">Freeship mọi đơn</span>
                    <div className="ml-3 w-px h-4 bg-gray-300"></div>
                </div>
                <div className="commit-item flex items-center gap-[6px] text-sm text-[#333] relative">
                    <FaArrowsRotate className="fas fa-rotate text-[#1a73e8] text-base"/>
                    <span className="commit-text">Hoàn 200% nếu hàng giả</span>
                    <div className="ml-3 w-px h-4 bg-gray-300"></div>
                </div>
                <div className="commit-item flex items-center gap-[6px] text-sm text-[#333] relative">
                    <FaBox className="fas fa-box text-[#1a73e8] text-base"/>
                    <span className="commit-text">30 ngày đổi trả</span>
                    <div className="ml-3 w-px h-4 bg-gray-300"></div>
                </div>
                <div className="commit-item flex items-center gap-[6px] text-sm text-[#333] relative">
                    <MdOutlineLocalShipping className="fas fa-shipping-fast text-[#1a73e8] text-base"/>
                    <span className="commit-text">Giao nhanh 2h</span>
                    <div className="ml-3 w-px h-4 bg-gray-300"></div>
                </div>
                <div className="commit-item flex items-center gap-[6px] text-sm text-[#333]">
                    <FaTag className="fas fa-tags text-[#1a73e8] text-base"/>
                    <span className="commit-text">Giá siêu rẻ</span>
                </div>
            </div>
        </div>
    );
};

export default HeaderClient;
