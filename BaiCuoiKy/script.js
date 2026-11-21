// Dữ liệu các địa điểm du lịch nổi bật tại Đà Lạt
const placesData = [
  {
    id: 1,
    name: "Hồ Xuân Hương",
    category: "thien-nhien",
    categoryLabel: "Thiên nhiên",
    address: "Phường 1, Trung tâm TP. Đà Lạt",
    ticket: "Miễn phí",
    bestTime: "05:30 - 08:00 (ngắm bình minh) hoặc 16:30 - 18:30",
    image:
      "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=900&q=80",
    shortDesc:
      "Trái tim thơ mộng giữa lòng thành phố, bao quanh bởi rừng thông, bãi cỏ xanh và những vườn hoa rực rỡ.",
    fullDesc:
      "Hồ Xuân Hương là hồ nước nhân tạo hình trăng lưỡi liềm rộng khoảng 25 ha nằm ngay trung tâm Đà Lạt. Du khách có thể đạp vịt, đi xe ngựa quanh hồ hoặc thưởng thức cà phê ven bờ trong làn sương sớm."
  },
  {
    id: 2,
    name: "Đỉnh Langbiang",
    category: "thien-nhien",
    categoryLabel: "Thiên nhiên",
    address: "Thị trấn Lạc Dương, cách trung tâm 12km",
    ticket: "50.000 VNĐ/người (xe Jeep khứ hồi: 100.000 VNĐ)",
    bestTime: "07:00 - 10:30 sáng",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
    shortDesc:
      "Được mệnh danh là nóc nhà của Đà Lạt với tầm nhìn bao quát Suối Vàng, Suối Bạc và toàn cảnh cao nguyên.",
    fullDesc:
      "Nằm ở độ cao hơn 2.167m so với mực nước biển, đỉnh Langbiang gắn liền với huyền thoại tình yêu của chàng K'Lang và nàng H'Biang. Đây là điểm trekking, săn mây và đi xe Jeep địa hình hấp dẫn nhất Đà Lạt."
  },
  {
    id: 3,
    name: "Ga Đà Lạt",
    category: "kien-truc",
    categoryLabel: "Kiến trúc",
    address: "Số 1 Quang Trung, Phường 10, TP. Đà Lạt",
    ticket: "5.000 - 50.000 VNĐ (chưa gồm vé tàu đi Trại Mát)",
    bestTime: "08:00 - 11:00 hoặc 14:30 - 16:30",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80",
    shortDesc:
      "Nhà ga xe lửa cổ kính nhất Đông Dương với kiến trúc 3 chóp nhọn mô phỏng núi Langbiang hùng vĩ.",
    fullDesc:
      "Được người Pháp xây dựng từ năm 1932 theo phong cách Art Deco độc đáo, Ga Đà Lạt lưu giữ đầu máy hơi nước cổ và tuyến đường sắt răng cưa hiếm hoi trên thế giới phục vụ du khách tham quan Trại Mát."
  },
  {
    id: 4,
    name: "Quảng Trường Lâm Viên",
    category: "check-in",
    categoryLabel: "Check-in",
    address: "Đường Trần Quốc Toản, Phường 1, TP. Đà Lạt",
    ticket: "Miễn phí",
    bestTime: "15:30 - 20:00",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    shortDesc:
      "Biểu tượng hiện đại của Đà Lạt nổi bật với công trình nụ hoa Atiso và bông hoa Dã Quỳ kính màu khổng lồ.",
    fullDesc:
      "Nằm hướng thẳng ra Hồ Xuân Hương, Quảng trường Lâm Viên có tổng diện tích hơn 70.000 m². Đây là điểm hẹn vui chơi, trượt patin, chụp ảnh check-in không thể thiếu của giới trẻ khi đến Đà Lạt."
  },
  {
    id: 5,
    name: "Thiền Viện Trúc Lâm",
    category: "kien-truc",
    categoryLabel: "Kiến trúc",
    address: "Đường Trúc Lâm Yên Tử, Phường 3, TP. Đà Lạt",
    ticket: "Miễn phí (Cáp treo đồi Robin: 100.000 VNĐ/khứ hồi)",
    bestTime: "07:30 - 10:30 sáng",
    image:
      "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=900&q=80",
    shortDesc:
      "Ngôi thiền viện lớn nhất Lâm Đồng tọa lạc trên núi Phụng Hoàng, hướng nhìn xuống hồ Tuyền Lâm tĩnh lặng.",
    fullDesc:
      "Thiền viện Trúc Lâm mang đậm kiến trúc Phật giáo truyền thống kết hợp cảnh quan vườn hoa cẩm tú cầu, xác pháo, thiên điểu rực rỡ quanh năm, mang lại không gian thanh tịnh và an yên."
  },
  {
    id: 6,
    name: "Thung Lũng Tình Yêu",
    category: "check-in",
    categoryLabel: "Check-in",
    address: "Số 7 Mai Anh Đào, Phường 8, TP. Đà Lạt",
    ticket: "250.000 VNĐ/người lớn (bao gồm xe điện, đạp vịt)",
    bestTime: "08:00 - 16:00",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
    shortDesc:
      "Khu du lịch sinh thái lãng mạn bậc nhất Đà Lạt với đồi Vọng Cảnh, hồ Đa Thiện và cầu kính Ngàn Thông.",
    fullDesc:
      "Ẩn mình giữa những triền đồi thông xanh ngắt, Thung Lũng Tình Yêu sở hữu nhiều tiểu cảnh nghệ thuật, vườn hoa theo mùa, mê cung tình yêu và cầu kính 7D nhìn xuyên rừng thông."
  }
];

let currentCategory = "all";
let searchQuery = "";
let savedIds = [];

const placesGrid = document.getElementById("placesGrid");
const filterButtons = document.getElementById("filterButtons");
const searchInput = document.getElementById("searchInput");
const placeModal = document.getElementById("placeModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.getElementById("closeModalBtn");

const wishlistModal = document.getElementById("wishlistModal");
const openWishlistBtn = document.getElementById("openWishlistBtn");
const closeWishlistBtn = document.getElementById("closeWishlistBtn");
const wishlistBody = document.getElementById("wishlistBody");
const wishlistCount = document.getElementById("wishlistCount");

// Hiển thị danh sách thẻ địa điểm
function renderPlaces() {
  const filtered = placesData.filter((place) => {
    const matchCategory =
      currentCategory === "all" || place.category === currentCategory;
    const matchSearch =
      place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      place.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  if (filtered.length === 0) {
    placesGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #6b7280;">Không tìm thấy địa điểm phù hợp với từ khóa của bạn.</p>`;
    return;
  }

  placesGrid.innerHTML = filtered
    .map((place) => {
      const isSaved = savedIds.includes(place.id);
      return `
        <article class="place-card">
          <div class="place-thumb">
            <img src="${place.image}" alt="${place.name}" onerror="this.style.display='none'" />
            <span class="place-tag">${place.categoryLabel}</span>
          </div>
          <div class="place-body">
            <h3>${place.name}</h3>
            <p class="place-meta">📍 ${place.address}</p>
            <p class="place-desc">${place.shortDesc}</p>
            <div class="place-actions">
              <button class="btn-detail" onclick="openPlaceDetail(${place.id})">Xem chi tiết</button>
              <button
                class="btn-save ${isSaved ? "saved" : ""}"
                onclick="toggleSave(${place.id})"
                title="Lưu vào lịch trình"
              >
                ${isSaved ? "❤️" : "🤍"}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// Mở modal xem chi tiết địa điểm
window.openPlaceDetail = function (id) {
  const place = placesData.find((item) => item.id === id);
  if (!place) return;

  modalBody.innerHTML = `
    <img src="${place.image}" alt="${place.name}" class="modal-img" onerror="this.style.display='none'" />
    <span class="place-tag" style="position: static; display: inline-block; margin-bottom: 10px;">
      ${place.categoryLabel}
    </span>
    <h2 style="color: #1b4332; margin-bottom: 10px;">${place.name}</h2>
    <p>${place.fullDesc}</p>
    <div class="modal-details-list">
      <p><strong>📍 Địa chỉ:</strong> ${place.address}</p>
      <p><strong>🎟️ Giá vé tham khảo:</strong> ${place.ticket}</p>
      <p><strong>⏰ Thời điểm đẹp nhất:</strong> ${place.bestTime}</p>
    </div>
  `;
  placeModal.classList.add("open");
};

// Thêm / Xóa địa điểm khỏi lịch trình yêu thích
window.toggleSave = function (id) {
  if (savedIds.includes(id)) {
    savedIds = savedIds.filter((item) => item !== id);
  } else {
    savedIds.push(id);
  }
  wishlistCount.textContent = savedIds.length;
  renderPlaces();
  renderWishlist();
};

function renderWishlist() {
  if (savedIds.length === 0) {
    wishlistBody.innerHTML = `<p style="margin-top: 14px; color: #6b7280;">Bạn chưa lưu địa điểm nào. Hãy nhấn vào biểu tượng trái tim trên mỗi địa điểm để thêm vào lịch trình.</p>`;
    return;
  }

  const savedPlaces = placesData.filter((p) => savedIds.includes(p.id));
  wishlistBody.innerHTML = savedPlaces
    .map(
      (p) => `
      <div class="wishlist-item">
        <div>
          <strong>${p.name}</strong>
          <p style="font-size: 0.85rem; color: #6b7280;">${p.address}</p>
        </div>
        <button class="btn-save" onclick="toggleSave(${p.id})">Xóa</button>
      </div>
    `
    )
    .join("");
}

// Lọc theo danh mục
filterButtons.addEventListener("click", (e) => {
  if (!e.target.classList.contains("filter-btn")) return;
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  currentCategory = e.target.dataset.category;
  renderPlaces();
});

// Tìm kiếm theo từ khóa
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderPlaces();
});

// Đóng/mở modal
closeModalBtn.addEventListener("click", () => placeModal.classList.remove("open"));
placeModal.addEventListener("click", (e) => {
  if (e.target === placeModal) placeModal.classList.remove("open");
});

openWishlistBtn.addEventListener("click", () => {
  renderWishlist();
  wishlistModal.classList.add("open");
});
closeWishlistBtn.addEventListener("click", () =>
  wishlistModal.classList.remove("open")
);
wishlistModal.addEventListener("click", (e) => {
  if (e.target === wishlistModal) wishlistModal.classList.remove("open");
});

// Xử lý gửi form tư vấn
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("fullName").value;
  const days = document.getElementById("travelDays").value;
  const feedback = document.getElementById("formFeedback");
  feedback.textContent = `Cảm ơn ${name}! Chúng tôi đã ghi nhận yêu cầu tư vấn lịch trình ${days} tại Đà Lạt.`;
  e.target.reset();
});

// Khởi tạo giao diện ban đầu
renderPlaces();