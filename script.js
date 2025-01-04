

  const pages = document.querySelectorAll('.question-page');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');

let currentPage = 0;

// 显示当前页面，隐藏其他页面
function showPage(pageIndex) {
  pages.forEach((page, index) => {
    page.style.display = index === pageIndex ? 'block' : 'none';
  });

  // 更新按钮状态
  prevBtn.disabled = pageIndex === 0;
  nextBtn.style.display = pageIndex === pages.length - 1 ? 'none' : 'inline-block';
  submitBtn.style.display = pageIndex === pages.length - 1 ? 'inline-block' : 'none';
}

// 点击“上一题”按钮
prevBtn.addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage -= 1;
    showPage(currentPage);
  }
});

// 点击“下一题”按钮
nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage += 1;
    showPage(currentPage);
  }
});

// 初始化显示第一页
showPage(currentPage);
