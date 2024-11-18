import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Kiểm tra khi người dùng cuộn trang để hiển thị hoặc ẩn nút
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Thực hiện cuộn lên đầu trang khi nút được nhấn
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Cuộn mượt mà
        });
    };

    // Thêm sự kiện cuộn
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Dọn dẹp sự kiện khi component bị hủy
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 1000,
                display: isVisible ? 'block' : 'none', // Hiển thị khi cuộn xuống đủ
            }}
        >
            <button
                onClick={scrollToTop}
                style={{
                    height: '50px',
                    width: '50px',
                    padding: '10px 15px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    cursor: 'pointer',
                }}
            >
                ↑
            </button>
        </div>
    );
};

export default ScrollToTopButton;
