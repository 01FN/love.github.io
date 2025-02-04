                const alternatives = [
                    {text:"", images:"./assets/images/1.gif"},
                    {text:"<strong><b>🙏🏿( •̯́ ₃ •̯̀)🙏🏿</b></strong>", images:"./assets/images/2.gif"},
                    {text:"<strong><b>(˚ ˃̣̣̥⌓˂̣̣̥ )</b></strong>", images:"./assets/images/3.gif"},
                    {text:"<strong><b>YES, YES, YES, YES, YES, YES</b></strong>", images:"./assets/images/4.gif"},
                    {text:"<strong><b>TEKAN YES AJA UDAHH!!! 🤬😡</b></strong>", images:"./assets/images/5.gif"},
                ];

                const ohyes = {text:"Yeayy, mantap!", images:"./assets/images/yes.gif"};
                const title = document.querySelector('.title');
                const text = document.querySelector('.text');
                const cat = document.querySelector('.cat');
                const buttons = document.querySelectorAll('.button');
                const errorButton = document.querySelector('.button__error');

                let count = 0;
                function updateDisplay(item) {
                    console.log(item);
                    cat.src = item.images;
                    text.innerHTML = item.text;
                }

                errorButton.addEventListener('click', () => {
                    count = 0;
                    updateDisplay(alternatives[count]);
                    buttons.forEach(btn => btn.style.display = 'inline-block');
                    errorButton.style.display = 'none';
                });

                buttons.forEach(button => {
                    button.addEventListener('click', () => {
                        if(button.textContent === 'YES'){
                            updateDisplay(ohyes);
                            buttons.forEach(btn => btn.style.display = 'none');
                            errorButton.style.display = 'inline-block';
                        }
                        if (button.textContent === 'NO'){
                            count++;
                            if(count < alternatives.length){
                                updateDisplay(alternatives[count]);
                            } else {
                                buttons.forEach(btn => btn.style.display = 'none');
                                errorButton.style.display = 'inline-block';
                            }
                        }
                    });
                });