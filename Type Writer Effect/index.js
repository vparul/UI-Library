document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        { el: document.getElementById('text1'), content: 'Hello !!', bgColor: 'black', textColor: 'white' },
        { el: document.getElementById('text2'), content: 'Yes...?', bgColor: 'white', textColor: 'black' },
        { el: document.getElementById('text3'), content: 'Oh, I thought you were someone else', bgColor: 'black', textColor: 'white' },
        { el: document.getElementById('text4'), content: 'Yes, I am.', bgColor: 'white', textColor: 'black' },
        { el: document.getElementById('text5'), content: 'Bye !!!', bgColor: 'black', textColor: 'white' }
    ];

    const typeWriterEffect = (element, text, duration) => {
        return new Promise((resolve) => {
            element.style.opacity = 1; // Ensure text is visible
            element.textContent = "";
            let index = 0;
            const interval = setInterval(() => {
                element.textContent += text.charAt(index);
                index++;
                if (index > text.length) {
                    clearInterval(interval);
                    setTimeout(() => resolve(), 500); // Short delay before starting the erase effect
                }
            }, duration / text.length); // Fast typing speed
        });
    };

    const eraseEffect = (element, duration) => {
        return new Promise((resolve) => {
            let index = element.textContent.length;
            const interval = setInterval(() => {
                element.textContent = element.textContent.slice(0, index - 1);
                index--;
                if (index <= 0) {
                    clearInterval(interval);
                    setTimeout(() => resolve(), 500); // Short delay before starting the next text
                }
            }, duration / element.textContent.length); // Fast erasing speed
        });
    };

    const animate = async () => {
        for (const { el, content, bgColor, textColor } of texts) {
            // Change background color
            document.body.style.transition = 'background-color 500ms';
            document.body.style.backgroundColor = bgColor;
            
            // Wait for background color transition to complete
            await new Promise(resolve => setTimeout(resolve, 500));

            // Show text after a short delay
            el.style.transition = 'opacity 500ms';
            el.style.color = textColor;
            setTimeout(() => {
                el.style.opacity = 1; // Show text after delay
            }, 5); // 5ms delay

            await typeWriterEffect(el, content, 500); // Faster typewriter effect
            await eraseEffect(el, 500); // Faster erase effect

            // Hide the text after erasing
            el.style.opacity = 0;
        }
    };

    animate();
});
document.addEventListener('DOMContentLoaded', function() {
    const texts = [
        { el: document.getElementById('text1'), content: 'Hello !!', bgColor: 'black', textColor: 'white' },
        { el: document.getElementById('text2'), content: 'Yes...?', bgColor: 'white', textColor: 'black' },
        { el: document.getElementById('text3'), content: 'Oh, I thought you were someone else', bgColor: 'black', textColor: 'white' },
        { el: document.getElementById('text4'), content: 'Yes, I am.', bgColor: 'white', textColor: 'black' },
        { el: document.getElementById('text5'), content: 'Bye !!!', bgColor: 'black', textColor: 'white' }
    ];

    const typeWriterEffect = (element, text, duration) => {
        return new Promise((resolve) => {
            element.style.opacity = 1; // Ensure text is visible
            element.textContent = "";
            let index = 0;
            const interval = setInterval(() => {
                element.textContent += text.charAt(index);
                index++;
                if (index > text.length) {
                    clearInterval(interval);
                    setTimeout(() => resolve(), 500); // Short delay before starting the erase effect
                }
            }, duration / text.length); // Fast typing speed
        });
    };

    const eraseEffect = (element, duration) => {
        return new Promise((resolve) => {
            let index = element.textContent.length;
            const interval = setInterval(() => {
                element.textContent = element.textContent.slice(0, index - 1);
                index--;
                if (index <= 0) {
                    clearInterval(interval);
                    setTimeout(() => resolve(), 500); // Short delay before starting the next text
                }
            }, duration / element.textContent.length); // Fast erasing speed
        });
    };

    const animate = async () => {
        for (const { el, content, bgColor, textColor } of texts) {
            // Change background color
            document.body.style.transition = 'background-color 500ms';
            document.body.style.backgroundColor = bgColor;
            
            // Wait for background color transition to complete
            await new Promise(resolve => setTimeout(resolve, 500));

            // Show text after a short delay
            el.style.transition = 'opacity 500ms';
            el.style.color = textColor;
            setTimeout(() => {
                el.style.opacity = 1; // Show text after delay
            }, 5); // 5ms delay

            await typeWriterEffect(el, content, 500); // Faster typewriter effect
            await eraseEffect(el, 500); // Faster erase effect

            // Hide the text after erasing
            el.style.opacity = 0;
        }
    };

    animate();
});
