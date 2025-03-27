const addIcon = document.getElementById('add-icon');
const inputContainer = document.getElementById('input-container');
const urlInput = document.getElementById('url-input');

addIcon.addEventListener('click', function () {
  inputContainer.style.display = 'flex';
  addIcon.style.display = 'none';
});

function addUrl() {
  const url = urlInput.value.trim();
  if (url) {
    const iconContainer = document.getElementById('icon-container');
    const newIconWrapper = document.createElement('div');
    newIconWrapper.classList.add('icon-wrapper');
    newIconWrapper.onclick = function () {
      window.location.href = url;
    };
    
    const newIcon = document.createElement('div');
    newIcon.classList.add('icon');
    newIcon.textContent = '🔴'; // 아이콘 예시, 원하는 아이콘으로 변경 가능
    
    const iconText = document.createElement('span');
    iconText.textContent = url.split('/')[2]; // URL의 도메인명만 표시
    
    newIconWrapper.appendChild(newIcon);
    newIconWrapper.appendChild(iconText);
    
    iconContainer.insertBefore(newIconWrapper, inputContainer);
    urlInput.value = '';
    inputContainer.style.display = 'none';
    addIcon.style.display = 'block';
  }
}
