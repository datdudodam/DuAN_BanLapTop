import { memo } from "react";
import { Search, ShoppingCart, MapPin, User, Menu } from "lucide-react";
import "./style.scss";

const Header = () => {
  return (
    <header className="header">
      {/* Top Banner */}
      <div className="header-top-banner">
        <div className="container">
          <div className="banner-content">
            <span className="banner-title">Redmi Note 14 Series</span>
            <span className="banner-subtitle">
              Khoảnh khắc độc bản, tạo tác AI
            </span>
            <span className="banner-offer">Ưu Đãi Đến 2 Triệu</span>
            <button className="btn-buy-now">MUA NGAY</button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container header-container">
          {/* Logo */}
          <div className="header-logo">
            <img
              src="https://cdn.tgdd.vn/2023/10/crop/120_120.png"
              alt="Thế Giới Di Động"
              className="logo-img"
            />
          </div>

          {/* Search Bar */}
          <div className="header-search">
            <input
              type="text"
              placeholder="Nhấn mã giảm đến 1 triệu"
              className="search-input"
            />
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>

          {/* Right Actions */}
          <div className="header-actions">
            <button className="action-btn">
              <ShoppingCart size={20} />
              <span>Giỏ hàng</span>
            </button>
            <button className="action-btn">
              <MapPin size={20} />
              <span>
                Hồ Chí Minh <span className="caret">▼</span>
              </span>
            </button>
            <button className="action-btn login-btn">
              <User size={20} />
              <span>Đăng nhập</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-toggle">
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <div className="container nav-container">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Điện thoại
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Laptop
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Phụ kiện <span className="caret">▼</span>
              </a>
            </li>
            <li className="nav-item"> 
              <a href="#" className="nav-link">
                Smartwatch
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Đồng hồ
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Tablet
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Máy cũ, Thu cũ
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Màn hình, Máy in
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sim Thẻ cào
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Dịch vụ tiện ích <span className="caret">▼</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);