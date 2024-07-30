const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;

const rainDrops = Array.from({ length: columns }).fill(1);

const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const charsArray = characters.split('');

const draw = () => {
  context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = '#0F0';
  context.font = `${fontSize}px monospace`;

  rainDrops.forEach((y, index) => {
    const text = charsArray[Math.floor(Math.random() * charsArray.length)];
    const x = index * fontSize;

    context.fillText(text, x, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      rainDrops[index] = 0;
    }
    rainDrops[index]++;
  });
};

setInterval(draw, 33);

const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');

const encrypt = (text) => {
  return btoa(text);
};

const decrypt = (text) => {
  try {
    return atob(text);
  } catch (e) {
    return 'Invalid encrypted text';
  }
};

encryptBtn.addEventListener('click', () => {
  const encryptedText = encrypt(inputText.value);
  outputText.value = encryptedText;
});

decryptBtn.addEventListener('click', () => {
  const decryptedText = decrypt(inputText.value);
  outputText.value = decryptedText;
});
